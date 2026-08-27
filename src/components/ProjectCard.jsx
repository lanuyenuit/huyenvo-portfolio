import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { Shots } from "./Shots";
import { usePointerVars } from "../hooks/usePointerVars";
import { useMeasuredHeight } from "../hooks/useMeasuredHeight";

export function ProjectCard({ p, index, reduce }) {
  const [open, setOpen] = useState(false);
  const [innerRef, height] = useMeasuredHeight(open);
  const cardRef = usePointerVars(reduce);
  const hasDetail = p.detail.length > 0;

  return (
    <Reveal as="article" className="card" delay={index * 0.07}>
      <div ref={cardRef} className="card-in">
        <div className="card-top">
          <div>
            <h3>{p.title}</h3>
            <div className="card-tags">{p.tags.join(" · ")}</div>
          </div>
          {/* Proposed cards carry "Proposed" in both fields — don't print it twice. */}
          <span className="state" data-s={p.state}>
            {p.year && p.year !== p.stateLabel ? `${p.stateLabel} · ${p.year}` : p.stateLabel}
          </span>
        </div>

        <Shots shots={p.shots} />

        <p className="blurb">{p.blurb}</p>
        <p className="hook"><b>{p.hook.label}:</b> {p.hook.text}</p>

        <dl className="rows">
          {p.specs.map(([k, v]) => (
            <div className="row" key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        {hasDetail && (
          <div
            className="expander"
            data-open={open ? "1" : "0"}
            style={{ height: open ? height : 0 }}
          >
            <div ref={innerRef} className="expander-in" id={`detail-${p.id}`}>
              {p.detail.map((d, i) => (
                <div className="det" key={d.h} style={{ "--d": `${0.08 + i * 0.09}s` }}>
                  <h4>{d.h}</h4>
                  <p>{d.p}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="card-foot">
          {hasDetail && (
            <button
              className="btn"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={`detail-${p.id}`}
            >
              {open ? <Minus size={13} /> : <Plus size={13} />}
              {open ? "Hide the details" : "Read the decisions"}
            </button>
          )}
          {p.links.map((l) => (
            <a
              className={l.primary ? "btn btn-brass" : "btn"}
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
            >
              {l.label} <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
