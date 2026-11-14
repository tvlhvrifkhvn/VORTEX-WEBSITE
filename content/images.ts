import type { ImageSlot } from "./types";

const work = (n: number): ImageSlot => ({
  id: `work-0${n}`, src: `/images/work/work-0${n}.webp`, alt: `[[PLACEHOLDER: describe work sample 0${n}]]`, width: 1600, height: 1000, placeholder: true,
});

/* Image registry (SPEC §7.2). Upload a file at `src`, then flip `placeholder` to false. */
export const images = {
  "hero-object": { id: "hero-object", src: "/images/objects/hero-key.webp", alt: "A house key on a plain ring", width: 2000, height: 2000, placeholder: true },
  "file01-object": { id: "file01-object", src: "/images/objects/lockbox.webp", alt: "A realtor key lockbox", width: 1600, height: 2000, placeholder: true },
  "file02-object": { id: "file02-object", src: "/images/objects/shingles.webp", alt: "A small stack of asphalt roof shingles", width: 1600, height: 2000, placeholder: true },
  "calculator-object": { id: "calculator-object", src: "/images/objects/calculator.webp", alt: "A vintage desk calculator", width: 1600, height: 1600, placeholder: true },
  "process-object": { id: "process-object", src: "/images/objects/notebook.webp", alt: "A closed laptop with a notebook", width: 1600, height: 1200, placeholder: true },
  "resources-object": { id: "resources-object", src: "/images/objects/clipboard.webp", alt: "A clipboard with a blank checklist", width: 1600, height: 2000, placeholder: true },
  "notfound-object": { id: "notfound-object", src: "/images/objects/yard-sign.webp", alt: "A blank real-estate yard sign", width: 1600, height: 2000, placeholder: true },
  "founder-portrait": { id: "founder-portrait", src: "/images/founder/portrait.webp", alt: "Portrait of the founder", width: 1600, height: 2000, placeholder: true },
  "work-01": work(1),
  "work-02": work(2),
  "work-03": work(3),
  "work-04": work(4),
  "work-05": work(5),
  "work-06": work(6),
} satisfies Record<string, ImageSlot>;

export type ImageId = keyof typeof images;
