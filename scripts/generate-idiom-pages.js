#!/usr/bin/env node
"use strict";

/* Generates a real static page per idiom (idioms/<id>.html) plus
   sitemap.xml, so every entry has its own shareable URL with correct
   link-preview info (Open Graph / Twitter card tags). Runs automatically
   via .github/workflows/generate-idiom-pages.yml on every push that
   touches assets/data.js — no manual step required. Node built-ins only,
   no dependencies. */

const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = path.join(__dirname, "..");
const DATA_PATH = path.join(ROOT, "assets", "data.js");
const OUT_DIR = path.join(ROOT, "idioms");
const SITE_URL = "https://dvci.com";

const REACTION_EMOJIS = [
  { emoji: "🤯", label: "Mind blown" },
  { emoji: "😂", label: "Funny" },
  { emoji: "🤔", label: "Huh, really?" },
  { emoji: "❤️", label: "Love this" }
];

function loadIdioms() {
  const src = fs.readFileSync(DATA_PATH, "utf8");
  const wrapped = `${src}\nmodule.exports = { IDIOMS, CATEGORIES };`;
  const tmpFile = path.join(os.tmpdir(), `dvci-data-${Date.now()}-${Math.random().toString(36).slice(2)}.cjs`);
  fs.writeFileSync(tmpFile, wrapped);
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const mod = require(tmpFile);
    return mod.IDIOMS;
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
    { "well-documented": "well-documented", disputed: "disputed", mystery: "mystery", myth: "myth" }[verdict] ||
    "disputed"
  );
}

function reactionBarHTML(entry) {
  const buttons = REACTION_EMOJIS.map(
    ({ emoji, label }) => `
        <button class="reaction-btn" data-emoji="${emoji}" aria-label="${label}" title="${label}">
          <span class="reaction-emoji">${emoji}</span>
          <span class="reaction-count" data-emoji-count="${emoji}">&nbsp;</span>
        </button>`
  ).join("");
  return `<div class="reaction-bar" data-idiom-id="${entry.id}">${buttons}</div>`;
}

function pageHTML(entry) {
  const title = `${escapeHtml(entry.phrase)} | D.V.C.I.`;
  const description = escapeAttr(`${entry.meaning} The real, honestly-rated origin.`);
  const url = `${SITE_URL}/idioms/${entry.id}.html`;
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
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:wght@400;600&display=swap" rel="stylesheet" />
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
        <a href="../about.html">About</a>
        <a class="social-pill" href="https://www.instagram.com/dvci_com/" target="_blank" rel="noopener">Instagram</a>
        <a class="social-pill" href="https://www.facebook.com/profile.php?id=61592467116078" target="_blank" rel="noopener">Facebook</a>
      </nav>
    </div>
  </header>

  <section class="page-content">
    <div class="category-tag">${escapeHtml(entry.category)}</div>
    <span class="badge ${verdictClass(entry.verdict)}">${escapeHtml(entry.verdictLabel)}</span>
    <h1>${escapeHtml(entry.phrase)}</h1>
    <p class="meaning">"${escapeHtml(entry.meaning)}"</p>
    <div class="share-row">
      <button class="share-btn copy-link-btn" type="button">Copy Link</button>
      <a class="share-btn" href="${facebookShareUrl}" target="_blank" rel="noopener">Share on Facebook</a>
    </div>
    <div class="story"><p>${entry.story}</p></div>
    ${entry.mythVsFact ? `<div class="myth-box"><strong>Myth vs. Fact</strong>${entry.mythVsFact}</div>` : ""}
    <div class="source-line"><strong>Sources:</strong> ${entry.source}</div>

    <div class="react-section">
      <h4>Quick react <span class="no-login-note">(no login needed)</span></h4>
      ${reactionBarHTML(entry)}
    </div>

    <div class="comments-section" data-idiom-id="${entry.id}">
      <h4>Discuss <span class="no-login-note">(no login needed)</span></h4>
      <form class="comment-form" data-idiom-id="${entry.id}">
        <input type="text" name="name" class="comment-name" maxlength="60" placeholder="Your name (optional)" autocomplete="off" />
        <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <textarea name="comment" class="comment-text" maxlength="500" placeholder="Share a thought about this one..." required></textarea>
        <button type="submit">Post comment</button>
        <p class="comment-status"></p>
      </form>
      <p class="comments-note">New comments are held for a quick check before they show up here.</p>
      <div class="comment-list" data-idiom-id="${entry.id}"><p class="comments-note">Loading comments…</p></div>
    </div>

    <p style="margin-top: 2rem;"><a href="../index.html#repository">Back to the full repository</a></p>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="social-row">
        <a href="https://www.instagram.com/dvci_com/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=61592467116078" target="_blank" rel="noopener">Facebook</a>
      </div>
      <p>&copy; 2026 Dictionary of Very Curious Idioms. Researched with care; corrections welcome.</p>
    </div>
  </footer>

  <script src="../assets/data.js"></script>
  <script>window.DVCI_STANDALONE_IDIOM_ID = "${entry.id}";</script>
  <script src="../assets/script.js"></script>
</body>
</html>
`;
}

function sitemapXML(idioms) {
  const urls = [`${SITE_URL}/`, `${SITE_URL}/about.html`, ...idioms.map((e) => `${SITE_URL}/idioms/${e.id}.html`)];
  const body = urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function main() {
  const idioms = loadIdioms();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const existingFiles = new Set(fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".html")));
  const expectedFiles = new Set(idioms.map((e) => `${e.id}.html`));

  for (const entry of idioms) {
    fs.writeFileSync(path.join(OUT_DIR, `${entry.id}.html`), pageHTML(entry));
  }

  // Clean up pages for any idiom removed from data.js. Shouldn't normally
  // happen since entries are only ever appended, but keeps things tidy.
  for (const file of existingFiles) {
    if (!expectedFiles.has(file)) {
      fs.unlinkSync(path.join(OUT_DIR, file));
    }
  }

  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemapXML(idioms));

  console.log(`Generated ${idioms.length} idiom pages and sitemap.xml.`);
}

main();
