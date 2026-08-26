import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { SKILLS } from "../data/resume";

export function Skills() {
  return (
    <section className="wrap sec" id="skills">
      <SectionHead title="Toolkit" count="Daily drivers in white" />
      <div className="skills">
        {SKILLS.map((s, i) => (
          <Reveal className="sk" key={s.g} delay={i * 0.07}>
            <h3>{s.g}</h3>
            <div className="chips">
              {s.items.map(([name, key]) => (
                <span className="chip" data-key={key ? "1" : "0"} key={name}>{name}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
