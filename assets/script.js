/* D.V.C.I. — Dictionary of Very Curious Idioms
   Repository rendering, search/filter, modal, idiom-of-the-day, newsletter UI. */

(function () {
  // Giscus (GitHub Discussions-backed comments + emoji reactions).
  // TODO: replace these two placeholders with the real values from
  // https://giscus.app once Discussions is enabled and the giscus app is
  // installed on ianjg1984-cell/dvci-site — enter the repo there and it
  // generates both IDs for you.
  const GISCUS_REPO = "ianjg1984-cell/dvci-site";
  const GISCUS_REPO_ID = "R_kgDOTm-xrg";
  const GISCUS_CATEGORY = "General";
  const GISCUS_CATEGORY_ID = "DIC_kwDOTm-xrs4DCO0J";
  const GISCUS_READY = Boolean(GISCUS_REPO_ID && GISCUS_CATEGORY_ID);

  // Anonymous emoji-reaction bar, backed by Supabase (no login required).
  // TODO: replace these two placeholders once the Supabase project + SQL
  // setup described in the project notes are done.
  const SUPABASE_URL = "https://sntdlmadodjvjuevkqxc.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_LCtvm2fyl6efrxK8RMYv5A_ruZxs-fE";
  const REACTIONS_READY =
    SUPABASE_URL !== "REPLACE_WITH_SUPABASE_PROJECT_URL" &&
    SUPABASE_ANON_KEY !== "REPLACE_WITH_SUPABASE_ANON_PUBLIC_KEY";
  const REACTION_EMOJIS = [
    { emoji: "🤯", label: "Mind blown" },
    { emoji: "😂", label: "Funny" },
    { emoji: "🤔", label: "Huh, really?" },
    { emoji: "❤️", label: "Love this" }
  ];

  const grid = document.getElementById("repo-grid");
  const chipsWrap = document.getElementById("chips");
  const searchInput = document.getElementById("search-input");
  const countLine = document.getElementById("count-line");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalBody = document.getElementById("modal-body");
  const featuredSlot = document.getElementById("featured-slot");

  let activeCategory = "All";
  let query = "";

  function verdictClass(verdict) {
    return { "well-documented": "well-documented", "disputed": "disputed", "mystery": "mystery", "myth": "myth" }[verdict] || "disputed";
  }

  function cardHTML(entry) {
    return `
      <button class="card" data-id="${entry.id}" aria-haspopup="dialog">
        <span class="badge ${verdictClass(entry.verdict)}">${entry.verdictLabel}</span>
        <h3>${entry.phrase}</h3>
        <p class="meaning">"${entry.meaning}"</p>
        <span style="font-size:0.8rem; color: var(--ink-soft);">${entry.category}</span>
      </button>
    `;
  }

  function renderChips() {
    if (!chipsWrap) return;
    const cats = ["All", ...CATEGORIES];
    chipsWrap.innerHTML = cats
      .map(
        (c) =>
          `<button class="chip${c === activeCategory ? " active" : ""}" data-cat="${c}">${c}</button>`
      )
      .join("");
    chipsWrap.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        renderChips();
        renderGrid();
      });
    });
  }

  function renderGrid() {
    if (!grid) return;
    const q = query.trim().toLowerCase();
    const filtered = IDIOMS.filter((e) => {
      const matchesCat = activeCategory === "All" || e.category === activeCategory;
      const matchesQ =
        !q ||
        e.phrase.toLowerCase().includes(q) ||
        e.meaning.toLowerCase().includes(q) ||
        e.story.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });

    if (countLine) {
      countLine.textContent = `${filtered.length} of ${IDIOMS.length} curious idioms`;
    }

    grid.innerHTML = filtered.length
      ? filtered.map(cardHTML).join("")
      : `<div class="no-results" style="grid-column: 1/-1;">No idioms match that search yet. Try a different word, or check back — new entries are added regularly.</div>`;

    grid.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.id));
    });
  }

  function reactionBarHTML(entry) {
    const buttons = REACTION_EMOJIS.map(
      ({ emoji, label }) => `
        <button class="reaction-btn" data-emoji="${emoji}" aria-label="${label}" title="${label}">
          <span class="reaction-emoji">${emoji}</span>
          <span class="reaction-count" data-emoji-count="${emoji}">&nbsp;</span>
        </button>`
    ).join("");
    return `
      <div class="reaction-bar" data-idiom-id="${entry.id}">
        ${buttons}
      </div>
    `;
  }

  function modalHTML(entry) {
    return `
      <div class="category-tag">${entry.category}</div>
      <span class="badge ${verdictClass(entry.verdict)}">${entry.verdictLabel}</span>
      <h2>${entry.phrase}</h2>
      <p class="meaning">"${entry.meaning}"</p>
      <div class="story"><p>${entry.story}</p></div>
      ${
        entry.mythVsFact
          ? `<div class="myth-box"><strong>Myth vs. Fact</strong>${entry.mythVsFact}</div>`
          : ""
      }
      <div class="source-line"><strong>Sources:</strong> ${entry.source}</div>
      <div class="react-section">
        <h4>Quick react <span class="no-login-note">(no login needed)</span></h4>
        ${reactionBarHTML(entry)}
      </div>
      <div class="comments-section">
        <h4>Discuss</h4>
        <p class="comments-note">Full comments are powered by GitHub Discussions — signing in with a (free) GitHub account is required to post.</p>
        <div id="giscus-container"></div>
      </div>
    `;
  }

  async function loadReactionCounts(idiomId) {
    if (!REACTIONS_READY) {
      document.querySelectorAll(`.reaction-bar[data-idiom-id="${idiomId}"] .reaction-count`).forEach((el) => {
        el.textContent = "";
      });
      return;
    }
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/reaction_counts?idiom_id=eq.${encodeURIComponent(idiomId)}&select=emoji,count`,
        { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } }
      );
      const rows = await res.json();
      document.querySelectorAll(`.reaction-bar[data-idiom-id="${idiomId}"]`).forEach((bar) => {
        REACTION_EMOJIS.forEach(({ emoji }) => {
          const row = rows.find((r) => r.emoji === emoji);
          const el = bar.querySelector(`[data-emoji-count="${CSS.escape(emoji)}"]`);
          if (el) el.textContent = row && row.count ? row.count : "0";
        });
      });
    } catch (err) {
      // Network hiccup or Supabase not reachable — fail silently, buttons stay usable.
    }
  }

  function reactedKey(idiomId, emoji) {
    return `dvci_reacted_${idiomId}_${emoji}`;
  }

  async function sendReaction(idiomId, emoji, countEl) {
    if (!REACTIONS_READY) return;
    if (localStorage.getItem(reactedKey(idiomId, emoji))) return;
    localStorage.setItem(reactedKey(idiomId, emoji), "1");
    const current = parseInt(countEl.textContent, 10) || 0;
    countEl.textContent = current + 1;
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_reaction`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ p_idiom_id: idiomId, p_emoji: emoji })
      });
    } catch (err) {
      // If the request fails, the optimistic count stays — a harmless
      // over-count is preferable to fighting the UI back down.
    }
  }

  function wireReactionBar(idiomId) {
    document.querySelectorAll(`.reaction-bar[data-idiom-id="${idiomId}"] .reaction-btn`).forEach((btn) => {
      const emoji = btn.dataset.emoji;
      if (localStorage.getItem(reactedKey(idiomId, emoji))) {
        btn.classList.add("reacted");
      }
      btn.addEventListener("click", () => {
        if (localStorage.getItem(reactedKey(idiomId, emoji))) return;
        btn.classList.add("reacted");
        const countEl = btn.querySelector(`[data-emoji-count="${CSS.escape(emoji)}"]`);
        sendReaction(idiomId, emoji, countEl);
      });
    });
    loadReactionCounts(idiomId);
  }

  function loadComments(entry) {
    const container = document.getElementById("giscus-container");
    if (!container) return;
    container.innerHTML = "";
    if (!GISCUS_READY) {
      container.innerHTML = `<p class="comments-note">Comments aren't switched on yet.</p>`;
      return;
    }
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", GISCUS_REPO);
    script.setAttribute("data-repo-id", GISCUS_REPO_ID);
    script.setAttribute("data-category", GISCUS_CATEGORY);
    script.setAttribute("data-category-id", GISCUS_CATEGORY_ID);
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", entry.id);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "0");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    container.appendChild(script);
  }

  function openModal(id) {
    const entry = IDIOMS.find((e) => e.id === id);
    if (!entry || !modalBackdrop) return;
    modalBody.innerHTML = modalHTML(entry);
    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    loadComments(entry);
    wireReactionBar(entry.id);
  }

  function closeModal() {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
    document.getElementById("modal-close")?.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value;
      renderGrid();
    });
  }

  function renderFeatured() {
    if (!featuredSlot) return;
    const dayIndex = Math.floor(Date.now() / 86400000);
    const entry = IDIOMS[dayIndex % IDIOMS.length];
    featuredSlot.innerHTML = `
      <span class="badge ${verdictClass(entry.verdict)}">${entry.verdictLabel}</span>
      <h2>${entry.phrase}</h2>
      <p class="meaning">"${entry.meaning}"</p>
      <div class="story"><p>${entry.story}</p></div>
      ${
        entry.mythVsFact
          ? `<div class="myth-box"><strong>Myth vs. Fact</strong>${entry.mythVsFact}</div>`
          : ""
      }
      <div class="source-line"><strong>Sources:</strong> ${entry.source}</div>
      ${reactionBarHTML(entry)}
    `;
    wireReactionBar(entry.id);
  }

  renderChips();
  renderGrid();
  renderFeatured();

  // Newsletter form — front-end only for now. No email provider is connected
  // yet, so this just confirms the input and stores it locally as a stub.
  // Wire the <form id="newsletter-form"> up to a real provider (Mailchimp,
  // Beehiiv, ConvertKit, Substack, etc.) once one is chosen.
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("newsletter-email");
      const successMsg = document.getElementById("newsletter-success");
      if (!emailInput.value) return;
      successMsg.textContent = `Thanks — we'll be in touch at ${emailInput.value} once the newsletter launches.`;
      successMsg.classList.add("show");
      emailInput.value = "";
    });
  }
})();
