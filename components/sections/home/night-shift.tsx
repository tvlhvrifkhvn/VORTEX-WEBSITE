import { shiftSection as s } from "@/content/home";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { PinnedStory } from "@/components/motion/pinned-story";

/* 06 — YOUR DAY, OUR NIGHT SHIFT: pinned scrollytelling (≥1024px, motion on) or static timeline. */
export function NightShift() {
  return (
    <Section aria-labelledby="shift-title">
      <SectionHeader id="shift-title" label={s.label} meta={s.meta} title={s.title} lead={s.lead} layout="split" />
      <PinnedStory steps={s.steps} fromLabel={s.from.toUpperCase()} toLabel={s.to} />
    </Section>
  );
}
