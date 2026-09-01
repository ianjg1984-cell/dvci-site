#!/usr/bin/env node
"use strict";

/* Generates a real static page per old wives' tale
   (old-wives-tales/<id>.html) plus an index page (old-wives-tales.html).
   Deliberately separate from generate-idiom-pages.js and the idiom
   quiz: same honesty standard, different content type, different verdict
   system (rates the claim itself, not an origin story). Runs
   automatically via .github/workflows/generate-old-wives-tales-pages.yml
   on every push that touches assets/old-wives-tales-data.js. Node
   built-ins only, no dependencies. */

const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = path.join(__dirname, "..");
const DATA_PATH = path.join(ROOT, "assets", "old-wives-tales-data.js");
const OUT_DIR = path.join(ROOT, "old-wives-tales");
const SITE_URL = "https://dvci.com";

function loadTales() {
  const src = fs.readFileSync(DATA_PATH, "utf8");
  const wrapped = `${src}\nmodule.exports = { OLD_WIVES_TALES };`;
  const tmpFile = path.join(os.tmpdir(), `dvci-owt-${Date.now()}-${Math.random().toString(36).slice(2)}.cjs`);
  fs.writeFileSync(tmpFile, wrapped);
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const mod = require(tmpFile);
    return mod.OLD_WIVES_TALES;
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/\s+/g, " ").trim();
}

function verdictClass(verdict) {
  return (
    { confirmed: "confirmed", "partly-true": "partly-true", busted: "busted", folklore: "folklore" }[verdict] ||
    "folklore"
  );
}

function pageHTML(entry) {
  const title = `${escapeHtml(entry.phrase)} | Old Wives' Tales | D.V.C.I.`;
  const description = escapeAttr(`${entry.meaning} True, false, or somewhere in between, honestly rated.`);
  const url = `${SITE_URL}/old-wives-tales/${entry.id}.html`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="D.V.C.I." />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${url}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:wght@400;600&display=optional" rel="stylesheet" />
  <link rel="stylesheet" href="../assets/style.css" />
</head>
<body>

  <header class="site-header">
    <div class="container">
      <a class="brand" href="../index.html">
        <span class="mark">D.V.C.I.</span>
        <span class="full">Dictionary of Very Curious Idioms</span>
      </a>
      <nav class="main-nav">
        <a href="../index.html">Home</a>
        <a href="../index.html#repository">Repository</a>
        <a href="../old-wives-tales.html">Old Wives' Tales</a>
        <a href="../a-z.html">A-Z</a>
        <a href="../quiz.html">Quiz</a>
        <a href="../about.html">About</a>
        <a href="../contact.html">Contact</a>
        <a href="../suggest.html">Suggest</a>
        <a class="social-pill" href="https://www.instagram.com/dvci_com/" target="_blank" rel="noopener">Instagram</a>
        <a class="social-pill" href="https://www.facebook.com/profile.php?id=61592467116078" target="_blank" rel="noopener">Facebook</a>
      </nav>
    </div>
  </header>

  <section class="page-content">
    <a class="category-tag" href="../old-wives-tales.html">Old Wives' Tale</a>
    <span class="badge ${verdictClass(entry.verdict)}">${escapeHtml(entry.verdictLabel)}</span>
    <h1>${escapeHtml(entry.phrase)}</h1>
    <p class="meaning">"${escapeHtml(entry.meaning)}"</p>
    <div class="share-row">
      <button class="share-btn copy-link-btn" type="button">Copy Link</button>
      <a class="share-btn fb-share-btn" href="${facebookShareUrl}" target="_blank" rel="noopener" data-share-url="${url}">Share on Facebook</a>
    </div>
    <div class="story"><p>${entry.story}</p></div>
    ${entry.mythVsFact ? `<div class="myth-box"><strong>Myth vs. Fact</strong>${entry.mythVsFact}</div>` : ""}
    <div class="source-line"><strong>Sources:</strong> ${entry.source}</div>

    <p style="margin-top: 2rem;"><a href="../old-wives-tales.html">Back to Old Wives' Tales</a></p>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="social-row">
        <a href="https://www.instagram.com/dvci_com/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=61592467116078" target="_blank" rel="noopener">Facebook</a>
      </div>
      <p>&copy; 2026 Dictionary of Very Curious Idioms. Researched with care; corrections welcome.</p>
      <p><a href="../privacy.html">Privacy Policy</a></p>
    </div>
  </footer>

  <script src="../assets/script.js"></script>
  <!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "298330214869446984ccb7eb7a0d2c89"}'></script><!-- End Cloudflare Web Analytics -->
