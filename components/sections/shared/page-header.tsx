import type { ImageId } from "@/content/images";
import { Section } from "@/components/ui/section";
import { ImageFrame } from "@/components/ui/image-frame";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { KineticHeadline } from "@/components/motion/kinetic-headline";

interface PageHeaderProps {
  label: string;
  lines: string[];
  lead?: string;
  image?: ImageId;
  /** Breadcrumb label for this page (VORTEXONE / <crumb>). */
  crumb: string;
  children?: React.ReactNode;
}

/* Hero for single pages (pricing, calculator, work, about…): breadcrumb, label, kinetic H1, lead, optional object. */
export function PageHeader({ label, lines, lead, image, crumb, children }: PageHeaderProps) {
  return (
    <Section aria-labelledby="page-title" className="pt-6 lg:pt-8">
      <Breadcrumb items={[{ label: crumb }]} />
      <div className="grid-vx mt-10 items-end gap-y-12">
        <div className="col-span-4 flex flex-col gap-8 md:col-span-8 lg:col-span-8">
          <p className="label-mono">{label}</p>
          <div id="page-title">
            <KineticHeadline lines={lines} className="text-h2 font-semibold md:text-display" />
          </div>
          {lead && <p className="max-w-[56ch] text-lead text-muted-foreground">{lead}</p>}
          {children}
        </div>
        {image && (
          <ImageFrame slot={image} block="left" priority sizes="(min-width: 1024px) 25vw, 60vw" className="col-span-3 md:col-span-3 lg:col-span-3 lg:col-start-10" />
        )}
      </div>
    </Section>
  );
}
