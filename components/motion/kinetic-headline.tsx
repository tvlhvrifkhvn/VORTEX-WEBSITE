interface KineticHeadlineProps {
  /** Manual line breaks from content (§4.4). */
  lines: string[];
  as?: "h1" | "h2" | "p";
  className?: string;
}

/* §6.2.2 — CSS-only so it starts on first paint with no hydration flash.
   Runs only when <html data-motion="on">; otherwise the text is static. Real text stays in the DOM. */
export function KineticHeadline({ lines, as: Tag = "h1", className }: KineticHeadlineProps) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="kinetic-line block overflow-hidden pb-[0.06em]">
          <span className="block animate-kinetic-in" style={{ animationDelay: `${120 + i * 80}ms` }}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

