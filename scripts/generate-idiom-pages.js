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
const CATEGORIES_DIR = path.join(ROOT, "categories");
const SITE_URL = "https://dvci.com";

// Hand-written intros for categories that exist today. Anything not
// listed here (e.g. a brand new category from a future research batch)
// falls back to a plain generated description — see categoryBlurb().
const CATEGORY_BLURBS = {
  "Sailing & the Sea": "English picked up a huge number of everyday phrases from centuries of naval and merchant seafaring life. Every idiom here has a nautical origin.",
  "Slang & Everyday Speech": "Not every idiom comes from a single grand event. Plenty are just old slang that stuck around, rooted in ordinary spoken English rather than a documented incident.",
  "Popular Myths": "Every idiom on this page shares one thing: a popular origin story that turns out to be wrong, unproven, or invented well after the fact. Here's what's actually documented instead.",
  "Still Unsolved": "Genuine etymological mysteries. Nobody, including professional lexicographers, actually knows for certain where these came from.",
  "Trade & Industry": "Idioms rooted in the trades, crafts, and industries that shaped everyday English.",
  "Sport & Military": "Idioms with roots on the parade ground, the playing field, or somewhere in between.",
  "Law & Government": "Idioms that trace back to real laws, courts, or acts of government.",
  "History & Empire": "Idioms shaped by real historical events and the machinery of empire.",
  "Food & Dining": "Idioms that came out of the kitchen, the dinner table, or the pub.",
  "War & Conflict": "Idioms forged in wartime, from the English Civil War to the 20th century.",
  "Language Itself": "Idioms that are really about language changing shape over time: mishearings, puns, and words drifting from their original meaning.",
  "Medieval Life": "Idioms rooted in the customs, disputes, and everyday life of medieval England.",
  "Music": "Idioms borrowed from musical instruments and performance.",
  "Literature": "Idioms that trace back to specific, identifiable works of literature.",
  "Theatre & Performance": "Idioms with roots backstage or on the boards.",
  "Health & Medicine": "Idioms rooted in real, and sometimes alarming, medical history.",
  "Regional Expressions": "Not every entry here is a nationwide idiom. These are living dialect words and phrases tied to specific parts of Britain, still spoken today, not relics from a history book."
};

function categorySlug(category) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function categoryBlurb(category) {
  return CATEGORY_BLURBS[category] || `Every idiom in the repository filed under "${category}", each with its origin honestly rated.`;
}

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
    <a class="category-tag" href="../categories/${categorySlug(entry.category)}.html">${escapeHtml(entry.category)}</a>
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
      <h4>Quick react</h4>
      ${reactionBarHTML(entry)}
    </div>

    <div class="comments-section" data-idiom-id="${entry.id}">
      <h4>Discuss</h4>
      <form class="comment-form" data-idiom-id="${entry.id}">
        <input type="text" name="name" class="comment-name" maxlength="60" placeholder="Your name (optional)" autocomplete="off" />
        <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <textarea name="comment" class="comment-text" maxlength="500" placeholder="Share a thought about this one..." required></textarea>
        <button type="submit">Submit for Approval</button>
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
      <p><a href="../privacy.html">Privacy Policy</a></p>
    </div>
  </footer>

  <script src="../assets/data.js"></script>
  <script>window.DVCI_STANDALONE_IDIOM_ID = "${entry.id}";</script>
  <script src="../assets/script.js"></script>
  <!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "298330214869446984ccb7eb7a0d2c89"}'></script><!-- End Cloudflare Web Analytics -->
</body>
</html>
`;
}

function categoryPageHTML(category, idiomsInCategory, allCategories) {
  const slug = categorySlug(category);
  const count = idiomsInCategory.length;
  const titleSuffix = /expressions|speech|idioms/i.test(category) ? "" : " Idioms";
  const title = `${escapeHtml(category)}${titleSuffix} | D.V.C.I.`;
  const description = escapeAttr(
    `${count} idiom${count === 1 ? "" : "s"} filed under "${category}" in the Dictionary of Very Curious Idioms, each with a real, honestly-rated origin.`
  );
  const url = `${SITE_URL}/categories/${slug}.html`;

  const cardsHtml = idiomsInCategory
    .map(
      (e) => `
      <a class="card" href="../idioms/${e.id}.html">
        <span class="badge ${verdictClass(e.verdict)}">${escapeHtml(e.verdictLabel)}</span>
        <h3>${escapeHtml(e.phrase)}</h3>
        <p class="meaning">"${escapeHtml(e.meaning)}"</p>
      </a>`
    )
    .join("");

  const otherCategoriesHtml = allCategories
    .filter((c) => c !== category)
    .map((c) => `<a class="chip" href="${categorySlug(c)}.html">${escapeHtml(c)}</a>`)
    .join("\n        ");

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

  <section class="repo-section">
    <div class="container">
      <h1>${escapeHtml(category)}</h1>
      <p class="sub">${categoryBlurb(category)}</p>
      <p class="count-line">${count} idiom${count === 1 ? "" : "s"} in this category</p>
      <div class="grid">${cardsHtml}
      </div>

      <h2 style="margin-top: 3rem; color: var(--gold-bright); text-align: center;">Browse other categories</h2>
      <div class="chips">
        <a class="chip" href="../index.html#repository">All</a>
        ${otherCategoriesHtml}
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
      <p><a href="../privacy.html">Privacy Policy</a></p>
    </div>
  </footer>

  <!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "298330214869446984ccb7eb7a0d2c89"}'></script><!-- End Cloudflare Web Analytics -->
</body>
</html>
`;
}

