#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, basename, extname } from "node:path";

const SVG_DIR = "output/outlines";

function invertHexColor(hex) {
  // Remove # prefix
  const stripped = hex.replace("#", "");
  const num = parseInt(stripped, 16);
  // Invert: XOR with all 1s for the appropriate length
  const mask = stripped.length === 3 ? 0xfff : 0xffffff;
  const inverted = (num ^ mask).toString(16).padStart(stripped.length, "0");
  return `#${inverted}`;
}

function invertRgbaChannel(value) {
  return 255 - Number(value);
}

function invertSvgColors(content) {
  // Invert hex colors: #000, #000000, #fff, #ffffff, etc.
  let result = content.replace(/#([0-9a-fA-F]{3,6})\b/g, (match) =>
    invertHexColor(match)
  );

  // Invert rgb(r, g, b) colors
  result = result.replace(
    /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g,
    (_, r, g, b) =>
      `rgb(${invertRgbaChannel(r)},${invertRgbaChannel(g)},${invertRgbaChannel(b)})`
  );

  // Invert rgba(r, g, b, a) colors — keep alpha unchanged
  result = result.replace(
    /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([^)]+)\)/g,
    (_, r, g, b, a) =>
      `rgba(${invertRgbaChannel(r)},${invertRgbaChannel(g)},${invertRgbaChannel(b)},${a.trim()})`
  );

  return result;
}

async function main() {
  const files = await readdir(SVG_DIR);
  const svgFiles = files.filter((f) => extname(f) === ".svg");

  for (const file of svgFiles) {
    const filePath = join(SVG_DIR, file);
    const content = await readFile(filePath, "utf-8");
    const inverted = invertSvgColors(content);
    const inverseName = basename(file, ".svg") + "-inverse.svg";
    const inversePath = join(SVG_DIR, inverseName);
    await writeFile(inversePath, inverted, "utf-8");
    console.log(`${file} -> ${inverseName}`);
  }
}

main();
