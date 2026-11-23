import { founderSection as s } from "@/content/home";
import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { SectionRule } from "@/components/ui/section-header";
import { ImageFrame } from "@/components/ui/image-frame";
import { MetaBlock } from "@/components/ui/labels";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

/* 08 — THE FOUNDER (paper): portrait + caption MetaBlock, short bio (facts only, max 2 lines on home). */
export function Founder() {
  return (
    <Section aria-labelledby="founder-title">
      <SectionRule label={s.label} />
      {/* Portrait and text column share one row: H2 top = portrait top, button bottom = caption bottom. */}
      <div className="grid-vx mt-(--space-header) gap-y-(--space-header)">
        <figure className="col-span-4 md:col-span-4 lg:col-span-4">
          <ImageFrame slot="founder-portrait" />
          <figcaption className="mt-(--space-tight)">
            <MetaBlock title={`${site.founder.name} — ${s.role}`} line={`${site.location.city.split(",")[0]} ${site.location.coords}`} />
          </figcaption>
        </figure>
        <div className="col-span-4 flex flex-col md:col-span-4 lg:col-span-6 lg:col-start-7">
          <h2 id="founder-title" className="text-h2 font-semibold">{s.title}</h2>
          <Text as="p" claim={s.subClaim} className="mt-(--space-block) max-w-[44ch] text-lead">{s.sub}</Text>
          <Text as="p" className="mt-(--space-block) line-clamp-2 max-w-[60ch] text-muted-foreground">{s.bio}</Text>
          <div className="mt-auto pt-(--space-header)">
            <Button href={s.cta.href} variant="ghost" size="lg">{s.cta.label}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
