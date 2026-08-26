import { useReveal } from "../hooks/useReveal";

/** Section title with the rule that draws itself in on first sight. */
export function SectionHead({ title, count }) {
  const [ref, seen] = useReveal(0.35);
  return (
    <div className="sec-head" ref={ref} data-seen={seen}>
      <h2>{title}</h2>
      <span className="sec-count">{count}</span>
      <span className="sec-rule" />
    </div>
  );
}
