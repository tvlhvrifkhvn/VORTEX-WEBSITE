import Link from "next/link";
import { footer } from "@/content/nav";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { MetaBlock } from "@/components/ui/labels";
import { Wordmark } from "@/components/ui/wordmark";
import { MotionToggle } from "./motion-toggle";
import { NewsletterForm } from "./newsletter-form";
import { BackToTop } from "./back-to-top";

const linkCls = "inline-flex min-h-11 items-center hover:underline underline-offset-4";

/* §11.0 footer (ink): headline + CTA · link columns + newsletter · metadata row · cropped giant wordmark. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-theme="ink" className="overflow-hidden pt-(--spacing-section)">
      <div className="container-vx">
        {/* Hidden by CSS on pages that already end with the orange CTA band (same message, same button). */}
        <div className="footer-cta flex flex-col items-start justify-between gap-8 border-b border-border pb-12 md:flex-row md:items-end">
          <p className="text-h2 font-semibold">{footer.title}</p>
          <Button href={footer.cta.href} size="lg">{footer.cta.label}</Button>
        </div>

        <div className="grid-vx gap-y-10 border-b border-border py-12">
          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="col-span-2 md:col-span-2">
              <p className="label-mono text-muted-foreground">{col.title}</p>
              <ul className="mt-3">
                {col.links.map((l) => (
                  <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="col-span-2 md:col-span-2">
            <p className="label-mono text-muted-foreground">{footer.contactTitle}</p>
            <ul className="mt-3">
              <li><a href={`mailto:${site.contact.email}`} className={linkCls}>
                {/* Break only before the @ in narrow columns, never mid-word. */}
                {site.contact.email.split("@")[0]}<wbr />@{site.contact.email.split("@")[1]}
              </a></li>
              <li><a href={site.contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className={linkCls}>{footer.whatsapp} ↗<span className="sr-only"> (opens in a new tab)</span></a></li>
              <li><a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>{footer.linkedin} ↗<span className="sr-only"> (opens in a new tab)</span></a></li>
              <li><Link href={footer.cta.href} className={linkCls}>{footer.bookCall} →</Link></li>
            </ul>
          </div>
          {site.features.newsletter && (
            <div className="col-span-4 md:col-span-8 lg:col-span-4">
              <NewsletterForm />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 py-8 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <MetaBlock title={site.location.city} line={site.location.coords} />
          <p className="label-mono text-muted-foreground">{footer.deskHours}</p>
          <MotionToggle label={footer.motion.toUpperCase()} />
          <ul className="label-mono flex gap-6">
            {footer.legal.map((l) => (
              <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
          <BackToTop className={`label-mono ${linkCls} gap-2`} />
          <p className="label-mono text-muted-foreground">© {year} {site.name}</p>
        </div>
      </div>
      <div aria-hidden="true" className="-mb-[0.18em] select-none whitespace-nowrap px-(--spacing-margin) text-center">
        <Wordmark className="text-[15.2vw] leading-[0.8]" />
      </div>
    </footer>
  );
}
