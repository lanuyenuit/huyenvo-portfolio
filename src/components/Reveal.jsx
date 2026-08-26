import { useReveal } from "../hooks/useReveal";

/** Fades its children up the first time they scroll into view. */
export function Reveal({ children, as: Tag = "div", className = "", delay = 0, style, ...rest }) {
  const [ref, seen] = useReveal();
  return (
    <Tag
      ref={ref}
      data-seen={seen}
      className={`rv ${className}`}
      style={{ "--d": `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
