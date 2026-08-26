import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { TESTIMONIALS } from "../data/recruiting";

/** Hides itself while TESTIMONIALS is empty. */
export function Testimonials() {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className="wrap sec" id="words">
      <SectionHead title="What colleagues say" count={`${TESTIMONIALS.length} references`} />
      <div className="quotes">
        {TESTIMONIALS.map((t, i) => (
          <Reveal className="quote" key={t.who} delay={i * 0.09}>
            <p>{t.quote}</p>
            <span className="quote-who">{t.who}</span>
            <span className="quote-role">{t.role}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
