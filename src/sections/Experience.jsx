import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { JOBS } from "../data/resume";

export function Experience() {
  return (
    <section className="wrap sec" id="experience">
      <SectionHead title="Experience" count="2019 — present" />
      {JOBS.map((j, i) => (
        <Reveal className="job" key={j.org} delay={i * 0.08}>
          <div>
            <span className="job-when">{j.when}</span>
            <span className="job-org">{j.org}</span>
            <span className="job-where">{j.where}</span>
          </div>
          <div>
            <h3 className="job-role">{j.role}</h3>
            <ul>{j.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
