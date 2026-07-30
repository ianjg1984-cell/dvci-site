#!/usr/bin/env node
"use strict";

/* Researches and appends up to 10 new British idiom entries to
   assets/data.js by calling the Anthropic API directly, then lets the
   existing GitHub Action (generate-idiom-pages.yml) regenerate the
   per-idiom pages, A-Z index, and sitemap on the resulting commit.

   Runs via .github/workflows/daily-idiom-research.yml on a daily cron.
   Requires an ANTHROPIC_API_KEY secret. Node built-ins only (uses the
   global fetch available in Node 18+), no dependencies. */

const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = path.join(__dirname, "..");
const DATA_PATH = path.join(ROOT, "assets", "data.js");
const MODEL = "claude-sonnet-5";
const MAX_NEW_ENTRIES = 10;
const VALID_VERDICTS = new Set(["well-documented", "disputed", "mystery", "myth"]);

function loadIdioms() {
  const src = fs.readFileSync(DATA_PATH, "utf8");
  const wrapped = `${src}\nmodule.exports = { IDIOMS, CATEGORIES };`;
  const tmpFile = path.join(os.tmpdir(), `dvci-data-${Date.now()}-${Math.random().toString(36).slice(2)}.cjs`);
  fs.writeFileSync(tmpFile, wrapped);
  try {
    const mod = require(tmpFile);
    return { idioms: mod.IDIOMS, rawSource: src };
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

function buildPrompt(existingIdioms) {
  const existingList = existingIdioms.map((e) => `- "${e.phrase}" (id: ${e.id})`).join("\n");

  return `You are researching entries for the Dictionary of Very Curious Idioms (D.V.C.I.), a public website cataloguing the real, honestly-rated origins of British idioms.

Your job: research and write up to ${MAX_NEW_ENTRIES} NEW idiom entries that are:
- Genuinely British in origin or overwhelmingly associated with British English.
- NOT already in the list below (check both the phrase and its meaning for near-duplicates, not just exact id matches).
- Backed by real, verifiable etymological research you are confident in. Cite real, checkable sources (Oxford English Dictionary, Brewer's Dictionary of Phrase and Fable, Partridge's Dictionary of Slang, a named historical text/event, etc.). Do NOT invent citations or fabricate a specific historical anecdote you cannot actually verify is documented somewhere real.
- Rated honestly using a four-tier verdict system: "well-documented" (solid primary-source evidence), "disputed" (a leading plausible theory, but not settled), "mystery" (genuinely unknown, competing theories), or "myth" (a popular origin story that is verifiably wrong or unproven, where you explain what's more likely true instead).

CRITICAL quality gate: if you cannot confidently source ${MAX_NEW_ENTRIES} idioms today that meet this bar, return fewer instead. Returning 5, 2, or even 0 is completely fine and expected as the pool of well-documented British idioms gets used up over time. Never pad the list with fabricated, weakly-sourced, repeated, or rephrased entries just to hit a count. Quality and intellectual honesty matter far more than volume.

Idioms already in the repository (do not repeat these or close rewordings of them):
${existingList}

Respond with ONLY a raw JSON array (no markdown code fences, no commentary before or after), where each element has exactly these fields:
- "id": kebab-case, unique, derived from the phrase (e.g. "steal-thunder")
- "phrase": the idiom as commonly written (e.g. "Steal someone's thunder")
- "meaning": one sentence, plain English
- "category": a short category label (e.g. "Sailing & the Sea", "Slang & Everyday Speech", "Popular Myths", "Trade & Industry", "Medieval Life", "Law & Government" — reuse an existing category where it genuinely fits, or introduce a new short one if none fits)
- "verdict": one of "well-documented", "disputed", "mystery", "myth"
- "verdictLabel": the matching human label — "Well Documented", "Likely Origin (Disputed)", "Still a Mystery", or "Popular Myth" (or "Popular Myth (Probably)" if the myth is only probably wrong rather than certainly)
- "story": 3-6 sentences of engaging, precise, honestly-hedged prose explaining the origin. May include <em>title</em> HTML tags for book/play titles. Do not include markdown formatting.
- "mythVsFact": a string describing the popular wrong belief vs. reality, or the literal JSON value null if not applicable
- "source": a short citation naming the real source(s)

If you have zero idioms that meet the bar today, respond with an empty JSON array: []`;
}

async function callAnthropic(prompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY environment variable is not set.");
  }
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }]
    })
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Anthropic API request failed: ${res.status} ${res.statusText} — ${body.slice(0, 500)}`);
  }
  const data = await res.json();
  const text = data.content?.map((block) => block.text || "").join("") || "";
  return text;
}

function parseEntries(rawText) {
  const cleaned = rawText
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Failed to parse model output as JSON: ${err.message}\nRaw output:\n${cleaned.slice(0, 1000)}`);
  }
  if (!Array.isArray(parsed)) {
    throw new Error("Model output was valid JSON but not an array.");
  }
  return parsed;
}

