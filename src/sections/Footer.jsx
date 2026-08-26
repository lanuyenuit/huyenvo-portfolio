import { PROFILE } from "../data/profile";

export function Footer() {
  return (
    <div className="wrap">
      <div className="foot">
        <span>© 2026 {PROFILE.name} — {PROFILE.location}</span>
      </div>
    </div>
  );
}
