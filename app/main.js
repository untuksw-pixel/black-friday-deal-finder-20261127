// Page wiring: renders the deal cards, the stats bar and the compare tables,
// and keeps every control (search, category, store, discount, verdict, sort)
// in sync with the visible list and the URL.

import { DEALS, COMPARES, CATEGORIES, STORES, CHECKED_NOTE, money, percentOff, saving, verdictLabel } from "./deals.js";
import { SORTS, applyFilters, stateFromUrl, stateToUrl } from "./filters.js";
import { renderCompares } from "./compare.js";

const state = stateFromUrl();
const grid = document.getElementById("deal-grid");
const count = document.getElementById("result-count");
const empty = document.getElementById("no-results");

function verdictClass(v) {
  return "verdict-" + v;
}

function dealCard(d) {
  const pct = percentOff(d);
  const save = saving(d);
  return `<article class="deal-card" data-id="${d.id}">
    <div class="card-top">
      <span class="store-chip store-${d.store.toLowerCase().replace(/ /g, "-")}">${d.store}</span>
      <span class="verdict ${verdictClass(d.verdict)}">${verdictLabel(d.verdict)}</span>
    </div>
    <h3 class="deal-name">${d.name}</h3>
    <p class="deal-detail">${d.detail}</p>
    <p class="deal-tag">${d.tag}</p>
    <div class="price-row">
      <span class="sale-price">${money(d.sale)}</span>
      <span class="usual-price"><s>${money(d.usual)}</s></span>
      <span class="pct-badge">−${pct}%</span>
    </div>
    <p class="saving-line">You save ${money(save)} (${pct}% off ${money(d.usual)})</p>
    <p class="evidence">${d.evidence}</p>
    <p class="checked-line">Checked ${d.checked} · ${d.source}</p>
    <a class="buy-button" href="${d.url}" target="_blank" rel="noopener">View at ${d.store} &rarr;</a>
  </article>`;
}

function renderStats() {
  const total = DEALS.reduce((s, d) => s + saving(d), 0);
  const best = Math.max(...DEALS.map((d) => percentOff(d)));
  const lows = DEALS.filter((d) => d.verdict === "new-low").length;
  document.getElementById("stat-deals").textContent = String(DEALS.length);
  document.getElementById("stat-stores").textContent = String(STORES.length - 1);
  document.getElementById("stat-saving").textContent = money(total);
  document.getElementById("stat-best").textContent = "−" + best + "%";
  document.getElementById("stat-lows").textContent = String(lows);
}

function render() {
  const list = applyFilters(DEALS, state);
  grid.innerHTML = list.map(dealCard).join("");
  count.textContent = list.length + (list.length === 1 ? " deal" : " deals") + " shown of " + DEALS.length;
  empty.hidden = list.length !== 0;
  stateToUrl(state);
}

function chipGroup(el, values, current, onPick) {
  el.innerHTML = values
    .map((v) => `<button type="button" class="chip${v === current ? " active" : ""}" data-value="${v}">${v}</button>`)
    .join("");
  el.querySelectorAll("button").forEach((b) =>
    b.addEventListener("click", () => {
      onPick(b.dataset.value);
      render();
      syncControls();
    }),
  );
}

function syncControls() {
  document.getElementById("search").value = state.query;
  document.getElementById("sort").value = state.sort;
  document.getElementById("min-discount").value = String(state.minDiscount);
  document.getElementById("verdict-filter").value = state.verdict;
}

function init() {
  document.getElementById("checked-note").textContent = CHECKED_NOTE;
  renderStats();
  document.getElementById("compare-list").innerHTML = renderCompares(COMPARES);

  chipGroup(document.getElementById("category-chips"), CATEGORIES, state.category, (v) => (state.category = v));
  chipGroup(document.getElementById("store-chips"), STORES, state.store, (v) => (state.store = v));

  const search = document.getElementById("search");
  search.value = state.query;
  search.addEventListener("input", () => {
    state.query = search.value;
    render();
  });

  const sort = document.getElementById("sort");
  sort.innerHTML = Object.entries(SORTS)
    .map(([k, v]) => `<option value="${k}">${v}</option>`)
    .join("");
  sort.value = state.sort;
  sort.addEventListener("change", () => {
    state.sort = sort.value;
    render();
  });

  const min = document.getElementById("min-discount");
  min.addEventListener("change", () => {
    state.minDiscount = parseInt(min.value, 10) || 0;
    render();
  });
  min.value = String(state.minDiscount);

  const verdict = document.getElementById("verdict-filter");
  verdict.addEventListener("change", () => {
    state.verdict = verdict.value;
    render();
  });
  verdict.value = state.verdict;

  document.getElementById("clear-filters").addEventListener("click", () => {
    state.query = "";
    state.category = "All";
    state.store = "All";
    state.minDiscount = 0;
    state.verdict = "All";
    state.sort = "biggest-percent";
    chipGroup(document.getElementById("category-chips"), CATEGORIES, state.category, (v) => (state.category = v));
    chipGroup(document.getElementById("store-chips"), STORES, state.store, (v) => (state.store = v));
    syncControls();
    render();
  });

  render();

  // Deep-link to a section (?view=compare) so a shared link can open the
  // page scrolled straight to the comparison tables.
  const view = new URLSearchParams(location.search).get("view");
  if (view === "compare") {
    document.getElementById("compare").scrollIntoView();
  }
}

init();
