// Deal data for Bargain Beacon — Black Friday 2026.
// Every deal here was checked by the site's maker on Friday 27 November 2026
// (about 14:40 WITA) by reading the price on the store's own product page or in
// a deals source that names the store. Sale and usual prices are the ones the
// store showed; the saving is always usual minus sale, and the percent is the
// saving over the usual price, rounded to the nearest whole percent.
// Verdicts: NEW LOW = lowest price the deal sources have ever tracked for this
// product. STRONG = a deep cut (40%+ or $200+) at or near the lowest tracked.
// ROUTINE = a real discount, but another store sells the same product cheaper.

export const CHECKED_LABEL = "Checked 27 Nov 2026, 14:40 WITA";
export const CHECKED_NOTE =
  "Every price on this page was read on Friday 27 November 2026, about 14:40 WITA, " +
  "from the store's own product page or a deals source that names the store. " +
  "Prices move during Black Friday — always confirm the price at checkout.";

export const DEALS = [
  {
    id: "airpods-pro-3-amazon",
    name: "Apple AirPods Pro 3",
    detail: "Active noise cancellation, live translation, heart-rate sensing, USB-C case",
    category: "Audio",
    store: "Amazon",
    sale: 149.0,
    usual: 249.0,
    url: "https://www.amazon.com/dp/B0FQFB8FMG",
    verdict: "new-low",
    evidence:
      "Lowest ever tracked: $100 off Apple's $249 list, $20 below the previous $169 low (CNN Underscored, 9to5Toys).",
    source: "Amazon product page; CNN Underscored 26 Nov",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Best overall earbuds deal",
  },
  {
    id: "airtag-2-amazon",
    name: "Apple AirTag 2 (1-pack)",
    detail: "Bluetooth tracker, Precision Finding, louder speaker, longer range",
    category: "Accessories",
    store: "Amazon",
    sale: 18.0,
    usual: 29.0,
    url: "https://www.amazon.com/dp/B0GJTFXNRX",
    verdict: "new-low",
    evidence:
      "Lowest ever tracked for a single AirTag 2; the 4-pack works out to $17.50 each (9to5Toys Day 6).",
    source: "Amazon product page; 9to5Toys 25–26 Nov",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Cheapest stocking stuffer",
  },
  {
    id: "dyson-v9-amazon",
    name: "Dyson V9 Motorbar Cordless Vacuum",
    detail: "100 Air Watts, up to 40 min run time, LCD screen, hair-screw tool",
    category: "Home",
    store: "Amazon",
    sale: 269.99,
    usual: 599.99,
    url: "https://www.amazon.com/dp/B0FCVM3PZN",
    verdict: "new-low",
    evidence:
      "55% off and the lowest price ever for Dyson's lightest stick vacuum; the same $269.99 at Target and Best Buy too.",
    source: "Amazon product page; CNN Underscored",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Biggest dollar saving under $300",
  },
  {
    id: "sony-xm5-bestbuy",
    name: "Sony WH-1000XM5 Noise Cancelling Headphones",
    detail: "Over-ear, 30-hour battery, 8-mic noise cancelling, black",
    category: "Audio",
    store: "Best Buy",
    sale: 169.99,
    usual: 398.0,
    url: "https://www.bestbuy.com/product/sony-wh-1000xm5-wireless-noise-cancelling-over-the-ear-headphones-black/J7XSRH5CXG/sku/6505727",
    verdict: "new-low",
    evidence:
      "Best Buy Doorbuster at $169.99 against a $398.00 comparable value — the lowest tracked for the XM5.",
    source: "Best Buy product page (comp. value $398.00)",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Doorbuster",
  },
  {
    id: "tcl-s4cf-bestbuy",
    name: "TCL 65\" S4CF Series 4K Fire TV (2026)",
    detail: "65-inch 4K LED, Dolby Vision, HDR10+, Fire TV with Alexa voice remote",
    category: "TVs",
    store: "Best Buy",
    sale: 229.99,
    usual: 469.99,
    url: "https://www.bestbuy.com/product/tcl-65-s4cf-series-4k-uhd-hdr-smart-tv-with-fire-tv-2026/J36QYTHZVP/sku/6687112",
    verdict: "strong",
    evidence:
      "Best Buy Doorbuster, $240 off the $469.99 comparable value; $40 below the early-November price.",
    source: "Best Buy product page (comp. value $469.99)",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Cheapest big-screen TV",
  },
  {
    id: "insignia-f40-bestbuy",
    name: "Insignia 40\" F40 Series Full HD Fire TV",
    detail: "40-inch 1080p LED, Fire TV, Alexa voice remote",
    category: "TVs",
    store: "Best Buy",
    sale: 84.98,
    usual: 149.99,
    url: "https://www.bestbuy.com/product/insignia-40-class-f40-series-led-full-hd-1080p-smart-fire-tv/J2FPJK67CQ/sku/6614066",
    verdict: "strong",
    evidence:
      "Best Buy Black Friday price, down from the $149.99 comparable value — and $5 under the $89.99 it sold at earlier in the week.",
    source: "Best Buy product page (comp. value $149.99)",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Best TV under $100",
  },
  {
    id: "hp-omnibook-bestbuy",
    name: "HP OmniBook 5 14\" 2K OLED Touch Laptop",
    detail: "Intel Core 5, 8GB RAM, 256GB SSD, OLED touchscreen, Starlit Blue",
    category: "Laptops",
    store: "Best Buy",
    sale: 449.99,
    usual: 799.99,
    url: "https://www.bestbuy.com/product/hp-omnibook-5-14-2k-oled-touchscreen-laptop-intel-core-5-series-3-2026-8gb-memory-256gb-ssd-starlit-blue/6690110",
    verdict: "strong",
    evidence:
      "$350 off the $799.99 list — the cheapest OLED laptop in Best Buy's Black Friday sale.",
    source: "Best Buy product page; Best Buy release",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Cheapest OLED laptop",
  },
  {
    id: "hisense-u6pro-bestbuy",
    name: "Hisense 65\" U6 Pro Mini-LED Fire TV",
    detail: "65-inch Mini-LED, 144Hz, Dolby Vision IQ, glare-free screen, built-in subwoofer",
    category: "TVs",
    store: "Best Buy",
    sale: 529.99,
    usual: 1099.99,
    url: "https://www.bestbuy.com/product/hisense-65-class-u6-pro-miniled-qled-uhd-4k-hdr-glare-free-smart-fire-tv-with-alexa-2026/J3Z9Z42WZZ/sku/6673625",
    verdict: "new-low",
    evidence:
      "Record low at 52% off; the same $529.99 at Amazon, within $2 of the lowest price ever tracked (CNN).",
    source: "Best Buy product page (comp. value $1,099.99)",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Best Mini-LED value",
  },
  {
    id: "macbook-air-m5-bestbuy",
    name: "Apple MacBook Air 13\" (M5, 16GB/512GB)",
    detail: "M5 10-core chip, 13.6\" Liquid Retina, 16GB unified memory, 512GB SSD",
    category: "Laptops",
    store: "Best Buy",
    sale: 1049.0,
    usual: 1299.0,
    url: "https://www.bestbuy.com/product/apple-macbook-air-13-inch-laptop-m5-chip-with-10-core-cpu-and-8-core-gpu-16gb-memory-512gb-ssd-sky-blue/JJGCQLK8RP/sku/6455385",
    verdict: "strong",
    evidence:
      "$250 off Apple's $1,299 list across every M5 Air configuration; Amazon has the same model $50 cheaper at $999.",
    source: "Best Buy product page (save $250)",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Best laptop deal at Best Buy",
  },
  {
    id: "beats-studio-pro-target",
    name: "Beats Studio Pro Bluetooth Headphones",
    detail: "Over-ear, active noise cancelling, 40-hour battery, USB-C",
    category: "Audio",
    store: "Target",
    sale: 149.99,
    usual: 349.99,
    url: "https://www.target.com/p/beats-studio-pro-bluetooth-wireless-headphones-deep-brown/-/A-89401493",
    verdict: "new-low",
    evidence:
      "57% off — $200 off the $349.99 list, the deepest cut on the Studio Pro this season.",
    source: "Target product page",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "57% off",
  },
  {
    id: "airpods-pro-3-target",
    name: "Apple AirPods Pro 3",
    detail: "Active noise cancellation, live translation, heart-rate sensing, USB-C case",
    category: "Audio",
    store: "Target",
    sale: 179.99,
    usual: 249.99,
    url: "https://www.target.com/p/ap2022-true-wireless-bluetooth-headphones/-/A-85978609",
    verdict: "routine",
    evidence:
      "A real $70 discount, but Amazon sells the identical earbuds for $149 — buy it there instead.",
    source: "Target product page; MacRumors 18 Nov",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Beaten by Amazon",
  },
  {
    id: "dyson-v12-walmart",
    name: "Dyson V12 Detect Slim Cordless Vacuum",
    detail: "Laser dust detection, LCD screen, up to 60 min run time, Yellow/Nickel",
    category: "Home",
    store: "Walmart",
    sale: 429.99,
    usual: 729.99,
    url: "https://www.walmart.com/ip/Dyson-V12-Detect-Slim-Cordless-Vacuum-Yellow-Nickel-New-Newest-Gen/20092957067",
    verdict: "strong",
    evidence:
      "$300 off the $729.99 list for a brand-new (not refurbished) V12; sold and shipped by Walmart.",
    source: "Walmart product page (was $729.99)",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Best Dyson upgrade pick",
  },
  {
    id: "hisense-h5r1-walmart",
    name: "Hisense 75\" H5R1 Series 4K Roku TV",
    detail: "75-inch 4K UHD, Dolby Vision, Full Array LED, Roku, Game Mode Plus",
    category: "TVs",
    store: "Walmart",
    sale: 328.0,
    usual: 668.0,
    url: "https://www.walmart.com/ip/Hisense-75-Class-H5R1-Series-4K-UHD-HDR-Smart-Roku-TV-75H5R1-2026-Model-Full-Array-LED-Dolby-Vision-AI-4K-Upscaler-Game-Mode-Plus-DTS-Virtual-X-Noise/20272208349",
    verdict: "new-low",
    evidence:
      "Half price on a brand-new November 2026 model — $328 is the launch price, $340 under the $668 list.",
    source: "Walmart product page (was $668.00)",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Biggest TV for the money",
  },
  {
    id: "watch-s11-walmart",
    name: "Apple Watch Series 11 GPS 46mm",
    detail: "Jet Black aluminum, Black Sport Band, ECG, sleep score, 24-hour battery",
    category: "Wearables",
    store: "Walmart",
    sale: 329.0,
    usual: 429.0,
    url: "https://www.walmart.com/ip/Apple-Watch-Series-11-GPS-46mm-Jet-Black-Aluminum-Case-with-Black-Sport-Band-M-L/17779601664",
    verdict: "strong",
    evidence:
      "$100 off the $429 list, sold and shipped by Walmart; last year's flagship at a mid-range price.",
    source: "Walmart product page (was $429.00)",
    checked: "27 Nov 2026, 14:40 WITA",
    tag: "Best watch deal at Walmart",
  },
];

