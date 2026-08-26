import { useState, useEffect, useRef } from "react";

/**
 * Measures content so a collapsible can animate to a real pixel height.
 * Re-measures when `deps` change and on resize. Returns [ref, height].
 */
export function useMeasuredHeight(dep) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const measure = () => setHeight(ref.current ? ref.current.scrollHeight : 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [dep]);
  return [ref, height];
}
