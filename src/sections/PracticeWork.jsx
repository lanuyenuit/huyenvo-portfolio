import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { SHOW_PRACTICE_WORK, PRACTICE_WORK } from "../data/practice";

export function PracticeWork() {
  if (!SHOW_PRACTICE_WORK || !PRACTICE_WORK.length) return null;
  return (
    <section className="wrap sec" id="practice-work">
      <SectionHead title="Practice projects" count={`${PRACTICE_WORK.length} builds`} />
      <p className="pw-intro">
        freeCodeCamp certification projects, built to a fixed brief while formalising my
        frontend fundamentals. Coursework rather than product work — every one is live if
        you want to click through.
      </p>
      <div className="pw">
        {PRACTICE_WORK.map((w, i) => (
          <Reveal className="pw-item" key={w.name} delay={i * 0.05}>
            <div className="pw-name">{w.name}</div>
            <div className="pw-tech">{w.tech}</div>
            <div className="pw-note">{w.note}</div>
            <div className="pw-links">
              <a href={w.live} target="_blank" rel="noreferrer">
                Live <ArrowUpRight size={11} />
              </a>
              <a href={w.code} target="_blank" rel="noreferrer">
                Code <ArrowUpRight size={11} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
