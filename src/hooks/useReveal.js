import { useState, useEffect, useRef } from "react";

/**
 * Flips to seen the first time the element enters the viewport, then stops
 * observing. Returns [ref, "0" | "1"] for a `data-seen` attribute.
 */
export function useReveal(threshold) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") { setSeen(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: threshold || 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return [ref, seen ? "1" : "0"];
}
