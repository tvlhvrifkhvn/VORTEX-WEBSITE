import type { ImageId } from "@/content/images";
import type { SpecRow } from "@/components/ui/spec";
import { Section } from "@/components/ui/section";
import { SpecTable } from "@/components/ui/spec";
import { Button } from "@/components/ui/button";
import { ImageFrame } from "@/components/ui/image-frame";
import { Breadcrumb, type Crumb } from "@/components/layout/breadcrumb";
import { KineticHeadline } from "@/components/motion/kinetic-headline";

interface FileHeaderProps {
  crumbs: Crumb[];
  numeral: string;
  tag: string;
  lines: string[];
  lead: string;
  specCaption: string;
  spec: SpecRow[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  image: ImageId;
  /** Small mono line under the CTAs (File 02 positioning rule). */
  note?: string;
}

/* File page header (§11.2/§11.3): breadcrumb, cropped giant numeral, kinetic H1, spec sheet + object. */
export function FileHeader({ crumbs, numeral, tag, lines, lead, specCaption, spec, primary, secondary, image, note }: FileHeaderProps) {
  return (
    <Section aria-labelledby="file-title" className="relative overflow-hidden pt-6 pb-[calc(var(--spacing-section)+4rem)] lg:pt-8">
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-[0.2em] left-[calc(var(--spacing-margin)-0.06em)] text-giant font-semibold text-foreground/10 tabular select-none">
        {numeral}
      </span>
      <div className="relative">
        <Breadcrumb items={crumbs} />
        <div className="grid-vx mt-10 gap-y-12">
          <div className="col-span-4 flex flex-col gap-8 md:col-span-8 lg:col-span-7">
            <p className="label-mono">{tag}</p>
            <div id="file-title">
              <KineticHeadline lines={lines} className="text-h2 font-semibold md:text-display" />
            </div>
            <p className="max-w-[52ch] text-lead text-muted-foreground">{lead}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={primary.href} size="lg">{primary.label}</Button>
              <Button href={secondary.href} size="lg" variant="ghost">{secondary.label}</Button>
            </div>
            {note && <p className="max-w-[60ch] border-l-2 border-signal pl-4 font-mono text-small text-muted-foreground">{note}</p>}
          </div>
          <div className="col-span-4 flex flex-col gap-10 md:col-span-8 md:grid md:grid-cols-2 md:gap-(--spacing-gutter) lg:col-span-4 lg:col-start-9 lg:flex lg:gap-12">
            <ImageFrame slot={image} block="right" priority sizes="(min-width: 1024px) 30vw, 50vw" className="w-2/3 md:w-full lg:w-2/3 lg:self-end" />
            <SpecTable rows={spec} caption={specCaption.toUpperCase()} />
          </div>
        </div>
      </div>
    </Section>
  );
}
