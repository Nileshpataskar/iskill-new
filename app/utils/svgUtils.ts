import { readFileSync } from "fs";
import { join } from "path";

export function getSVGContent(path: string): string | null {
  try {
    // Only process SVG files
    if (!path.toLowerCase().endsWith(".svg")) {
      return null;
    }
    const filePath = join(process.cwd(), "public", path);
    const content = readFileSync(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading SVG file ${path}:`, error);
    return null;
  }
}

