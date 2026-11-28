import { sg } from "@/content/styleguide";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { KineticHeadline } from "@/components/motion/kinetic-headline";
import { ScrambleNumber } from "@/components/motion/scramble-number";
import { ScrambleText } from "@/components/motion/scramble-text";
import { Marquee } from "@/components/motion/marquee";
import { LiveClock } from "@/components/motion/live-clock";
import { DeskStatus } from "@/components/motion/desk-status";
import { DeskLog } from "@/components/motion/desk-log";
import { PinnedStory } from "@/components/motion/pinned-story";
import { LineDraw } from "@/components/motion/line-draw";
import { HoverRevealList } from "@/components/motion/hover-reveal-list";
import { ParallaxText } from "@/components/motion/parallax-text";
import { CursorLabel } from "@/components/motion/cursor-label";
import { Reveal } from "@/components/motion/reveal";
import { MotionToggle } from "@/components/layout/motion-toggle";
import { Tile } from "@/components/ui/tile";

export function MotionDemos() {
  return (
    <>
      <Section theme="ink" aria-labelledby="sg-motion">
        <SectionHeader id="sg-motion" label="09 — MOTION" meta="§6.2" title="Motion primitives" lead="Toggle motion to check every final state." layout="split" />
        <MotionToggle />
        <KineticHeadline as="p" lines={sg.kinetic} className="mt-12 text-display font-semibold" />
        <div className="grid-vx mt-16 gap-y-10">
          <div className="col-span-4 flex flex-col gap-6 lg:col-span-4">
            <ScrambleNumber value={2400} prefix="$" className="text-h2 font-semibold text-signal" />
            <a href="#sg-motion" className="label-mono min-h-11 w-fit py-3"><ScrambleText>HOVER TO SCRAMBLE 01</ScrambleText></a>
            <LiveClock />
            <DeskStatus />
          </div>
          <DeskLog title="DESK LOG — SAMPLE" entries={sg.log} className="col-span-4 lg:col-span-8" />
        </div>
      </Section>

      <Section flush bleed theme="paper-2" aria-label="Marquee" className="border-y border-border py-6">
        <Marquee items={sg.marquee} className="text-h3 font-semibold" />
      </Section>

      <Section aria-labelledby="sg-rows">
        <SectionHeader id="sg-rows" label="10 — HOVER REVEAL" meta="SERVICE ROWS" title="Hover reveal list" />
        <HoverRevealList rows={sg.rows} />
        <LineDraw viewBox="0 0 400 40" d="M0 20 H140 L160 4 L180 36 L200 20 H400" className="mt-16 h-10 w-full" />
        <Reveal stagger className="mt-16 grid grid-cols-4 gap-(--spacing-gutter)">
          {["A", "B", "C", "D"].map((k) => (
            <Tile key={k} className="label-mono h-24">REVEAL {k}</Tile>
          ))}
        </Reveal>
        <CursorLabel label="OPEN FILE →" className="mt-16">
          <Tile theme="ink" className="h-48 justify-end">
            <p className="label-mono">CURSOR LABEL AREA</p>
          </Tile>
        </CursorLabel>
        <ParallaxText className="mt-16 text-h2 font-semibold">{sg.sample}</ParallaxText>
      </Section>

      <Section theme="paper-2" aria-labelledby="sg-story">
        <SectionHeader id="sg-story" label="11 — PINNED STORY" meta="SAMPLE SHIFT" title="Pinned story" />
        <PinnedStory steps={sg.story} fromLabel="ISLAMABAD" toLabel="ET" />
      </Section>
    </>
  );
}
