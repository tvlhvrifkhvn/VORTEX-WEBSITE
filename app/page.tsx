import { meta } from "@/content/home";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMetadata(meta);

/* Segment 0 scaffold — replaced by home sections in S2/S3. */
export default function Home() {
  return (
    <main className="container-vx py-(--spacing-section)">
      <p className="label-mono text-muted-foreground">SEG-0 · SCAFFOLD</p>
      <h1 className="mt-6 text-display font-bold">{site.name}</h1>
    </main>
  );
}
