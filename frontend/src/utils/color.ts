/** Small RGB helpers for deriving brand shades from an accent hex (card fills, icon tiles). */

export type Rgb = [number, number, number];

/** The brand navy everything darkens toward. */
export const NIGHT: Rgb = [13, 16, 38];
export const WHITE: Rgb = [255, 255, 255];

export function hexToRgb(hex: string): Rgb {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export const mix = (a: Rgb, b: Rgb, t: number): Rgb => [
  Math.round(a[0] + (b[0] - a[0]) * t),
  Math.round(a[1] + (b[1] - a[1]) * t),
  Math.round(a[2] + (b[2] - a[2]) * t),
];

export const rgb = (c: Rgb) => `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
export const rgba = (c: Rgb, a: number) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;

export function luminance(c: Rgb) {
  const [r, g, b] = c.map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Contrast ratio of white against the colour. */
export const whiteContrast = (c: Rgb) => 1.05 / (luminance(c) + 0.05);

/** Hue in degrees (0–360). */
export function hue([r, g, b]: Rgb) {
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  if (d === 0) return 0;
  const h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return (h * 60 + 360) % 360;
}
