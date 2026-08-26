import { useState, useMemo } from "react";
import { Wand2, X } from "lucide-react";
import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { useCountUp } from "../hooks/useCountUp";
import { analyse, verdict } from "../lib/analyse";
import { SAMPLE_JD } from "../data/matching";

export function Matcher({ reduce }) {
  const [jd, setJd] = useState("");
  const result = useMemo(() => (jd.trim().length > 40 ? analyse(jd) : null), [jd]);
  const score = useCountUp(result ? result.score : 0, !reduce);

  return (
    <section className="wrap sec" id="match">
      <SectionHead title="Fit check" count="Runs in your browser" />

      <Reveal className="match">
        <div className="match-head">
          <p>
            Paste the job description you're hiring for. This compares it against my actual
            skill profile and shows you what lines up and what doesn't — including the gaps.
            Nothing is uploaded anywhere; the matching runs entirely on this page.
          </p>
        </div>

        <div className="match-body">
          <div className="match-pane">
            <label htmlFor="jd" className="tag" style={{ display: "block", marginBottom: 10 }}>
              Job description
            </label>
            <textarea
              id="jd"
              className="jd-box"
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              placeholder="Paste the requirements section here…"
              spellCheck="false"
            />
            <div className="jd-actions">
              <button className="btn" onClick={() => setJd(SAMPLE_JD)}>
                <Wand2 size={13} /> Try a sample
              </button>
              {jd && (
                <button className="btn" onClick={() => setJd("")}>
                  <X size={13} /> Clear
                </button>
              )}
            </div>
          </div>

          <div className="match-pane">
            {!result && (
              <div className="empty">
                Waiting for a job description.<br />
                Paste one on the left, or load the sample.
              </div>
            )}

            {result && <MatchResult result={result} score={score} />}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function MatchResult({ result, score }) {
  return (
    <div>
      <div className="score-top">
        <span className="score-n">{score}%</span>
        <span className="score-cap">{verdict(result.score)}</span>
      </div>
      <div className="score-bar">
        <div className="score-fill" style={{ width: `${result.score}%` }} />
      </div>

      <div className="res-group">
        <h4>Requirements I match — {result.matched.length}</h4>
        <div className="chips">
          {result.matched.length === 0 && (
            <span className="chip">Nothing detected — try pasting the requirements list</span>
          )}
          {result.matched.map((m) => (
            <span className="chip hit" key={m.name}>{m.name}</span>
          ))}
        </div>
      </div>

      <div className="res-group">
        <h4>Not on my résumé — {result.missing.length}</h4>
        <div className="chips">
          {result.missing.length === 0 && (
            <span className="chip">No gaps detected in this one</span>
          )}
          {result.missing.map((m) => (
            <span className="chip miss" key={m.name}>{m.name}</span>
          ))}
        </div>
      </div>

      <p className="match-note">
        {result.missing.length === 0
          ? "Everything this role asks for is something I've shipped with."
          : "I'd rather you see the gaps here than find them in a screening call. I pick up new frameworks quickly — the fundamentals underneath them transfer."}
      </p>
    </div>
  );
}
