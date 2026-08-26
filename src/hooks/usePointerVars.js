import { useEffect, useRef } from "react";

/** Writes pointer position into CSS custom properties — no re-render per frame. */
export function usePointerVars(disabled) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    let frame = 0;
    let last = null;
    const apply = () => {
      frame = 0;
      if (!last || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      ref.current.style.setProperty("--mx", `${last.x - r.left}px`);
      ref.current.style.setProperty("--my", `${last.y - r.top}px`);
    };
    const move = (e) => {
      last = { x: e.clientX, y: e.clientY };
      if (!frame) frame = requestAnimationFrame(apply);
    };
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointermove", move);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [disabled]);
  return ref;
}
