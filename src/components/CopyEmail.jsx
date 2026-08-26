import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { PROFILE } from "../data/profile";

export function CopyEmail() {
  const [done, setDone] = useState(false);
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = PROFILE.email;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* clipboard unavailable */ }
      document.body.removeChild(ta);
    }
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  }, []);
  return (
    <button className="btn" onClick={copy} aria-live="polite">
      {done ? <Check size={13} /> : <Copy size={13} />}
      {done ? "Copied to clipboard" : "Copy email"}
    </button>
  );
}
