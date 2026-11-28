import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ActionGroup } from "@/components/ui/action-group";
import { SectionRule } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";
import { VisitorCtaButton } from "./visitor-mode";
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
      <SectionRule label={label} />
      <ParallaxText className="mt-(--space-header)">
        <h2 id="cta-band-title" className="max-w-[14ch] text-display font-semibold">{title}</h2>
      </ParallaxText>
      <Text as="p" className="mt-(--space-block) max-w-[52ch] text-lead">{text}</Text>
      <ActionGroup className="mt-(--space-header)">
        <VisitorCtaButton href={primary.href} label={primary.label} size="lg" />
        {secondary && <Button href={secondary.href} size="lg" variant="ghost">{secondary.label}</Button>}
      </ActionGroup>
    </Section>
  );
}
