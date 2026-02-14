const fs = require("fs");
const path = require("path");
const { imageSize } = require("image-size");

const dir = path.join(process.cwd(), "public", "assets", "photos");
const files = fs
  .readdirSync(dir)
  .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
const out = {};
files.forEach((f) => {
  const full = path.join(dir, f);
  const buffer = fs.readFileSync(full);
  const dims = imageSize(buffer);
  if (dims?.width && dims?.height) out[f] = { width: dims.width, height: dims.height };
});
fs.mkdirSync(path.join(process.cwd(), "lib"), { recursive: true });
fs.writeFileSync(
  path.join(process.cwd(), "lib", "image-dimensions.json"),
  JSON.stringify(out, null, 2)
);
console.log("Wrote dimensions for", Object.keys(out).length, "images");
