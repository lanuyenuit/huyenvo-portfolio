import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { SECTIONS } from "../data/profile";

export function Nav() {
  const [active, setActive] = useState("");
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const linkRefs = useRef({});

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis.length) setActive(vis[0].target.id);
      },
      { rootMargin: "-58px 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Slide the indicator under whichever link is active.
  useLayoutEffect(() => {
    const el = linkRefs.current[active];
    if (!el) { setPill((p) => ({ ...p, opacity: 0 })); return; }
    setPill({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
  }, [active]);

  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <a className="mark" href="#top">HUYEN<i>.</i>VO</a>
        <div className="nav-links">
          <div className="nav-track">
            <span
              className="nav-pill"
              style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
              aria-hidden="true"
            />
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="nav-link"
                data-on={active === s.id ? "1" : "0"}
                ref={(el) => { linkRefs.current[s.id] = el; }}
              >
                {s.label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#contact">
            Get in touch <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}
