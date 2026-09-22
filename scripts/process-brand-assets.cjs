const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const brand = path.join("public", "brand");
const icons = path.join("public", "icons");
fs.mkdirSync(icons, { recursive: true });

async function knockBg(input, output, threshold = 18) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const visited = new Uint8Array(w * h);
  const queue = [];

  function isBg(i) {
    const o = i * 4;
    return data[o] <= threshold && data[o + 1] <= threshold && data[o + 2] <= threshold;
  }

  function enqueue(x, y) {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const i = y * w + x;
    if (visited[i] || !isBg(i)) return;
    visited[i] = 1;
    queue.push(i);
  }

  [
    [0, 0],
    [w - 1, 0],
    [0, h - 1],
    [w - 1, h - 1],
    [(w / 2) | 0, 0],
    [(w / 2) | 0, h - 1],
    [0, (h / 2) | 0],
    [w - 1, (h / 2) | 0],
  ].forEach(([x, y]) => enqueue(x, y));

  while (queue.length) {
    const i = queue.pop();
    data[i * 4 + 3] = 0;
    const x = i % w;
    const y = (i / w) | 0;
    enqueue(x + 1, y);
    enqueue(x - 1, y);
    enqueue(x, y + 1);
    enqueue(x, y - 1);
  }

  const buf = await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 0 })
    .png()
    .toBuffer();
  await sharp(buf).png().toFile(output);
  const m = await sharp(output).metadata();
  console.log("ok", output, `${m.width}x${m.height}`);
}

async function main() {
  await knockBg(path.join(brand, "monogram-src.png"), path.join(brand, "monogram.png"));
  await knockBg(path.join(brand, "wordmark-src.png"), path.join(brand, "wordmark.png"));
  await knockBg(path.join(brand, "wordmark-mono-src.png"), path.join(brand, "wordmark-mono.png"));

  const mono = path.join(brand, "monogram.png");
  for (const [size, out] of [
    [32, "icon-32.png"],
    [48, "icon-48.png"],
    [180, "apple-touch-icon.png"],
    [512, "icon-512.png"],
  ]) {
    const pad = Math.round(size * 0.12);
    const mark = await sharp(mono)
      .resize(size - pad * 2, size - pad * 2, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 38, g: 30, b: 24, alpha: 1 }, // #261E18
      },
    })
      .composite([{ input: mark, gravity: "centre" }])
      .png()
      .toFile(path.join(icons, out));
    console.log("icon", out);
  }

  await sharp(path.join(icons, "icon-512.png")).resize(32, 32).png().toFile(path.join("app", "icon.png"));
  await sharp(path.join(icons, "apple-touch-icon.png")).toFile(path.join("app", "apple-icon.png"));
  await sharp(path.join(icons, "icon-32.png")).toFile(path.join("public", "favicon.ico"));
  await sharp(path.join(icons, "icon-48.png")).toFile(path.join("public", "favicon-48.png"));
  await sharp(path.join(icons, "apple-touch-icon.png")).toFile(path.join("public", "apple-touch-icon.png"));
  await sharp(path.join(icons, "icon-512.png")).toFile(path.join("public", "icon-512.png"));

  const word = await sharp(path.join(brand, "wordmark.png"))
    .resize({ width: 720, withoutEnlargement: true })
    .png()
    .toBuffer();
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: { r: 38, g: 30, b: 24 },
    },
  })
    .composite([{ input: word, gravity: "centre" }])
    .jpeg({ quality: 92 })
    .toFile(path.join("public", "og-default.jpg"));
  console.log("og done");

  for (const f of ["monogram-src.png", "wordmark-src.png", "wordmark-mono-src.png"]) {
    try {
      fs.unlinkSync(path.join(brand, f));
    } catch {}
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
