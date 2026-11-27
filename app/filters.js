// Filtering and sorting for the deal list. Pure functions over the deal array,
// so the controls, the URL presets and the result count all share one path.

import { percentOff, saving } from "./deals.js";

export const SORTS = {
  "biggest-percent": "Biggest % off",
  "biggest-saving": "Biggest $ saving",
  "lowest-price": "Lowest price first",
  "highest-price": "Highest price first",
  "best-verdict": "Best verdict first",
};

const VERDICT_RANK = { "new-low": 0, strong: 1, routine: 2, inflated: 3 };

export function applyFilters(deals, state) {
  const q = state.query.trim().toLowerCase();
  let out = deals.filter((d) => {
    if (state.category !== "All" && d.category !== state.category) return false;
    if (state.store !== "All" && d.store !== state.store) return false;
    if (state.minDiscount > 0 && percentOff(d) < state.minDiscount) return false;
    if (state.verdict !== "All" && d.verdict !== state.verdict) return false;
    if (q) {
      const hay = (d.name + " " + d.detail + " " + d.store + " " + d.category + " " + d.tag).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  out = out.slice();
  if (state.sort === "biggest-percent") out.sort((a, b) => percentOff(b) - percentOff(a));
  else if (state.sort === "biggest-saving") out.sort((a, b) => saving(b) - saving(a));
  else if (state.sort === "lowest-price") out.sort((a, b) => a.sale - b.sale);
  else if (state.sort === "highest-price") out.sort((a, b) => b.sale - a.sale);
  else if (state.sort === "best-verdict")
    out.sort((a, b) => VERDICT_RANK[a.verdict] - VERDICT_RANK[b.verdict] || percentOff(b) - percentOff(a));
  return out;
}

// Read the initial filter state from the page URL (?q=&cat=&store=&min=&sort=),
// so a filtered view is a shareable link and screenshots can show a filter applied.
export function stateFromUrl() {
  const p = new URLSearchParams(location.search);
  return {
    query: p.get("q") || "",
    category: p.get("cat") || "All",
    store: p.get("store") || "All",
    minDiscount: parseInt(p.get("min") || "0", 10) || 0,
    verdict: p.get("verdict") || "All",
    sort: p.get("sort") || "biggest-percent",
  };
}

export function stateToUrl(state) {
  const p = new URLSearchParams();
  if (state.query) p.set("q", state.query);
  if (state.category !== "All") p.set("cat", state.category);
  if (state.store !== "All") p.set("store", state.store);
  if (state.minDiscount > 0) p.set("min", String(state.minDiscount));
  if (state.verdict !== "All") p.set("verdict", state.verdict);
  if (state.sort !== "biggest-percent") p.set("sort", state.sort);
  const s = p.toString();
  history.replaceState(null, "", s ? "?" + s : location.pathname);
}
