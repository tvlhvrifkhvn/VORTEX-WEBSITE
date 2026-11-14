import { founder, manifesto } from "@/content/about";
import { site } from "@/content/site";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ImageFrame } from "@/components/ui/image-frame";
import { MetaBlock } from "@/components/ui/labels";
import { Text } from "@/components/ui/text";
import { ArrowLink } from "@/components/ui/button";

/* 01 — FOUNDER: portrait, facts-only bio, "since" line (claim), LinkedIn. */
export function FounderStory() {
  return (
    <Section theme="paper-2" aria-labelledby="founder-story-title">
      <SectionHeader id="founder-story-title" label={founder.label} title={founder.title} />
      <div className="grid-vx gap-y-10">
        <figure className="col-span-4 md:col-span-4 lg:col-span-4">
          <ImageFrame slot="founder-portrait" block="right" />
          <figcaption className="mt-6">
            <MetaBlock title={`${site.founder.name} — ${founder.role}`} line={`${site.location.city} · ${site.location.coords}`} />
          </figcaption>
        </figure>
        <div className="col-span-4 flex flex-col gap-6 md:col-span-4 lg:col-span-6 lg:col-start-7">
          <Text as="p" className="text-lead">{founder.bio}</Text>
          <Text as="p" claim={founder.sinceClaim} className="label-mono">{founder.since}</Text>
          <ArrowLink href={site.contact.linkedin}>{founder.linkedin}</ArrowLink>
        </div>
      </div>
    </Section>
  );
}

/* 02 — WHY TWO FILES: manifesto, five numbered statements at h2 size. */
export function Manifesto() {
  return (
    <Section theme="ink" aria-labelledby="manifesto-title">
      <SectionHeader id="manifesto-title" label={manifesto.label} meta={`${manifesto.items.length} rules`} title={manifesto.title} />
      <ol className="border-t border-border">
        {manifesto.items.map((m) => (
          <li key={m.n} className="grid-vx gap-y-3 border-b border-border py-8">
            <span className="label-mono tabular col-span-4 text-signal md:col-span-1">{m.n}</span>
            <h3 className="col-span-4 text-h2 font-semibold md:col-span-7 lg:col-span-7">{m.title}</h3>
            <p className="col-span-4 max-w-[40ch] text-muted-foreground md:col-span-7 md:col-start-2 lg:col-span-4 lg:col-start-9 lg:self-end">{m.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
