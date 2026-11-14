import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ParallaxText } from "@/components/motion/parallax-text";

interface CtaBandProps {
  label: string;
  title: string;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  theme?: "signal" | "ink";
}

/* End-of-page band (§11.0): label, big headline, one sentence, primary + secondary. */
export function CtaBand({ label, title, text, primary, secondary, theme = "signal" }: CtaBandProps) {
  return (
    <Section theme={theme} aria-labelledby="cta-band-title" className="overflow-hidden">
      <p className="label-mono border-t border-border pt-3">{label}</p>
      <ParallaxText className="mt-10">
        <h2 id="cta-band-title" className="max-w-[14ch] text-display font-semibold">{title}</h2>
      </ParallaxText>
      <p className="mt-8 max-w-[52ch] text-lead">{text}</p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href={primary.href} size="lg">{primary.label}</Button>
        {secondary && <Button href={secondary.href} size="lg" variant="ghost">{secondary.label}</Button>}
      </div>
    </Section>
  );
}
