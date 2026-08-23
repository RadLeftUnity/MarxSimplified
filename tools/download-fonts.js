import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, 'fonts');

const fontTargets = [
  {
    name: 'Lora-Bold.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/lora@latest/latin-700-normal.ttf'
  },
  {
    name: 'Lora-Italic.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/lora@latest/latin-400-italic.ttf'
  },
  {
    name: 'Lora-Regular.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/lora@latest/latin-400-normal.ttf'
  },
  {
    name: 'Outfit-Bold.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-700-normal.ttf'
  },
  {
    name: 'Outfit-Medium.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-500-normal.ttf'
  },
  {
    name: 'Outfit-Regular.ttf',
    url: 'https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-400-normal.ttf'
  }
];

async function run() {
  fs.mkdirSync(fontsDir, { recursive: true });
  for (const item of fontTargets) {
    const dest = path.join(fontsDir, item.name);
    console.log(`Downloading ${item.name} from Fontsource CDN...`);
    const res = await fetch(item.url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      console.log(`✓ Saved ${item.name} (${buf.length} bytes)`);
    } else {
      console.error(`❌ Failed to download ${item.name}: ${res.statusText}`);
    }
  }
}

run().catch(console.error);
