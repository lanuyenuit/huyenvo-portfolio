import { useState, useMemo } from "react";
import { Maximize2 } from "lucide-react";
import { Lightbox } from "./Lightbox";

export function Shots({ shots }) {
  // Drop any file that fails to load, so a missing screenshot is invisible
  // rather than a broken image icon.
  const [broken, setBroken] = useState({});
  const [open, setOpen] = useState(null);

  const live = useMemo(
    () => (shots || []).filter((s) => !broken[s.src]),
    [shots, broken]
  );

  if (!live.length) return null;

  const move = (d) => setOpen((i) => (i === null ? null : (i + d + live.length) % live.length));

  return (
    <>
      <div className="shots">
        {live.map((s, i) => (
          <button
            className="shot"
            key={s.src}
            onClick={() => setOpen(i)}
            aria-label={`Open screenshot: ${s.alt}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              onError={() => setBroken((b) => ({ ...b, [s.src]: true }))}
            />
            <span className="shot-zoom"><Maximize2 size={12} /></span>
          </button>
        ))}
      </div>
      {open !== null && (
        <Lightbox shots={live} index={open} onClose={() => setOpen(null)} onMove={move} />
      )}
    </>
  );
}
