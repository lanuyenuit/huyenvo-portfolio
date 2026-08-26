import { SKILL_PROFILE, GAP_VOCAB } from "../data/matching";

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Word-ish boundary match that tolerates dots, slashes and pluses in tech names. */
export function mentions(text, alias) {
  const re = new RegExp(`(^|[^a-z0-9+#])${escapeRe(alias)}([^a-z0-9+#]|$)`, "i");
  return re.test(text);
}

/** Scores a pasted job description against the profile. Pure — runs in the browser. */
export function analyse(jd) {
  const text = ` ${jd.toLowerCase()} `;

  const matched = SKILL_PROFILE.filter((s) => s.aliases.some((a) => mentions(text, a)));
  const missing = GAP_VOCAB.filter((g) => g.aliases.some((a) => mentions(text, a)));

  const matchedWeight = matched.reduce((n, s) => n + s.weight, 0);
  const missingWeight = missing.length * 2; // gaps count as mid-weight requirements
  const total = matchedWeight + missingWeight;
  const score = total === 0 ? 0 : Math.round((matchedWeight / total) * 100);

  return { matched, missing, score, found: matched.length + missing.length };
}

export function verdict(s) {
  if (s >= 75) return "Strong overlap";
  if (s >= 50) return "Solid overlap";
  if (s >= 25) return "Partial overlap";
  return "Limited overlap";
}
