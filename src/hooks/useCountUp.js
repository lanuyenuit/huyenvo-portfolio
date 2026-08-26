import { useState, useEffect } from "react";

/** Eases a number up to `target`; jumps straight there when `run` is false. */
export function useCountUp(target, run) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) { setN(target); return; }
    let frame = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 700);
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run]);
  return n;
}
