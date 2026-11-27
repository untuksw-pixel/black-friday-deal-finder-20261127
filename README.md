# Bargain Beacon — Black Friday Deal Finder 2026

[![black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/c/black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/untuksw-pixel/black-friday-deal-finder-20261127/rank.svg)](https://make.fun/c/black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/untuksw-pixel/black-friday-deal-finder-20261127/reward.svg)](https://make.fun/c/black-friday-deal-finder-01)


A static deal-finder site for Black Friday 2026. Fourteen real deals, each checked by hand on Friday 27 November 2026 at Amazon, Best Buy, Target and Walmart — every card shows the product, the store, a link to the product at that store, the sale price, the usual price, the dollar and percent saving, when the price was checked, where it was read, and an honest verdict (NEW LOW / STRONG PRICE / ROUTINE SALE) with the evidence behind it.

## What it does

- Search across all deals, filter by category, store, minimum discount and verdict, and sort by biggest % off, biggest $ saving, price, or best verdict. Filters are reflected in the URL, so a filtered view is shareable.
- A "Same product, different stores" section compares the same product's price across stores — AirPods Pro 3, Dyson V9, Hisense U6 Pro and MacBook Air M5 — and names the winner.
- A method section says exactly how and when every price was checked, and what each verdict means.
- Works on desktop and phone, with no build step and no network request at run time. All files are local under `app/`.

## Run it

```sh
node serve.ts            # serves app/ at http://localhost:8080
```

## Hand in

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `app/` and `screenshots/` to the output directory and writes `dossier.json` with `buildDossier` from the vendored `vendor/makefun-frontend.ts`.

## Entry

Built for the [Black Friday deal finder bounty](https://make.fun/c/black-friday-deal-finder-01?ref=s88hqzas) on make.fun.

---

Built for the [Black Friday deal finder bounty](https://make.fun/c/black-friday-deal-finder-01?ref=s88hqzas).
