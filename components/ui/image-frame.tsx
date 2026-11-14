import { cn } from "@/lib/utils";
import { images, type ImageId } from "@/content/images";
import { CornerMarks } from "./corner-marks";

interface ImageFrameProps {
  slot: ImageId;
  /** Signal block crossing the object (§5.9). */
  block?: "left" | "right" | "none";
  /** Screenshots: grayscale, color on hover (fine pointers). */
  screenshot?: boolean;
  priority?: boolean;
  marks?: boolean;
  className?: string;
  sizes?: string;
  /** Crop to 1:1 (object-cover) regardless of the source ratio. */
  square?: boolean;
  /** Extra classes for the corner marks, e.g. a theme color. */
  marksClassName?: string;
}

/** Grayscale object + multiply signal block + corner marks. Placeholder slots render a hatched box
    with the same aspect ratio, so swapping in the real image changes nothing else (§7.3). */
export function ImageFrame({ slot, block = "none", screenshot, priority, marks = true, className, sizes, square, marksClassName }: ImageFrameProps) {
  const img = images[slot];
  return (
    <figure className={cn("relative", className)}>
      {marks && <CornerMarks className={marksClassName} />}
      <div className="relative overflow-hidden bg-card" style={{ aspectRatio: square ? "1 / 1" : `${img.width} / ${img.height}` }}>
        {img.placeholder ? (
          <div role="img" aria-label={img.alt} data-placeholder="" className="hatch flex size-full items-end p-3">
            <span className="label-mono text-muted-foreground">
              IMAGE SLOT · {img.id} · {img.width}×{img.height}
            </span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- static export, images unoptimized
          <img
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes={sizes}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            decoding="async"
            className={cn(
              "size-full object-cover grayscale contrast-[1.05]",
              screenshot && "transition-[filter] duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:grayscale-0",
            )}
          />
        )}
        {block !== "none" && (
          <div
            aria-hidden="true"
            className={cn("absolute top-[48%] h-[22%] w-[45%] bg-signal mix-blend-multiply", block === "left" ? "left-0" : "right-0")}
          />
        )}
      </div>
    </figure>
  );
}
