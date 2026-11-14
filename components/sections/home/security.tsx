import { securitySection as s } from "@/content/home";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Bento, Tile } from "@/components/ui/tile";

/* 13 — SECURITY: 4-tile bento; every tile is a claim until confirmed. */
export function Security() {
  return (
    <Section theme="paper-2" aria-labelledby="security-title">
      <SectionHeader id="security-title" label={s.label} meta={s.meta} title={s.title} />
      <Bento>
        {s.tiles.map((t, i) => (
          <Tile key={t.title} claim className="col-span-4 min-h-56 justify-between gap-8 lg:col-span-3">
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