function validateEntry(entry, existingIds, existingPhrases, seenIdsThisBatch) {
  const requiredStringFields = ["id", "phrase", "meaning", "category", "verdict", "verdictLabel", "story", "source"];
  for (const field of requiredStringFields) {
    if (typeof entry[field] !== "string" || !entry[field].trim()) {
      return { ok: false, reason: `missing or invalid field: ${field}` };
    }
  }
  if (entry.mythVsFact !== null && typeof entry.mythVsFact !== "string") {
    return { ok: false, reason: "mythVsFact must be a string or null" };
  }
  if (!VALID_VERDICTS.has(entry.verdict)) {
    return { ok: false, reason: `invalid verdict: ${entry.verdict}` };
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(entry.id)) {
    return { ok: false, reason: `id is not kebab-case: ${entry.id}` };
  }
  if (existingIds.has(entry.id) || seenIdsThisBatch.has(entry.id)) {
    return { ok: false, reason: `duplicate id: ${entry.id}` };
  }
  const normalizedPhrase = entry.phrase.trim().toLowerCase();
  if (existingPhrases.has(normalizedPhrase)) {
    return { ok: false, reason: `duplicate phrase: ${entry.phrase}` };
  }
  return { ok: true };
}

function jsEscapeDouble(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function entryToSource(entry) {
  const mythVsFactLine =
    entry.mythVsFact === null
      ? "null"
      : `"${jsEscapeDouble(entry.mythVsFact)}"`;
  return `  {
    id: "${entry.id}",
    phrase: "${jsEscapeDouble(entry.phrase)}",
    meaning: "${jsEscapeDouble(entry.meaning)}",
    category: "${jsEscapeDouble(entry.category)}",
    verdict: "${entry.verdict}",
    verdictLabel: "${jsEscapeDouble(entry.verdictLabel)}",
    story: \`${entry.story.replace(/`/g, "\\`")}\`,
    mythVsFact: ${mythVsFactLine},
    source: "${jsEscapeDouble(entry.source)}"
  }`;
}

function insertEntries(rawSource, validEntries) {
  const anchor = "\n];\n\nconst CATEGORIES";
  const idx = rawSource.indexOf(anchor);
  if (idx === -1) {
    throw new Error("Could not find the IDIOMS array closing anchor in assets/data.js.");
  }
  const before = rawSource.slice(0, idx);
  const after = rawSource.slice(idx);
  const newEntriesSource = validEntries.map((e) => ",\n" + entryToSource(e)).join("");
  return before + newEntriesSource + after;
}

async function main() {
  const { idioms, rawSource } = loadIdioms();
  const existingIds = new Set(idioms.map((e) => e.id));
  const existingPhrases = new Set(idioms.map((e) => e.phrase.trim().toLowerCase()));

  const prompt = buildPrompt(idioms);
  const rawText = await callAnthropic(prompt);
  const candidates = parseEntries(rawText);

  const accepted = [];
  const rejected = [];
  const seenIdsThisBatch = new Set();

  for (const candidate of candidates) {
    if (accepted.length >= MAX_NEW_ENTRIES) break;
    const result = validateEntry(candidate, existingIds, existingPhrases, seenIdsThisBatch);
    if (result.ok) {
      accepted.push(candidate);
      seenIdsThisBatch.add(candidate.id);
      existingPhrases.add(candidate.phrase.trim().toLowerCase());
    } else {
      rejected.push({ phrase: candidate.phrase, reason: result.reason });
    }
  }

  if (rejected.length > 0) {
    console.log(`Rejected ${rejected.length} candidate(s):`);
    for (const r of rejected) {
      console.log(`  - "${r.phrase}": ${r.reason}`);
    }
  }

  if (accepted.length === 0) {
    console.log("No valid new idioms today. Nothing to commit.");
    return;
  }

  const updatedSource = insertEntries(rawSource, accepted);
  fs.writeFileSync(DATA_PATH, updatedSource);

  console.log(`Added ${accepted.length} new idiom(s):`);
  for (const e of accepted) {
    console.log(`  - ${e.phrase} (${e.verdictLabel})`);
  }
}

main().catch((err) => {
  console.error("daily-idiom-research failed:", err.message);
  process.exit(1);
});
