import { font, palettes, shells } from "./sprites";

export type Sprite = readonly string[];

export interface Layer {
  rows: Sprite;
  x?: number;
  y?: number;
}

export type PaletteId = (typeof palettes)[number]["id"];
export type ShellId = (typeof shells)[number]["id"];

/**
 * One SVG path for all lit pixels. Without a [gap] they are drawn as
 * horizontal runs to keep the path short; with one, each pixel is its own
 * square, shrunk by the gap.
 */
export const pixelPath = (layers: Layer[], gap = 0) => {
  let d = "";
  const size = 1 - gap;
  for (const { rows, x = 0, y = 0 } of layers) {
    rows.forEach((row, dy) => {
      if (gap > 0) {
        for (let dx = 0; dx < row.length; dx++) {
          if (row[dx] === "#") d += `M${x + dx + gap / 2} ${y + dy + gap / 2}h${size}v${size}h${-size}z`;
        }
        return;
      }
      let start = -1;
      for (let dx = 0; dx <= row.length; dx++) {
        const lit = row[dx] === "#";
        if (lit && start < 0) start = dx;
        if (!lit && start >= 0) {
          d += `M${x + start} ${y + dy}h${dx - start}v1h${start - dx}z`;
          start = -1;
        }
      }
    });
  }
  return d;
};

const glyph = (char: string): Sprite =>
  (font as Record<string, Sprite>)[char] ?? font[" "];

export const textWidth = (text: string) =>
  Math.max(
    0,
    [...text.toUpperCase()].reduce((sum, c) => sum + glyph(c)[0].length + 1, 0) - 1
  );

export const textLayers = (text: string, x: number, y: number): Layer[] => {
  let cursor = x;
  return [...text.toUpperCase()].map((c) => {
    const rows = glyph(c);
    const layer = { rows, x: cursor, y };
    cursor += rows[0].length + 1;
    return layer;
  });
};

const parseHex = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

const toHex = (rgb: number[]) =>
  "#" + rgb.map((c) => Math.round(c).toString(16).padStart(2, "0")).join("");

export const mix = (a: string, b: string, amount: number) => {
  const [from, to] = [parseHex(a), parseHex(b)];
  return toHex(from.map((c, i) => c + (to[i] - c) * amount));
};

const luminance = (hex: string) => {
  const [r, g, b] = parseHex(hex).map((c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const findPalette = (id: PaletteId) => palettes.find((p) => p.id === id) ?? palettes[0];

/** The same colors the app gives a shell (Shell.colors in the app). */
export const shellColors = (shellId: ShellId, paletteId: PaletteId) => {
  const palette = findPalette(paletteId);
  const shell = shells.find((s) => s.id === shellId) ?? shells[0];
  const body = shell.body ?? palette.ink;
  const window = mix(body, "#000000", 0.55);
  let button: string;
  let label: string;
  if (shell.body === null) {
    [button, label] = [palette.background, palette.ink];
  } else if (luminance(body) > 0.4) {
    [button, label] = ["#2B2F2A", body];
  } else {
    [button, label] = [mix(body, "#FFFFFF", 0.85), window];
  }
  return { body, window, button, label, dot: mix(body, "#000000", 0.15) };
};