function azIndexHTML(idioms) {
  const sorted = [...idioms].sort((a, b) => a.phrase.localeCompare(b.phrase, "en", { sensitivity: "base" }));
  const groups = new Map();
  for (const entry of sorted) {
    const letter = entry.phrase.charAt(0).toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter).push(entry);
  }
  const letters = [...groups.keys()].sort();

  const jumpNav = letters.map((l) => `<a href="#letter-${l}">${l}</a>`).join("\n        ");
  const groupsHtml = letters
    .map(
      (l) => `
      <div class="az-group" id="letter-${l}">
        <h2>${l}</h2>
        <ul>
          ${groups
            .get(l)
            .map(
              (e) =>
                `<li><a href="idioms/${e.id}.html">${escapeHtml(e.phrase)}</a><span class="az-meaning">${escapeHtml(e.meaning)}</span></li>`
            )
            .join("\n          ")}
        </ul>
      </div>`
    )
    .join("\n");

  const title = "A-Z Index | D.V.C.I.";
  const description = escapeAttr(
    `Every idiom in the Dictionary of Very Curious Idioms, listed alphabetically (${idioms.length} so far).`
  );
  const url = `${SITE_URL}/a-z.html`;

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
        <a href="a-z.html" class="active">A-Z</a>
        <a href="quiz.html">Quiz</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="suggest.html">Suggest</a>
        <a class="social-pill" href="https://www.instagram.com/dvci_com/" target="_blank" rel="noopener">Instagram</a>
        <a class="social-pill" href="https://www.facebook.com/profile.php?id=61592467116078" target="_blank" rel="noopener">Facebook</a>
      </nav>
    </div>
  </header>

  <section class="page-content az-page">
    <h1>A-Z Index</h1>
    <p>Every idiom in the repository so far (${idioms.length} and counting), listed alphabetically. Tap a letter to jump straight there.</p>
    <nav class="az-jump">
        ${jumpNav}
    </nav>
    <div class="az-groups">${groupsHtml}
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

function sitemapXML(idioms, categories) {
  const urls = [
    `${SITE_URL}/`,
    `${SITE_URL}/about.html`,
    `${SITE_URL}/contact.html`,
    `${SITE_URL}/a-z.html`,
    `${SITE_URL}/quiz.html`,
    `${SITE_URL}/privacy.html`,
    ...categories.map((c) => `${SITE_URL}/categories/${categorySlug(c)}.html`),
    ...idioms.map((e) => `${SITE_URL}/idioms/${e.id}.html`)
  ];
  const body = urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function main() {
  const idioms = loadIdioms();
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(CATEGORIES_DIR, { recursive: true });

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

  const categories = [...new Set(idioms.map((e) => e.category))].sort();
  const byCategory = new Map();
  for (const entry of idioms) {
    if (!byCategory.has(entry.category)) byCategory.set(entry.category, []);
    byCategory.get(entry.category).push(entry);
  }

  const existingCategoryFiles = new Set(fs.readdirSync(CATEGORIES_DIR).filter((f) => f.endsWith(".html")));
  const expectedCategoryFiles = new Set(categories.map((c) => `${categorySlug(c)}.html`));

  for (const category of categories) {
    const slug = categorySlug(category);
    const html = categoryPageHTML(category, byCategory.get(category), categories);
    fs.writeFileSync(path.join(CATEGORIES_DIR, `${slug}.html`), html);
  }

  for (const file of existingCategoryFiles) {
    if (!expectedCategoryFiles.has(file)) {
      fs.unlinkSync(path.join(CATEGORIES_DIR, file));
    }
  }

  fs.writeFileSync(path.join(ROOT, "a-z.html"), azIndexHTML(idioms));
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemapXML(idioms, categories));

  console.log(
    `Generated ${idioms.length} idiom pages, ${categories.length} category pages, a-z.html, and sitemap.xml.`
  );
}

main();
