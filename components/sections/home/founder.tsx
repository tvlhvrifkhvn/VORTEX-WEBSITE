import { founderSection as s } from "@/content/home";
import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { ImageFrame } from "@/components/ui/image-frame";
import { MetaBlock } from "@/components/ui/labels";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

/* 08 — THE FOUNDER (paper): portrait + caption MetaBlock, short bio (facts only, max 2 lines on home). */
export function Founder() {
  return (
    <Section aria-labelledby="founder-title">
      <p className="label-mono border-t border-border pt-3">{s.label}</p>
      <div className="grid-vx mt-8 gap-y-10">
        <figure className="col-span-4 md:col-span-4 lg:col-span-4">
          <ImageFrame slot="founder-portrait" />
          <figcaption className="mt-6">
            <MetaBlock title={`${site.founder.name} — ${s.role}`} line={`${site.location.city.split(",")[0]} ${site.location.coords}`} />
          </figcaption>
        </figure>
        <div className="col-span-4 flex flex-col md:col-span-4 lg:col-span-6 lg:col-start-7 lg:justify-end">
          <h2 id="founder-title" className="text-h2 font-semibold">{s.title}</h2>
          <Text as="p" claim={s.subClaim} className="mt-6 max-w-[44ch] text-lead">{s.sub}</Text>
          <Text as="p" className="mt-6 line-clamp-2 max-w-[60ch] text-muted-foreground">{s.bio}</Text>
          <Button href={s.cta.href} variant="ghost" size="lg" className="mt-10 self-start">{s.cta.label}</Button>
        </div>
      </div>
    </Section>
  );
}
