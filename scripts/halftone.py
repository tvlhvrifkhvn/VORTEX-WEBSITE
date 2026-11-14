# Usage: python3 scripts/halftone.py <src> <out.webp> <left> <top> <right> <bottom> <width> <height> <cell_px>
# Needs Pillow (dev-only, not a site dependency). Crop box is in source pixels.
"""Crop to slot ratio, even out lighting, render a 45° B/W halftone (ink dots on paper-2)."""
import math, sys
from PIL import Image, ImageOps, ImageFilter, ImageDraw, ImageEnhance

INK, PAPER = (14, 14, 14), (242, 242, 240)

def prep(src, box, size):
    im = Image.open(src).convert("RGB").crop(box).resize(size, Image.LANCZOS)
    g = ImageOps.grayscale(im)
    g = ImageOps.autocontrast(g, cutoff=1)
    g = Image.blend(g, ImageOps.equalize(g), 0.25)          # lift flat lighting
    g = ImageEnhance.Contrast(g).enhance(1.15)
    g = g.filter(ImageFilter.UnsharpMask(radius=3, percent=120, threshold=2))
    # gamma: halftone reads darker than the photo, so open the midtones
    # lift shadows (black -> 28%) and open midtones so the dot field stays light and airy
    lut = [round(255 * (0.28 + 0.72 * (i / 255) ** 0.62)) for i in range(256)]
    return g.point(lut)

def halftone(g, cell, ss=3, angle=45):
    W, H = g.size
    blur = g.filter(ImageFilter.BoxBlur(cell / 2))
    px = blur.load()
    big = Image.new("RGB", (W * ss, H * ss), PAPER)
    d = ImageDraw.Draw(big)
    a = math.radians(angle); ca, sa = math.cos(a), math.sin(a)
    n = int(math.hypot(W, H) / cell) + 2
    cx, cy = W / 2, H / 2
    for i in range(-n, n):
        for j in range(-n, n):
            x = cx + (i * ca - j * sa) * cell
            y = cy + (i * sa + j * ca) * cell
            if not (-cell <= x < W + cell and -cell <= y < H + cell):
                continue
            v = px[min(max(int(x), 0), W - 1), min(max(int(y), 0), H - 1)]
            dark = 1 - v / 255
            if dark < 0.04:
                continue
            r = cell * 0.71 * math.sqrt(dark) * ss          # 0.71 → dots just touch at full black
            X, Y = x * ss, y * ss
            d.ellipse((X - r, Y - r, X + r, Y + r), fill=INK)
    return big.resize((W, H), Image.LANCZOS)

if __name__ == "__main__":
    src, out, l, t, r, b, W, H, cell = sys.argv[1:10]
    g = prep(src, (int(l), int(t), int(r), int(b)), (int(W), int(H)))
    img = halftone(g, float(cell)).convert("L").quantize(colors=8, dither=Image.Dither.NONE)
    img.save(out, "WEBP", lossless=True, method=6)
