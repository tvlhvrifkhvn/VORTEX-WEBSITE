import { cn } from "@/lib/utils";
import { securitySection as s } from "@/content/home";
import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Bento, Tile } from "@/components/ui/tile";

/* 13 — SECURITY: bento of rules (home: 4, how-we-work: 6); every tile is a claim until confirmed. */
interface SecurityProps { label?: string; meta?: string; title?: string; tiles?: { title: string; text: string }[]; theme?: Theme }

export function Security({ label = s.label, meta = s.meta, title = s.title, tiles = s.tiles, theme = "paper-2" }: SecurityProps = {}) {
  return (
    <Section theme={theme} aria-labelledby="security-title">
      <SectionHeader id="security-title" label={label} meta={meta} title={title} />
      <Bento>
        {tiles.map((t, i) => (
          <Tile key={t.title} claim className={cn("col-span-4 min-h-56 justify-between gap-8", tiles.length % 3 === 0 ? "lg:col-span-4" : "lg:col-span-3")}>
            <span className="label-mono tabular text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-h3 font-semibold">{t.title}</h3>
              <p className="mt-3 text-small text-muted-foreground">{t.text}</p>
            </div>
          </Tile>
        ))}
      </Bento>
    </Section>
  );
}
