import { toolsSection } from "@/content/home";
import { tools } from "@/content/tools";
import { Marquee } from "@/components/motion/marquee";

/* 02 — WORKS INSIDE: tool names as text (no logos), hairlines top and bottom. */
export function ToolsMarquee() {
  return (
    <section data-theme="paper" aria-labelledby="tools-title" className="border-y border-border">
      <h2 id="tools-title" className="sr-only">{toolsSection.srTitle}</h2>
      <div className="container-vx grid-vx items-center py-5">
        <p className="label-mono col-span-4 pb-3 md:col-span-2 md:pb-0">{toolsSection.label}</p>
        <div className="col-span-4 -mr-(--spacing-margin) md:col-span-6 lg:col-span-10">
          <Marquee items={tools.map((t) => t.name)} className="text-h3 font-semibold" />
        </div>
      </div>
    </section>
  );
}
