import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { LOOKING } from "../data/recruiting";

export function Looking() {
  return (
    <section className="wrap sec" id="looking">
      <SectionHead title="What I'm looking for" count="So you can screen me out fast" />
      <dl className="fit">
        {LOOKING.map((l, i) => (
          <Reveal as="div" className="fit-row" key={l.k} delay={i * 0.05}>
            <dt>{l.k}</dt>
            <dd>{l.v}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
