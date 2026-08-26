import { ArrowUpRight, FileText, MapPin } from "lucide-react";
import { CopyEmail } from "../components/CopyEmail";
import { usePointerVars } from "../hooks/usePointerVars";
import { PROFILE, SPECS } from "../data/profile";

export function Hero({ reduce }) {
  const heroRef = usePointerVars(reduce);

  return (
    <header className="wrap hero" id="top" ref={heroRef}>
      <div className="grid-bg" aria-hidden="true" />

      <div className="eyebrow enter" style={{ "--d": "0s" }}>
        <span className="tag"><span className="dot" />Available for work</span>
        <span className="tag" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <MapPin size={11} /> {PROFILE.location}
        </span>
        <span className="tag">Est. 2019</span>
      </div>

      <h1>
        <span className="line">
          <span className="line-in" style={{ "--d": "0.12s" }}>{PROFILE.name}</span>
        </span>
        <span className="line">
          <span className="line-in accent" style={{ "--d": "0.26s" }}>{PROFILE.tagline}</span>
        </span>
      </h1>

      <p className="lede enter" style={{ "--d": "0.5s" }}>
        Software engineer, six years in. I work on the parts of a product people actually
        touch — forms that don't lose your data, dashboards that stay fast at scale, and
        APIs that fail loudly instead of quietly.
      </p>

      <div className="hero-cta enter" style={{ "--d": "0.62s" }}>
        <a className="btn btn-brass" href="#work">See the work <ArrowUpRight size={13} /></a>
        <a className="btn" href={PROFILE.resume}><FileText size={13} /> Résumé</a>
        <CopyEmail />
      </div>

      <dl className="spec">
        {SPECS.map((s, i) => (
          <div className="cell enter" key={s.k} style={{ "--d": `${0.74 + i * 0.06}s` }}>
            <dt>{s.k}</dt>
            <dd>{s.v}<span>{s.sub}</span></dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
