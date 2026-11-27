// Renders the "same product, different stores" comparison tables.

import { money } from "./deals.js";

export function renderCompares(compares) {
  return compares
    .map((c) => {
      const rows = c.rows
        .map((r) => {
          const link = r.url
            ? `<a class="store-link" href="${r.url}" target="_blank" rel="noopener">View at ${r.store} &rarr;</a>`
            : `<span class="store-link muted">${r.store} listing</span>`;
          const best = r.price === Math.min(...c.rows.map((x) => x.price));
          return `<tr class="${best ? "best-row" : ""}">
            <td>${r.store}${best ? ' <span class="best-tag">BEST</span>' : ""}</td>
            <td class="price-cell">${money(r.price)}</td>
            <td>${r.note || "&mdash;"}</td>
            <td>${link}</td>
          </tr>`;
        })
        .join("");
      return `<section class="compare-block">
        <h3>${c.product}</h3>
        <table class="compare-table">
          <thead><tr><th>Store</th><th>Price</th><th>Note</th><th>Link</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <p class="compare-verdict">${c.winner}</p>
      </section>`;
    })
    .join("");
}
