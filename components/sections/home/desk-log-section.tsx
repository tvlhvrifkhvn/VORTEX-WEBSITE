import { deskLogSection as s } from "@/content/home";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { DeskLog } from "@/components/motion/desk-log";

/* 07 — DESK LOG (ink, compact): headline left, live sample feed right. */
export function DeskLogSection() {
  return (
    <Section theme="ink" aria-labelledby="desklog-title" className="py-[clamp(4rem,7vw,7rem)]">
      <div className="grid-vx gap-y-10">
        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <p className="label-mono border-t border-border pt-3">{s.label}</p>
          <h2 id="desklog-title" className="mt-8 text-h3 font-semibold">{s.title}</h2>
          <Text as="p" claim={s.textClaim} className="mt-4 max-w-[40ch] text-muted-foreground">{s.text}</Text>
        </div>
        <DeskLog title={s.logTitle.toUpperCase()} entries={s.entries} className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6" />
      </div>
    </Section>
  );
}
