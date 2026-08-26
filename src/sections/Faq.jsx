import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../components/Reveal";
import { useMeasuredHeight } from "../hooks/useMeasuredHeight";
import { FAQ } from "../data/recruiting";

export function Faq() {
  return (
    <section className="wrap sec" id="faq">
      <SectionHead title="Questions you're about to ask" count={`${FAQ.length} answers`} />
      <Reveal><FaqList /></Reveal>
    </section>
  );
}

/** One item open at a time. */
function FaqList() {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq">
      {FAQ.map((f, i) => (
        <FaqItem
          key={f.q}
          item={f}
          open={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FaqItem({ item, open, onToggle }) {
  const [ref, h] = useMeasuredHeight(open);

  return (
    <div className="faq-item" data-open={open ? "1" : "0"}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        {item.q}
        <ChevronDown size={16} />
      </button>
      <div className="faq-a" style={{ height: open ? h : 0 }}>
        <div ref={ref}><p>{item.a}</p></div>
      </div>
    </div>
  );
}
