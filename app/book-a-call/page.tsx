import { Suspense } from "react";
import { meta, page as p, leadForm, direct, calendar } from "@/content/book";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { KineticHeadline } from "@/components/motion/kinetic-headline";
import { DeskStatus } from "@/components/motion/desk-status";
import { CalendarBlock } from "@/components/sections/shared/calendar-block";
import { LeadForm } from "@/components/sections/shared/lead-form";
import { LeadFormParams } from "@/components/sections/shared/lead-form-params";

export const metadata = pageMetadata(meta);

const ext = "inline-flex min-h-11 items-center underline-offset-4 hover:underline";

/* /book-a-call (§11.10): calendar (click-to-load) + lead form pre-filled from the URL + direct contacts. */
export default function BookPage() {
  return (
    <Section aria-labelledby="page-title" className="pt-6 lg:pt-8">
      <Breadcrumb items={[{ label: meta.title }]} />
      <div className="mt-10 flex flex-col gap-8 lg:w-2/3">
        <p className="label-mono">{p.label}</p>
        <div id="page-title">
          <KineticHeadline lines={p.lines} className="text-h2 font-semibold md:text-display" />
        </div>
        <Text as="p" claim={p.leadClaim} className="max-w-[52ch] text-lead text-muted-foreground">{p.lead}</Text>
      </div>

      <div className="grid-vx mt-(--space-header) gap-y-(--space-header)">
        <section aria-label={calendar.label} className="col-span-4 md:col-span-8 lg:col-span-5">
          <CalendarBlock />
          <div className="mt-10 border-t border-border pt-4">
            <p className="label-mono text-muted-foreground">{direct.label}</p>
            <ul className="mt-3">
              <li><a href={`mailto:${site.contact.email}`} className={`${ext} break-all`}>{site.contact.email}</a></li>
              <li><a href={site.contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className={ext}>{direct.whatsapp} · {site.contact.whatsapp.display} ↗<span className="sr-only"> (opens in a new tab)</span></a></li>
              <li><a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className={ext}>{direct.linkedin} ↗<span className="sr-only"> (opens in a new tab)</span></a></li>
            </ul>
            <DeskStatus className="mt-6" />
          </div>
        </section>
        <section aria-labelledby="lead-title" className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-7">
          <h2 id="lead-title" className="label-mono mb-8 border-t border-border pt-4">{leadForm.label}</h2>
          <Suspense fallback={<LeadForm />}>
            <LeadFormParams />
          </Suspense>
        </section>
      </div>
    </Section>
  );
}
