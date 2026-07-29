/* D.V.C.I. — Dictionary of Very Curious Idioms
   Repository rendering, search/filter, modal, idiom-of-the-day, newsletter UI. */

(function () {
  // Anonymous emoji-reaction bar, backed by Supabase (no login required).
  // TODO: replace these two placeholders once the Supabase project + SQL
  // setup described in the project notes are done.
  const SUPABASE_URL = "https://sntdlmadodjvjuevkqxc.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_LCtvm2fyl6efrxK8RMYv5A_ruZxs-fE";
  const SUPABASE_READY =
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
      <div class="comments-section" data-idiom-id="${entry.id}">
        <h4>Discuss <span class="no-login-note">(no login needed)</span></h4>
        <form class="comment-form" data-idiom-id="${entry.id}" data-loaded-at="${Date.now()}">
          <input type="text" name="name" class="comment-name" maxlength="60" placeholder="Your name (optional)" autocomplete="off" />
          <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true" />
          <textarea name="comment" class="comment-text" maxlength="500" placeholder="Share a thought about this one..." required></textarea>
          <button type="submit">Post comment</button>
          <p class="comment-status"></p>
        </form>
        <p class="comments-note">New comments are held for a quick check before they show up here.</p>
        <div class="comment-list" data-idiom-id="${entry.id}"><p class="comments-note">Loading comments…</p></div>
      </div>
    `;
  }

  async function loadReactionCounts(idiomId) {
    if (!SUPABASE_READY) {
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
    if (!SUPABASE_READY) return;
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

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  async function loadCommentList(idiomId) {
    const list = document.querySelector(`.comment-list[data-idiom-id="${idiomId}"]`);
    if (!list) return;
    if (!SUPABASE_READY) {
      list.innerHTML = `<p class="comments-note">Comments aren't switched on yet.</p>`;
      return;
    }
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/comments?idiom_id=eq.${encodeURIComponent(idiomId)}&approved=eq.true&select=name,comment,created_at&order=created_at.asc`,
        { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } }
      );
      const rows = await res.json();
      if (!Array.isArray(rows) || rows.length === 0) {
        list.innerHTML = `<p class="comments-note">No comments yet — be the first.</p>`;
        return;
      }
      list.innerHTML = rows
        .map(
          (r) => `
            <div class="comment-item">
              <span class="comment-author">${escapeHTML(r.name || "Anonymous")}</span>
              <p class="comment-body">${escapeHTML(r.comment)}</p>
            </div>`
        )
        .join("");
    } catch (err) {
      list.innerHTML = `<p class="comments-note">Couldn't load comments right now.</p>`;
    }
  }

  function wireCommentForm(idiomId) {
    const form = document.querySelector(`.comment-form[data-idiom-id="${idiomId}"]`);
    if (!form) return;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const statusEl = form.querySelector(".comment-status");
      const nameEl = form.querySelector(".comment-name");
      const hpEl = form.querySelector(".hp-field");
      const textEl = form.querySelector(".comment-text");
      const loadedAt = parseInt(form.dataset.loadedAt, 10) || 0;

      if (!SUPABASE_READY) {
        statusEl.textContent = "Comments aren't switched on yet.";
        return;
      }
      // Honeypot: real visitors never see or fill this field.
      if (hpEl.value) return;
      // Anything submitted within 3s of the form appearing is almost
      // certainly a bot filling the form instantly, not a person typing.
      if (Date.now() - loadedAt < 3000) {
        statusEl.textContent = "Please try again in a moment.";
        return;
      }
      const commentText = textEl.value.trim();
      if (!commentText) return;

      const submitBtn = form.querySelector("button[type=submit]");
      submitBtn.disabled = true;
      statusEl.textContent = "Posting…";
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/comments`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal"
          },
          body: JSON.stringify({
            idiom_id: idiomId,
            name: nameEl.value.trim() || "Anonymous",
            comment: commentText.slice(0, 500)
          })
        });
        if (res.ok) {
          statusEl.textContent = "Thanks — your comment will show up once it's been checked.";
          textEl.value = "";
        } else {
          statusEl.textContent = "Something went wrong posting that — please try again.";
        }
      } catch (err) {
        statusEl.textContent = "Something went wrong posting that — please try again.";
      } finally {
        submitBtn.disabled = false;
      }
    });
  }

  function openModal(id) {
    const entry = IDIOMS.find((e) => e.id === id);
    if (!entry || !modalBackdrop) return;
    modalBody.innerHTML = modalHTML(entry);
    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    loadCommentList(entry.id);
    wireCommentForm(entry.id);
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

  // Newsletter signup — stores the email in Supabase; a database trigger
  // (configured separately, holds a private API key so it isn't in this
  // file) forwards new signups to Beehiiv, which sends the welcome email.
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("newsletter-email");
      const successMsg = document.getElementById("newsletter-success");
      const submitBtn = newsletterForm.querySelector("button[type=submit]");
      const email = emailInput.value.trim();
      if (!email) return;

      if (!SUPABASE_READY) {
        successMsg.textContent = "Signups aren't switched on yet — check back soon.";
        successMsg.classList.add("show");
        return;
      }

      submitBtn.disabled = true;
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_signups`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal"
          },
          body: JSON.stringify({ email })
        });
        if (res.ok || res.status === 409) {
          // 409 means this email is already subscribed — treat it the
          // same as success rather than exposing that distinction.
          successMsg.textContent = `Thanks — check ${email} for a welcome email.`;
          successMsg.classList.add("show");
          emailInput.value = "";
        } else {
          successMsg.textContent = "Something went wrong signing you up — please try again.";
          successMsg.classList.add("show");
        }
      } catch (err) {
        successMsg.textContent = "Something went wrong signing you up — please try again.";
        successMsg.classList.add("show");
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
})();
