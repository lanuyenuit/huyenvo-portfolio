/* The three working habits shown in the Approach section. */

export const PRACTICE = [
  {
    tag: "01 — Intake",
    h: "Read the spec, then ask the awkward question",
    p: "Most defects are decided before any code is written. I go through the design docs and acceptance criteria first and surface the edge case nobody described — the empty state, the expired token, the 40-character name — while it's still cheap.",
  },
  {
    tag: "02 — Build",
    h: "Write it so the next person can change it",
    p: "Small components with one job, state kept close to where it's used, errors that say what happened. I write the unit tests as I go, because tests written later only ever confirm what the code already does.",
  },
  {
    tag: "03 — Ship",
    h: "Finished means released, not merged",
    p: "I stay with a feature through QA, reproduce defects with exact steps rather than screenshots, and check the release build myself. Handing off a branch and calling it done is how regressions reach customers.",
  },
];

/*
  PRACTICE_WORK — the freeCodeCamp certification projects.

  All six links below are verified live: every one of these repos has GitHub
  Pages enabled on your account. They render as a light grid BELOW the main
  project cards, deliberately smaller, so they add breadth without competing
  with real product work.

  Set SHOW_PRACTICE_WORK to false to hide the whole section.

  Worth knowing: you also have `hvac-estimate-app` (TypeScript) and `admin`
  (Vue) sitting in your GitHub. If either one works, it belongs in the MAIN
  project list above, not down here — a real app beats coursework every time.
*/
export const SHOW_PRACTICE_WORK = true;

export const PRACTICE_WORK = [
  {
    name: "Product Landing Page",
    tech: "HTML · CSS",
    note: "Flexbox layout, embedded media, responsive pricing grid",
    live: "https://lanuyenuit.github.io/product-landing-page/",
    code: "https://github.com/lanuyenuit/product-landing-page",
  },
  {
    name: "Technical Documentation",
    tech: "HTML · CSS",
    note: "Sticky sidebar navigation, breakpoint-driven layout",
    live: "https://lanuyenuit.github.io/technical-documentation-page/",
    code: "https://github.com/lanuyenuit/technical-documentation-page",
  },
  {
    name: "Tribute Page",
    tech: "HTML · CSS",
    note: "Semantic markup and responsive image handling",
    live: "https://lanuyenuit.github.io/tribute-page/",
    code: "https://github.com/lanuyenuit/tribute-page",
  },
  {
    name: "Palindrome Checker",
    tech: "JavaScript",
    note: "String normalisation, input validation, DOM updates",
    live: "https://lanuyenuit.github.io/palindrome-checker/",
    code: "https://github.com/lanuyenuit/palindrome-checker",
  },
  {
    name: "Roman Numeral Converter",
    tech: "JavaScript",
    note: "Greedy conversion algorithm with range guarding",
    live: "https://lanuyenuit.github.io/roman-numeral-converter/",
    code: "https://github.com/lanuyenuit/roman-numeral-converter",
  },
  {
    name: "Telephone Validator",
    tech: "JavaScript",
    note: "Regex pattern matching across US number formats",
    live: "https://lanuyenuit.github.io/telephone-number-validator/",
    code: "https://github.com/lanuyenuit/telephone-number-validator",
  },
];
