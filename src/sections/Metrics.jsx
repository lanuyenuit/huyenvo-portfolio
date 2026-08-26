import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { METRICS } from "../data/recruiting";

/** Hides itself while METRICS is empty, so nothing invented ever ships. */
export function Metrics() {
  if (!METRICS.length) return null;
  return (
    <section className="wrap sec" id="impact">
      <SectionHead title="Impact" count={`${METRICS.length} numbers`} />
      <div className="metrics">
        {METRICS.map((m, i) => (
          <Reveal className="metric" key={m.label} delay={i * 0.08}>
            <div className="metric-n">{m.n}</div>
            <div className="metric-l">{m.label}</div>
            <div className="metric-s">{m.sub}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
