(function () {
  "use strict";

  const COUNCIL = window.COUNCIL;
  const CATEGORIES = window.CATEGORIES;
  const FACILITIES = window.FACILITIES;
  const NOW = new Date().getFullYear();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = () => window.matchMedia("(max-width: 899px)").matches;

  // Simple line icons, one per category. Shape and label always accompany colour.
  const ICONS = {
    pool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 16c2 0 2-1.5 4-1.5S8 16 10 16s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M2 20c2 0 2-1.5 4-1.5S8 20 10 20s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0M8 8h8"/></svg>',
    library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h13"/><path d="M9 7h6"/></svg>',
    park: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"/><path d="M12 15c-4 0-7-2.5-7-6a7 7 0 0 1 14 0c0 3.5-3 6-7 6Z"/><path d="M9 22h6"/></svg>',
    community: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2A5 5 0 0 1 21 19"/></svg>',
    sport: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m12 7 4 3-1.5 4.5h-5L8 10Z"/><path d="M12 3v4M21 10.5l-5-.5M18 19l-3.5-4.5M6 19l3.5-4.5M3 10.5l5-.5"/></svg>',
    toilet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="4.5" r="1.8"/><circle cx="17" cy="4.5" r="1.8"/><path d="M5 9h4l1 6H8v6M6 15v6M15 9h4v6h-1v6h-2v-6h-1Z"/></svg>'
  };
  const SECTION_ICONS = {
    money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 10v4M18 10v4"/></svg>',
    why: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    decision: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h-8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>',
    who: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4Z"/></svg>',
    history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    features: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'
  };

  // ---------- Formatting ----------
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function money(n, { short = false } = {}) {
    if (n >= 1e6) {
      const v = (n / 1e6).toFixed(1).replace(/\.0$/, "");
      return short ? `$${v}m` : `$${v} million`;
    }
    if (n >= 1e4 && short) return `$${Math.round(n / 1e3)}k`;
    if (n >= 1) return "$" + Math.round(n).toLocaleString("en-AU");
    return "$" + n.toFixed(2);
  }
  function cents(n) {
    if (n < 1) return `${Math.max(1, Math.round(n * 100))} cents`;
    return "$" + n.toFixed(2);
  }
  const number = (n) => Math.round(n).toLocaleString("en-AU");
  const perResident = (f) => f.annualCost / COUNCIL.population;
  const perVisit = (f) => f.annualCost / f.visitsPerYear;
  const age = (f) => NOW - f.opened;
  const catColor = (cat) => `var(--cat-${cat})`;

  function categoryAverage(cat) {
    const list = FACILITIES.filter((f) => f.category === cat);
    return list.reduce((s, f) => s + f.annualCost, 0) / list.length;
  }

  // ---------- State ----------
  const state = {
    cats: new Set(Object.keys(CATEGORIES)),
    query: "",
    sort: "name",
    selected: null
  };

  // ---------- Elements ----------
  const $ = (id) => document.getElementById(id);
  const els = {
    chips: $("chips"), search: $("search"), sort: $("sort"), results: $("results"),
    summary: $("summary"), browse: $("browse-view"), detailView: $("detail-view"),
    detail: $("detail"), back: $("back"), share: $("share"), sidebar: $("sidebar"), toast: $("toast")
  };
  $("council-name").textContent = COUNCIL.name;
  $("data-source").textContent = COUNCIL.source;
  $("data-updated").textContent = COUNCIL.dataUpdated;

  // ---------- Map ----------
  const map = L.map("map", { zoomControl: false, attributionControl: true }).setView([-33.888, 151.2], 13);
  L.control.zoom({ position: "topright" }).addTo(map);
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  L.tileLayer(`https://{s}.basemaps.cartocdn.com/${dark ? "dark_all" : "light_all"}/{z}/{x}/{y}{r}.png`, {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(map);

  const markers = {};
  FACILITIES.forEach((f) => {
    const icon = L.divIcon({
      className: "",
      html: `<div class="marker" style="--c:${catColor(f.category)}">${ICONS[f.category]}</div>`,
      iconSize: [34, 34],
      iconAnchor: [4, 34]
    });
    const m = L.marker(f.coords, { icon, title: `${f.name}, ${CATEGORIES[f.category].singular}`, alt: f.name, riseOnHover: true });
    m.bindTooltip(f.name, { className: "map-label", direction: "top", offset: [13, -32] });
    m.on("click", () => go(f.id));
    m.addTo(map);
    markers[f.id] = m;
  });

  function setActiveMarker(id) {
    Object.entries(markers).forEach(([key, m]) => {
      const el = m.getElement()?.querySelector(".marker");
      if (el) el.classList.toggle("is-active", key === id);
      m.setZIndexOffset(key === id ? 1000 : 0);
    });
  }

  // ---------- Filtering ----------
  function visibleFacilities() {
    const q = state.query.trim().toLowerCase();
    const list = FACILITIES.filter((f) =>
      state.cats.has(f.category) &&
      (!q || [f.name, f.suburb, f.address, CATEGORIES[f.category].singular].join(" ").toLowerCase().includes(q))
    );
    const sorters = {
      name: (a, b) => a.name.localeCompare(b.name),
      annual: (a, b) => b.annualCost - a.annualCost,
      capital: (a, b) => b.capitalCost - a.capitalCost,
      age: (a, b) => a.opened - b.opened,
      perVisit: (a, b) => perVisit(b) - perVisit(a)
    };
    return list.sort(sorters[state.sort]);
  }

  function renderChips() {
    els.chips.insertAdjacentHTML("beforeend", Object.entries(CATEGORIES).map(([key, c]) => {
      const n = FACILITIES.filter((f) => f.category === key).length;
      return `<label class="chip" style="--c:${catColor(key)}">
        <input type="checkbox" value="${key}" checked>
        <span class="dot" aria-hidden="true">${ICONS[key]}</span>
        ${esc(c.label)} <span class="count">${n}</span>
      </label>`;
    }).join(""));
    els.chips.addEventListener("change", (e) => {
      if (e.target.checked) state.cats.add(e.target.value);
      else state.cats.delete(e.target.value);
      renderBrowse(true);
    });
  }

  function renderBrowse(refit) {
    const list = visibleFacilities();
    const ids = new Set(list.map((f) => f.id));

    Object.entries(markers).forEach(([id, m]) => {
      if (ids.has(id)) { if (!map.hasLayer(m)) m.addTo(map); }
      else if (map.hasLayer(m)) map.removeLayer(m);
    });

    const total = list.reduce((s, f) => s + f.annualCost, 0);
    els.summary.innerHTML = list.length ? `
      <div>
        <div class="stat-label">Running ${list.length === 1 ? "this place" : `these ${list.length} places`} costs</div>
        <div class="stat-value">${money(total)} a year</div>
      </div>
      <div>
        <div class="stat-label">That is about</div>
        <div class="stat-value">${cents(total / COUNCIL.population)}</div>
        <div class="stat-hint">per resident, per year</div>
      </div>` : "";
    els.summary.hidden = !list.length;

    if (!list.length) {
      els.results.innerHTML = `<li class="empty">
        <p>No places match your search.</p>
        <button class="btn" type="button" id="clear-filters">Show all places</button>
      </li>`;
      $("clear-filters").addEventListener("click", resetFilters);
    } else {
      els.results.innerHTML = list.map((f) => `
        <li>
          <button class="result" type="button" data-id="${f.id}">
            <span class="cat-icon" style="--c:${catColor(f.category)}" aria-hidden="true">${ICONS[f.category]}</span>
            <span>
              <span class="result-name">${esc(f.name)}</span>
              <span class="result-meta">${esc(CATEGORIES[f.category].singular)} · ${esc(f.suburb)} · ${age(f)} years old</span>
            </span>
            <span class="result-cost">
              <strong>${money(f.annualCost, { short: true })}</strong>
              <span>a year</span>
            </span>
          </button>
        </li>`).join("");
    }

    if (refit && list.length) {
      const bounds = L.latLngBounds(list.map((f) => f.coords));
      // On mobile the bottom sheet overlaps the map edge, so leave extra room at the bottom.
      map.fitBounds(bounds, { paddingTopLeft: [32, 32], paddingBottomRight: [32, isMobile() ? 56 : 32], maxZoom: 15, animate: !reduceMotion });
    }
  }

  function resetFilters() {
    state.query = "";
    els.search.value = "";
    state.cats = new Set(Object.keys(CATEGORIES));
    els.chips.querySelectorAll("input").forEach((i) => (i.checked = true));
    renderBrowse(true);
  }

  // ---------- Detail ----------
  function renderDetail(f) {
    const cat = CATEGORIES[f.category];
    const avg = categoryAverage(f.category);
    const sameCat = FACILITIES.filter((x) => x.category === f.category).length;
    const maxBar = Math.max(f.annualCost, avg);
    const share = perResident(f);
    const conditionClass = f.condition.rating === "Good" ? "pill-good" : "pill-fair";
    const breakdownMax = Math.max(...f.breakdown.map((b) => b.amount));

    const timeline = [];
    if (f.builtOriginally) timeline.push({ year: f.builtOriginally, text: "Original building constructed" });
    timeline.push({ year: f.opened, text: f.builtOriginally ? `Opened as a ${cat.singular.toLowerCase()}` : "Opened to the public" });
    if (f.decision.year !== f.opened) timeline.push({ year: f.decision.year, text: "Council decision on its current form" });
    if (f.lastUpgrade && f.lastUpgrade !== f.opened) timeline.push({ year: f.lastUpgrade, text: `Major work completed (${money(f.capitalCost)})` });
    f.upcoming.forEach((u) => timeline.push({ year: u.year, text: `Planned: ${u.what} (${money(u.cost)})`, future: true }));
    timeline.sort((a, b) => a.year - b.year);

    const comparison = sameCat > 1 ? `
      <div class="compare" role="group" aria-label="Yearly cost compared with similar places">
        <p class="small"><strong>Compared with other ${esc(cat.label.toLowerCase())}</strong></p>
        <div class="compare-row">
          <span>This place</span>
          <span class="track"><span style="width:${(f.annualCost / maxBar) * 100}%"></span></span>
          <span class="val">${money(f.annualCost, { short: true })}</span>
        </div>
        <div class="compare-row avg">
          <span>Average of ${sameCat}</span>
          <span class="track"><span style="width:${(avg / maxBar) * 100}%"></span></span>
          <span class="val">${money(avg, { short: true })}</span>
        </div>
      </div>` : "";

    els.detail.style.setProperty("--c", catColor(f.category));
    els.detail.innerHTML = `
      <header class="detail-head">
        <span class="cat-icon" aria-hidden="true">${ICONS[f.category]}</span>
        <div>
          <p class="detail-kicker">${esc(cat.singular)} · ${esc(f.suburb)}</p>
          <h2 id="detail-title" tabindex="-1">${esc(f.name)}</h2>
          <p class="detail-address">${esc(f.address)}</p>
        </div>
      </header>

      <div class="facts">
        <div class="fact"><div class="fact-label">Opened</div><div class="fact-value">${f.opened}</div><div class="fact-label">${age(f)} years ago</div></div>
        <div class="fact"><div class="fact-label">Condition</div><div class="fact-value"><span class="pill ${conditionClass}">${esc(f.condition.rating)}</span></div><div class="fact-label">Checked ${f.condition.lastInspected}</div></div>
        <div class="fact"><div class="fact-label">Visits a year</div><div class="fact-value">${number(f.visitsPerYear)}</div></div>
      </div>

      <section class="block" aria-labelledby="h-money">
        <h3 id="h-money">${SECTION_ICONS.money} The money</h3>
        <div class="money">
          <div class="money-card">
            <div class="label">Cost to build</div>
            <div class="big">${money(f.capitalCost)}</div>
            <div class="hint">${esc(f.capitalNote)}</div>
          </div>
          <div class="money-card">
            <div class="label">Cost to run each year</div>
            <div class="big">${money(f.annualCost)}</div>
            <div class="hint">About ${cents(perVisit(f))} per visit</div>
          </div>
        </div>
        <div class="share-callout">
          <span class="big">${cents(share)}</span>
          <p>is roughly what each resident contributes to running this place each year, through rates and other council income.</p>
        </div>
        <details class="block" open>
          <summary><strong>Where the yearly money goes</strong></summary>
          <ul class="breakdown">
            ${f.breakdown.map((b) => `
              <li>
                <div class="row"><span>${esc(b.label)}</span><strong>${money(b.amount, { short: true })}</strong></div>
                <div class="track" aria-hidden="true"><span style="width:${(b.amount / breakdownMax) * 100}%"></span></div>
              </li>`).join("")}
          </ul>
        </details>
        ${comparison}
      </section>

      <section class="block" aria-labelledby="h-why">
        <h3 id="h-why">${SECTION_ICONS.why} Why it is here</h3>
        <p>${esc(f.whyHere)}</p>
      </section>

      <section class="block" aria-labelledby="h-decision">
        <h3 id="h-decision">${SECTION_ICONS.decision} How the decision was made</h3>
        <div class="decision">
          <p>${esc(f.decision.summary)}</p>
          <div class="decision-meta">
            <span><strong>When:</strong> ${f.decision.year}</span>
            <span><strong>Who decided:</strong> ${esc(f.decision.by)}</span>
            ${f.decision.consultation ? `<span><strong>Residents consulted:</strong> ${number(f.decision.consultation)}</span>` : ""}
          </div>
          <p class="small muted" style="margin-top:8px">${esc(f.decision.ref)}. In the live service this links to the meeting minutes.</p>
        </div>
      </section>

      <section class="block" aria-labelledby="h-who">
        <h3 id="h-who">${SECTION_ICONS.who} Who looks after it</h3>
        <div class="who">
          <span class="who-badge">${esc(f.maintainedBy.type)}</span>
          <div>
            <p><strong>${esc(f.maintainedBy.name)}</strong></p>
            <p class="muted small">${esc(f.maintainedBy.detail)}${f.maintainedBy.contractEnds ? ` Current contract ends in ${f.maintainedBy.contractEnds}.` : ""}</p>
          </div>
        </div>
      </section>

      <section class="block" aria-labelledby="h-history">
        <h3 id="h-history">${SECTION_ICONS.history} History and what is next</h3>
        <ol class="timeline">
          ${timeline.map((t) => `<li class="${t.future ? "future" : ""}"><span class="yr">${t.year}</span><span>${esc(t.text)}</span></li>`).join("")}
        </ol>
        ${f.upcoming.length ? "" : `<p class="small muted">No major work planned in the next three years.</p>`}
      </section>

      <section class="block" aria-labelledby="h-features">
        <h3 id="h-features">${SECTION_ICONS.features} What is there</h3>
        <div class="tags">${f.features.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
        <p class="small" style="margin-top:12px"><strong>Accessibility</strong></p>
        <div class="tags">${f.access.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      </section>

      <div class="actions">
        <a class="btn btn-primary" href="https://www.google.com/maps/dir/?api=1&destination=${f.coords.join(",")}" target="_blank" rel="noopener">Get directions</a>
        <button class="btn" type="button" data-action="report">Report a problem</button>
      </div>

      <div class="feedback">
        <div class="feedback-q">
          <span>Was this page easy to understand?</span>
          <span class="btns">
            <button class="btn" type="button" data-action="feedback">Yes</button>
            <button class="btn" type="button" data-action="feedback">No</button>
          </span>
        </div>
      </div>
    `;
  }

  // ---------- Routing ----------
  function go(id) {
    if (id && location.hash !== `#${id}`) {
      location.hash = id; // hashchange calls route()
      return;
    }
    if (!id) history.pushState(null, "", location.pathname + location.search);
    route();
  }

  function route() {
    const id = decodeURIComponent(location.hash.slice(1));
    const f = FACILITIES.find((x) => x.id === id);
    const wasSelected = state.selected;
    state.selected = f ? f.id : null;

    if (f) {
      renderDetail(f);
      els.browse.hidden = true;
      els.detailView.hidden = false;
      document.title = `${f.name} · Open Amenities`;
      setActiveMarker(f.id);
      map.setView(f.coords,Math.max(map.getZoom(), 15), { animate: !reduceMotion });
      els.sidebar.scrollTop = 0;
      if (isMobile()) els.sidebar.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      $("detail-title").focus({ preventScroll: true });
    } else {
      els.detailView.hidden = true;
      els.browse.hidden = false;
      document.title = "Open Amenities";
      setActiveMarker(null);
      if (wasSelected) {
        const btn = els.results.querySelector(`[data-id="${wasSelected}"]`);
        if (btn) btn.focus({ preventScroll: false });
      }
    }
  }

  // ---------- Toast ----------
  let toastTimer;
  function toast(msg) {
    els.toast.textContent = msg;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 3200);
  }

  // ---------- Events ----------
  els.results.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-id]");
    if (btn) go(btn.dataset.id);
  });
  els.results.addEventListener("mouseover", (e) => {
    const btn = e.target.closest("[data-id]");
    if (btn) markers[btn.dataset.id].openTooltip();
  });
  els.results.addEventListener("mouseout", (e) => {
    const btn = e.target.closest("[data-id]");
    if (btn) markers[btn.dataset.id].closeTooltip();
  });
  let searchTimer;
  els.search.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.query = els.search.value; renderBrowse(true); }, 150);
  });
  els.sort.addEventListener("change", () => { state.sort = els.sort.value; renderBrowse(false); });
  els.back.addEventListener("click", () => go(null));
  els.share.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      toast("Link copied. Paste it anywhere to share this place.");
    } catch {
      toast("Copy the address bar to share this place.");
    }
  });
  els.detail.addEventListener("click", (e) => {
    const action = e.target.closest("[data-action]")?.dataset.action;
    if (action === "report") toast("In the live service this opens the council's report form, with the place already filled in.");
    if (action === "feedback") toast("Thanks. Your feedback helps us write this more clearly.");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.selected) go(null);
  });
  window.addEventListener("hashchange", route);

  // ---------- Start ----------
  renderChips();
  renderBrowse(!location.hash);
  route();
})();