</body>
</html>
`;
}

function indexHTML(tales) {
  const sorted = [...tales].sort((a, b) => a.phrase.localeCompare(b.phrase, "en", { sensitivity: "base" }));
  const title = "Old Wives' Tales | D.V.C.I.";
  const description = escapeAttr(
    `${tales.length} old wives' tales, superstitions, and folk beliefs, each fact-checked and honestly rated: confirmed, busted, partly true, or unprovable folklore.`
  );
  const url = `${SITE_URL}/old-wives-tales.html`;

  const cardsHtml = sorted
    .map(
      (e) => `
      <a class="card" href="old-wives-tales/${e.id}.html">
        <span class="badge ${verdictClass(e.verdict)}">${escapeHtml(e.verdictLabel)}</span>
        <h3>${escapeHtml(e.phrase)}</h3>
        <p class="meaning">"${escapeHtml(e.meaning)}"</p>
      </a>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="D.V.C.I." />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${url}" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:wght@400;600&display=optional" rel="stylesheet" />
  <link rel="stylesheet" href="assets/style.css" />
</head>
<body>

  <header class="site-header">
    <div class="container">
      <a class="brand" href="index.html">
        <span class="mark">D.V.C.I.</span>
        <span class="full">Dictionary of Very Curious Idioms</span>
      </a>
      <nav class="main-nav">
        <a href="index.html">Home</a>
        <a href="index.html#repository">Repository</a>
        <a href="old-wives-tales.html" class="active">Old Wives' Tales</a>
        <a href="a-z.html">A-Z</a>
        <a href="quiz.html">Quiz</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="suggest.html">Suggest</a>
        <a class="social-pill" href="https://www.instagram.com/dvci_com/" target="_blank" rel="noopener">Instagram</a>
        <a class="social-pill" href="https://www.facebook.com/profile.php?id=61592467116078" target="_blank" rel="noopener">Facebook</a>
      </nav>
    </div>
  </header>

  <section class="repo-section">
    <div class="container">
      <h1>Old Wives' Tales</h1>
      <p class="sub">Superstitions, health warnings, and bits of inherited wisdom, fact-checked and honestly rated. Not "where does this phrase come from," but "is this actually true, and where did people start believing it."</p>
      <p class="count-line">${tales.length} tale${tales.length === 1 ? "" : "s"} so far</p>
      <div class="grid">${cardsHtml}
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="social-row">
        <a href="https://www.instagram.com/dvci_com/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=61592467116078" target="_blank" rel="noopener">Facebook</a>
      </div>
      <p>&copy; 2026 Dictionary of Very Curious Idioms. Researched with care; corrections welcome.</p>
      <p><a href="privacy.html">Privacy Policy</a></p>
    </div>
  </footer>

  <!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "298330214869446984ccb7eb7a0d2c89"}'></script><!-- End Cloudflare Web Analytics -->
</body>
</html>
`;
}

function main() {
  const tales = loadTales();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const existingFiles = new Set(fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".html")));
  const expectedFiles = new Set(tales.map((e) => `${e.id}.html`));

  for (const entry of tales) {
    fs.writeFileSync(path.join(OUT_DIR, `${entry.id}.html`), pageHTML(entry));
  }

  for (const file of existingFiles) {
    if (!expectedFiles.has(file)) {
      fs.unlinkSync(path.join(OUT_DIR, file));
    }
  }

  fs.writeFileSync(path.join(ROOT, "old-wives-tales.html"), indexHTML(tales));

  console.log(`Generated ${tales.length} old wives' tale pages and old-wives-tales.html.`);
}

main();
