import { TICKER } from "../data/profile";

export function Ticker() {
  const items = [...TICKER, ...TICKER]; // duplicated so the loop seams invisibly
  return (
    <div className="band" aria-hidden="true">
      <div className="band-track">
        {items.map((t, i) => (
          <span className="band-item" key={`${t}-${i}`}>{t}</span>
        ))}
      </div>
    </div>
  );
}
