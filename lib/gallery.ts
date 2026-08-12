import fs from "fs";
import path from "path";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp"]);

function listImagesInDir(relativeDir: string): string[] {
  const absoluteDir = path.join(process.cwd(), "public", relativeDir);
  if (!fs.existsSync(absoluteDir) || !fs.statSync(absoluteDir).isDirectory()) {
    return [];
  }

  return fs
    .readdirSync(absoluteDir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      if (!IMAGE_EXTS.has(ext)) return false;
      const full = path.join(absoluteDir, file);
      try {
        const stat = fs.statSync(full);
        return stat.isFile() && stat.size > 0;
      } catch {
        return false;
      }
    })
    .sort((a, b) => b.localeCompare(a, undefined, { sensitivity: "base" }))
    .map((file) => `/${relativeDir}/${file}`);
}

/** Collect gallery images from carousel + gallery folders (deduped by basename). */
export function getGalleryImages(): string[] {
  const seen = new Set<string>();
  const urls: string[] = [];

  for (const dir of ["assets/img/carousel", "assets/img/gallery"]) {
    for (const url of listImagesInDir(dir)) {
      const base = decodeURIComponent(url.split("/").pop() || "").toLowerCase();
      if (seen.has(base)) continue;
      seen.add(base);
      urls.push(url);
    }
  }

  return urls;
}