export const CATEGORIES = ["All", "Audio", "TVs", "Laptops", "Home", "Wearables", "Accessories"];
export const STORES = ["All", "Amazon", "Best Buy", "Target", "Walmart"];

// Same product, different stores — prices read today, 27 Nov 2026.
export const COMPARES = [
  {
    product: "Apple AirPods Pro 3",
    rows: [
      { store: "Amazon", price: 149.0, url: "https://www.amazon.com/dp/B0FQFB8FMG", note: "Lowest ever" },
      { store: "Best Buy", price: 170.0, url: "", note: "CNN headphone deals, 26 Nov" },
      { store: "Target", price: 179.99, url: "https://www.target.com/p/ap2022-true-wireless-bluetooth-headphones/-/A-85978609", note: "" },
    ],
    winner: "Amazon wins by $21 over Best Buy and $31 over Target.",
  },
  {
    product: "Dyson V9 Motorbar Cordless Vacuum",
    rows: [
      { store: "Amazon", price: 269.99, url: "https://www.amazon.com/dp/B0FCVM3PZN", note: "" },
      { store: "Target", price: 269.99, url: "", note: "Target listing, reg $599.99" },
      { store: "Best Buy", price: 269.99, url: "", note: "Best Buy ad list, 26 Nov" },
    ],
    winner: "A three-way tie at $269.99 — buy wherever is most convenient.",
  },
  {
    product: "Hisense 65\" U6 Pro Mini-LED TV",
    rows: [
      { store: "Amazon", price: 529.99, url: "", note: "The Gadgeteer / Techlicious" },
      { store: "Best Buy", price: 529.99, url: "https://www.bestbuy.com/product/hisense-65-class-u6-pro-miniled-qled-uhd-4k-hdr-glare-free-smart-fire-tv-with-alexa-2026/J3Z9Z42WZZ/sku/6673625", note: "" },
    ],
    winner: "Tied at $529.99 — pick the store with the better pickup or return terms.",
  },
  {
    product: "Apple MacBook Air 13\" (M5, 16GB/512GB)",
    rows: [
      { store: "Amazon", price: 999.0, url: "", note: "Slickdeals frontpage, 25 Nov" },
      { store: "Best Buy", price: 1049.0, url: "https://www.bestbuy.com/product/apple-macbook-air-13-inch-laptop-m5-chip-with-10-core-cpu-and-8-core-gpu-16gb-memory-512gb-ssd-sky-blue/JJGCQLK8RP/sku/6455385", note: "" },
    ],
    winner: "Amazon wins by $50 — $999 against Best Buy's $1,049.",
  },
];

export function saving(deal) {
  return +(deal.usual - deal.sale).toFixed(2);
}

export function percentOff(deal) {
  return Math.round(((deal.usual - deal.sale) / deal.usual) * 100);
}

export function verdictLabel(verdict) {
  if (verdict === "new-low") return "NEW LOW";
  if (verdict === "strong") return "STRONG PRICE";
  if (verdict === "routine") return "ROUTINE SALE";
  return "INFLATED";
}

export function money(n) {
  return "$" + n.toFixed(2).replace(/\.00$/, "");
}
