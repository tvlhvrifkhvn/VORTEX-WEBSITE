import Link from "next/link";
import { cn } from "@/lib/utils";
import { servicesSection as s } from "@/content/home";
import { addonServices, coreServices, services } from "@/content/services";
import { files } from "@/content/nav";
import type { Service } from "@/content/types";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FileTag, Tag } from "@/components/ui/labels";
import { Text } from "@/components/ui/text";

const fileHref = (f: Service["file"]) => files.find((x) => x.file === f)!.href;

/** Core: featured tiles take half a row; the rest share rows evenly so every row is full on desktop. */
function span(svc: Service) {
  if (svc.featured) return "md:col-span-4 lg:col-span-6";
  const rest = coreServices.filter((x) => x.file === svc.file && !x.featured).length % 4;
  return rest === 2 ? "md:col-span-4 lg:col-span-6" : "md:col-span-4 lg:col-span-3";
}

function TileLink({ svc, addon }: { svc: Service; addon?: boolean }) {
  return (
    <li data-claim={svc.claim ? "" : undefined} className={cn("col-span-4 bg-background", addon ? "md:col-span-4 lg:col-span-3" : span(svc))}>
      <Link
        href={`${fileHref(svc.file)}#${svc.id}`}
        className={cn(
          "group relative flex h-full flex-col gap-4 transition-colors duration-300 hover:bg-card focus-visible:bg-card",
          addon ? "min-h-44 p-5" : svc.featured ? "min-h-72 p-6" : "min-h-56 p-6",
        )}
      >
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-signal transition-transform duration-300 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        <span className="flex items-center justify-between gap-4">
          <span className="label-mono tabular text-muted-foreground">{svc.index}</span>
          <span className="flex gap-2">
            {addon && <Tag>{s.addonTag}</Tag>}
            <FileTag file={svc.file} />
          </span>
        </span>
        <h3 className={cn("mt-auto font-semibold", svc.featured ? "text-h2" : "text-h3")}>{svc.title}</h3>
        <Text as="p" className="max-w-[44ch] text-small text-muted-foreground">{svc.summary}</Text>
        <span aria-hidden="true" className="text-h3 transition-transform duration-300 group-hover:translate-x-2">→</span>
      </Link>
    </li>
  );
}

const grid = "grid grid-cols-4 gap-px border border-border bg-border md:grid-cols-8 lg:grid-cols-12";

/* 05 — EVERYTHING ON THE DESK (ink): core tiles (File 01 + 02), then the File 01 add-ons in a smaller group.
   Each tile links to its anchor on the file page. Counts come from content/services.ts. */
export function ServicesBento() {
  const core = (["01", "02"] as const).flatMap((f) => [
    ...coreServices.filter((x) => x.file === f && x.featured),
    ...coreServices.filter((x) => x.file === f && !x.featured),
  ]);
  return (
    <Section theme="ink" aria-labelledby="services-title">
      <SectionHeader id="services-title" label={s.label} meta={`${services.length} items`} title={s.title(coreServices.length)} lead={s.lead} layout="split" />
      <p className="label-mono mb-4 flex justify-between gap-4">
        {s.coreLabel}
        <span className="text-muted-foreground">{coreServices.length} items</span>
      </p>
      <ul className={grid}>
        {core.map((svc) => <TileLink key={svc.id} svc={svc} />)}
      </ul>
      <div className="mt-16 mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <p className="label-mono">{s.addonLabel}</p>
        <p className="text-small text-muted-foreground">{s.addonNote}</p>
      </div>
      <ul className={grid}>
        {addonServices.map((svc) => <TileLink key={svc.id} svc={svc} addon />)}
      </ul>
    </Section>
  );
}
