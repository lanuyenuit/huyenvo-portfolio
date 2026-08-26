import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { PRACTICE } from "../data/practice";

export function Approach() {
  return (
    <section className="wrap sec" id="practice">
      <SectionHead title="How I work" count="Three habits" />
      <div className="practice">
        {PRACTICE.map((x, i) => (
          <Reveal className="pitem" key={x.tag} delay={i * 0.1}>
            <span className="tag">{x.tag}</span>
            <h3>{x.h}</h3>
            <p>{x.p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
