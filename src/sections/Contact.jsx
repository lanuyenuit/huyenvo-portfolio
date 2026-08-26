import { Mail, Phone, FileText } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { CopyEmail } from "../components/CopyEmail";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { PROFILE } from "../data/profile";

export function Contact() {
  return (
    <section className="wrap contact" id="contact">
      <Reveal>
        <span className="tag"><span className="dot" />Open to software engineering roles</span>
        <h2>Let's talk about<br />what you're building.</h2>
        <p>
          Fastest way to reach me is email — I answer within a day. If you'd rather read
          code than read about it, the GitHub link goes straight to the repositories above.
        </p>
        <div className="clinks">
          <a className="btn btn-brass" href={`mailto:${PROFILE.email}`}>
            <Mail size={13} /> {PROFILE.email}
          </a>
          <CopyEmail />
          <a className="btn" href={PROFILE.github} target="_blank" rel="noreferrer">
            <GithubIcon size={13} /> GitHub
          </a>
          {PROFILE.linkedin && (
            <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={13} /> LinkedIn
            </a>
          )}
          <a className="btn" href={PROFILE.resume}><FileText size={13} /> Résumé (PDF)</a>
          <a className="btn" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
            <Phone size={13} /> {PROFILE.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
