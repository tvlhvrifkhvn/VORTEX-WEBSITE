import { Section, type Theme } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Text } from "@/components/ui/text";

interface Column { title: string; items: { text: string; claim?: true }[] }
interface ScopeProps { label: string; title: string; send: Column; get: Column; theme?: Theme }

/* 02.2 — two checklist columns: what the contractor sends, what comes back. */
export function Scope({ label, title, send, get, theme }: ScopeProps) {
  return (
    <Section theme={theme} aria-labelledby="scope-title">
      <SectionHeader id="scope-title" label={label} meta={`${send.items.length + get.items.length} items`} title={title} />
      <div className="grid gap-12 md:grid-cols-2 md:gap-(--spacing-gutter)">
        {[send, get].map((col, ci) => (
          <div key={col.title}>
            <h3 className="flex items-baseline gap-4 text-h3 font-semibold">
              <span aria-hidden="true" className="font-mono">{ci === 0 ? "↓" : "↑"}</span>
              {col.title}
            </h3>
            <ul className="mt-6 border-t border-border">
              {col.items.map((it) => (
                <li key={it.text} className="flex gap-4 border-b border-border py-4">
                  <span aria-hidden="true" className="flex size-5 shrink-0 items-center justify-center border border-foreground font-mono text-micro">✓</span>
                  <Text claim={it.claim}>{it.text}</Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
