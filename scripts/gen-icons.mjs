import sharp from "sharp";
import { writeFileSync } from "node:fs";

const SRC = "public/brand/kirpik-glyph.svg";
const PAPER = { r: 250, g: 249, b: 246, alpha: 1 }; // --paper #faf9f6
const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };

async function make(size, padFrac, bg, out) {
  const inner = Math.round(size * (1 - padFrac * 2));
  const glyph = await sharp(SRC, { density: 512 })
    .resize(inner, inner, { fit: "contain", background: CLEAR })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: glyph, gravity: "center" }])
    .png()
    .toFile(out);
  console.log("wrote", out);
}

// Tab favicons: transparent, light padding.
await make(16, 0.06, CLEAR, "public/favicon-16.png");
await make(32, 0.06, CLEAR, "public/favicon-32.png");
await make(48, 0.06, CLEAR, "public/favicon-48.png");
// Apple touch + Android: solid paper background, safe-zone padding.
await make(180, 0.16, PAPER, "public/apple-touch-icon.png");
await make(192, 0.16, PAPER, "public/icon-192.png");
await make(512, 0.16, PAPER, "public/icon-512.png");

// Web app manifest, kept in lockstep with the icons above.
const manifest = {
  name: "Kirpik",
  short_name: "Kirpik",
  description: "Invisible text watermarking for Shopify.",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
  theme_color: "#faf9f6",
  background_color: "#faf9f6",
  display: "browser",
  start_url: "/",
};
writeFileSync("public/site.webmanifest", JSON.stringify(manifest, null, 2) + "\n");
console.log("wrote public/site.webmanifest");

console.log("icons done");
