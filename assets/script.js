/* D.V.C.I. — Dictionary of Very Curious Idioms
   Repository rendering, search/filter, modal, idiom-of-the-day, newsletter UI. */

(function () {
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
    `;
  }

  function openModal(id) {
    const entry = IDIOMS.find((e) => e.id === id);
    if (!entry || !modalBackdrop) return;
    modalBody.innerHTML = modalHTML(entry);
    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
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
    `;
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
