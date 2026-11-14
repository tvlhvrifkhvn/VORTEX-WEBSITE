import { cn } from "@/lib/utils";
import { Text } from "./text";

/** One row of mono items separated by " · ", hairlines above and below; wraps naturally on mobile (§5.4). */
type StripItem = string | { text: string; claim?: true };

export function SpecStrip({ items, className }: { items: StripItem[]; className?: string }) {
  return (
    <ul className={cn("label-mono flex flex-wrap gap-x-6 gap-y-2 border-y border-border py-3 md:gap-x-0", className)}>
      {items.map((item, i) => {
        const { text, claim } = typeof item === "string" ? { text: item, claim: undefined } : item;
        return (
          <li key={text} className="flex items-center">
            {i > 0 && <span aria-hidden="true" className="mx-3 hidden text-muted-foreground md:inline">·</span>}
            <Text claim={claim}>{text}</Text>
          </li>
        );
      })}
    </ul>
  );
}

export interface SpecRow { key: string; value: string; note?: string; claim?: true }

/** MLS-sheet style key/value table (§5.3). */
export function SpecTable({ rows, caption, className }: { rows: SpecRow[]; caption?: string; className?: string }) {
  return (
    <table className={cn("w-full border-collapse border-t border-border text-left", className)}>
      {caption && <caption className="label-mono pb-3 text-left text-muted-foreground">{caption}</caption>}
      <tbody>
        {rows.map((r) => (
          <tr key={r.key} data-claim={r.claim ? "" : undefined} className="border-b border-border align-baseline">
            <th scope="row" className="label-mono w-2/5 py-3 pr-4 font-medium text-muted-foreground">{r.key}</th>
            <td className="py-3 font-medium">
              <Text>{r.value}</Text>
              {r.note && <span className="label-mono ml-3 text-muted-foreground">{r.note}</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
