import { meta, doc } from "@/content/legal/terms";
import { pageMetadata } from "@/lib/seo";
import { LegalDoc } from "@/components/sections/shared/legal-doc";

export const metadata = pageMetadata(meta);

/* /terms — DRAFT pending legal review (§11.12). */
export default function TermsPage() {
  return <LegalDoc crumb={meta.title} doc={doc} />;
}
