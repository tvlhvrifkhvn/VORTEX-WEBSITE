import { hero } from "@/content/home";
import { KineticHeadline } from "@/components/motion/kinetic-headline";
import { Section } from "@/components/ui/section";
import { MetaBlock, RotatedLabel } from "@/components/ui/labels";
import { ActionGroup } from "@/components/ui/action-group";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";
import { DeskStatus } from "@/components/motion/desk-status";
import { stripText } from "@/lib/pricing";

/* 01 — THE DESK (§11.1). Swiss poster lockup on one 12-col grid:
   index row (3 × 4 cols) → "Back office" filling the content width → one-line deck →
   hairline → band: lead + actions + base line (cols 1–7) | square photo (cols 10–12, under the third index block).
   The base line sits on the photo's bottom edge. Phone: index → H1 → photo → lead → actions → base line. */
export function Hero() {
  const prices = (["01", "02"] as const).flatMap((f) => stripText(f) ?? []);
  return (
    <Section aria-labelledby="hero-title" className="relative pt-8 pb-(--space-header) lg:pt-12">
      <div className="grid-vx gap-y-(--space-tight)">
        {hero.meta.map((m) => (
          <div key={m.title} data-claim={"claim" in m ? "" : undefined} className="col-span-4 md:col-span-4 lg:col-span-4 lg:last:col-span-3 lg:last:col-start-10">
            <MetaBlock title={m.title} line={m.line} className="[&>span:last-child]:hidden md:[&>span:last-child]:block" />
          </div>
        ))}
      </div>

      <div id="hero-title" className="mt-(--space-header)">
        <KineticHeadline lines={hero.lines} className="text-h3 font-semibold" lineClasses={["hero-fit", "mt-(--space-tight) max-w-[40ch]"]} />
      </div>

      <div className="grid-vx mt-(--space-header) gap-y-(--space-header) border-t border-border pt-(--space-block)">
        <ImageFrame slot="hero-object" block="left" square priority sizes="(min-width: 1024px) 22vw, 100vw" className="col-span-4 md:col-span-4 lg:col-span-3 lg:col-start-10 lg:row-start-1" />
        <div className="col-span-4 flex flex-col md:col-span-8 lg:col-span-7 lg:row-start-1">
          <Text as="p" className="max-w-[52ch] text-lead text-muted-foreground">{hero.lead}</Text>
          <ActionGroup className="mt-(--space-header)">
            <Button data-set-viewing="01" href={hero.ctas.agent.href} size="lg">{hero.ctas.agent.label}</Button>
            <Button data-set-viewing="02" href={hero.ctas.contractor.href} size="lg" variant="secondary">{hero.ctas.contractor.label}</Button>
            <Button href={hero.ctas.call.href} variant="text">{hero.ctas.call.label}</Button>
          </ActionGroup>
          <div className="mt-auto pt-(--space-header)">
            <div className="flex flex-col gap-(--space-tight) border-t border-border pt-3 xl:flex-row xl:items-baseline xl:justify-between xl:gap-x-(--space-inline)">
              <div data-claim="" className="w-fit">
                <DeskStatus labels={hero.desk} />
              </div>
              {prices.length > 0 && (
                <p data-claim="" className="label-mono flex flex-col sm:flex-row sm:gap-x-2">
                  {prices.map((t, i) => (
                    <span key={t} className="whitespace-nowrap">{i > 0 && <span aria-hidden="true" className="mr-2 hidden sm:inline">·</span>}{t}</span>
                  ))}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <RotatedLabel className="absolute top-12 right-3">{hero.rotated}</RotatedLabel>
    </Section>
  );
}
