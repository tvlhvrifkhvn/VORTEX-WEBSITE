import { sg } from "@/content/styleguide";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const typeClass: Record<(typeof sg.type)[number], string> = {
  giant: "text-giant font-semibold", display: "text-display font-semibold", h2: "text-h2 font-semibold", h3: "text-h3 font-semibold",
  lead: "text-lead", body: "text-body", small: "text-small", button: "font-mono text-button font-medium uppercase",
  label: "label-mono", micro: "font-mono text-micro uppercase",
};

export function Tokens() {
  return (
    <>
      <Section aria-labelledby="sg-colors">
        <SectionHeader id="sg-colors" label="01 — COLOR" meta={`${sg.colors.length} TOKENS`} title="Color tokens and contrast pairs" />
        <ul className="grid grid-cols-2 gap-(--spacing-gutter) md:grid-cols-3 lg:grid-cols-9">
          {sg.colors.map((c) => (
            <li key={c.name}>
              <div className={cn("aspect-square border border-border", c.cls)} />
              <p className="label-mono mt-2">{c.name}</p>
              <p className="label-mono text-muted-foreground">{c.hex}</p>
            </li>
          ))}
        </ul>
        <ul className="mt-12 grid grid-cols-1 gap-(--spacing-gutter) md:grid-cols-2 lg:grid-cols-4">
          {sg.pairs.map((p) => (
            <li key={p.label} className={cn("flex min-h-24 flex-col justify-between p-4", p.bg, p.fg)}>
              <span className="text-h3 font-semibold">Aa 01</span>
              <span className="label-mono">{p.label} · {p.ratio}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section theme="paper-2" aria-labelledby="sg-type">
        <SectionHeader id="sg-type" label="02 — TYPE" meta="INTER TIGHT + IBM PLEX MONO" title="Type scale" />
        <ul className="flex flex-col">
          {sg.type.map((t) => (
            <li key={t} className="grid-vx items-baseline gap-y-2 overflow-hidden border-b border-border py-4">
              <span className="label-mono col-span-4 text-muted-foreground md:col-span-1">{t}</span>
              <span className={cn("col-span-4 md:col-span-7 lg:col-span-11", typeClass[t])}>{t === "giant" ? "01" : sg.sample}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="sg-grid">
        <SectionHeader id="sg-grid" label="03 — GRID" meta="4 · 8 · 12 COLUMNS" title="Grid" lead="Press G in review mode (?review=1) for the overlay." />
        <div className="grid-vx h-32">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className={cn("label-mono flex items-end bg-signal/20 p-2", i >= 4 && "hidden md:flex", i >= 8 && "md:hidden lg:flex")}>
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </Section>

      {sg.themes.map((theme, i) => (
        <Section key={theme} theme={theme} aria-label={`Theme ${theme}`}>
          <p className="label-mono">0{4}.{i + 1} — THEME: {theme.toUpperCase()}</p>
          <p className="mt-6 text-h2 font-semibold">{sg.sample}</p>
          <p className="mt-4 max-w-[60ch] text-muted-foreground">{sg.mutedSample}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/book-a-call">{sg.buttons.primary}</Button>
            <Button href="/book-a-call" variant="secondary">{sg.buttons.secondary}</Button>
            <Button href="/book-a-call" variant="ghost">{sg.buttons.ghost}</Button>
            <Button href="https://example.com" variant="text">{sg.buttons.text}</Button>
          </div>
        </Section>
      ))}
    </>
  );
}
