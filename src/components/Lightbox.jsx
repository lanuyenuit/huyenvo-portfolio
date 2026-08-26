import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/** Full-screen screenshot viewer. Escape closes, arrows move, body scroll locks. */
export function Lightbox({ shots, index, onClose, onMove }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onMove]);

  const shot = shots[index];
  if (!shot) return null;

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={shot.alt} onClick={onClose}>
      <img className="lb-img" src={shot.src} alt={shot.alt} onClick={(e) => e.stopPropagation()} />
      <button className="lb-x" onClick={onClose} aria-label="Close">
        <X size={18} />
      </button>
      {shots.length > 1 && (
        <>
          <button
            className="lb-nav lb-prev"
            onClick={(e) => { e.stopPropagation(); onMove(-1); }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="lb-nav lb-next"
            onClick={(e) => { e.stopPropagation(); onMove(1); }}
            aria-label="Next screenshot"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
      <div className="lb-cap">{shot.alt} — {index + 1} of {shots.length}</div>
    </div>
  );
}
