import { hero } from "@/content/home";
import { KineticHeadline } from "@/components/motion/kinetic-headline";
import { Section } from "@/components/ui/section";
import { MetaBlock, RotatedLabel } from "@/components/ui/labels";
import { SpecStrip } from "@/components/ui/spec";
import { ActionGroup } from "@/components/ui/action-group";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";
import { Bar } from "@/components/ui/rule";
import { DeskStatus } from "@/components/motion/desk-status";
import { stripText } from "@/lib/pricing";

/* 01 — THE DESK (§11.1). Mobile order: meta line → H1 → image → lead → CTAs. */
export function Hero() {
  const prices = (["01", "02"] as const).flatMap((f) => {
    const t = stripText(f);
    return t ? [{ text: t, claim: true as const }] : [];
  });
  return (
    <Section aria-labelledby="hero-title" className="relative pt-8 pb-10 md:pb-(--spacing-section) lg:pt-14">
      <div className="grid-vx gap-y-8 lg:gap-y-10">
        <div className="col-span-4 flex flex-col gap-1 md:col-span-8 md:flex-row md:flex-wrap md:gap-x-6 lg:col-span-12 lg:grid lg:grid-cols-3 lg:gap-(--spacing-gutter)">
          {hero.meta.map((m) => (
            <MetaBlock key={m.title} title={m.title} line={m.line} className="[&>span:last-child]:hidden md:[&>span:last-child]:block" />
          ))}
        </div>

        <div id="hero-title" className="col-span-4 md:col-span-8 lg:col-span-9 lg:row-start-2">
          <KineticHeadline lines={hero.lines} className="text-h3 font-semibold md:text-h2" lineClasses={["text-hero mb-[0.08em]"]} />
        </div>

        <div className="relative col-span-4 md:col-span-5 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-3">
          <ImageFrame slot="hero-object" block="left" priority sizes="(min-width: 1024px) 33vw, 100vw" />
        </div>

        <div className="col-span-4 flex flex-col gap-8 md:col-span-8 lg:col-span-7 lg:row-start-3">
          <Text as="p" className="max-w-[52ch] text-lead text-muted-foreground">{hero.lead}</Text>
          <SpecStrip items={hero.strip} />
          <ActionGroup>
            <Button data-set-viewing="01" href={hero.ctas.agent.href} size="lg">{hero.ctas.agent.label}</Button>
            <Button data-set-viewing="02" href={hero.ctas.contractor.href} size="lg" variant="secondary">{hero.ctas.contractor.label}</Button>
            <Button href={hero.ctas.call.href} variant="text">{hero.ctas.call.label}</Button>
          </ActionGroup>
          <div className="flex flex-col gap-3">
            <div data-claim="" className="w-fit">
              <DeskStatus labels={hero.desk} />
            </div>
            {prices.length > 0 && <SpecStrip items={prices} />}
          </div>
        </div>

        <Bar className="col-span-4 self-end md:col-span-3 lg:col-span-4 lg:row-start-4" />
      </div>
      <RotatedLabel className="absolute top-12 right-3">{hero.rotated}</RotatedLabel>
    </Section>
  );
}
