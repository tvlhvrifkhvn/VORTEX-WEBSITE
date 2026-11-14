import Link from "next/link";
import { site } from "@/content/site";

export interface Crumb { label: string; href?: string }

/* label-mono trail "VORTEXONE / FILE 01 / REAL ESTATE VA" + BreadcrumbList JSON-LD (§11.0). */
export function Breadcrumb({ items, label = "Breadcrumb" }: { items: Crumb[]; label?: string }) {
  const all: Crumb[] = [{ label: site.name, href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: new URL(c.href, site.url).toString() } : {}),
    })),
  };
  return (
    <nav aria-label={label}>
      <ol className="label-mono flex flex-wrap items-center gap-x-2 text-muted-foreground">
        {all.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="inline-flex min-h-11 items-center hover:text-foreground">{c.label.toUpperCase()}</Link>
            ) : (
              <span aria-current="page" className="text-foreground">{c.label.toUpperCase()}</span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
