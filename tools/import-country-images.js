import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const flagsDir = path.join(workspaceRoot, 'public', 'images', 'flags');
const historyDir = path.join(workspaceRoot, 'public', 'images', 'history');

// Ensure directories exist
fs.mkdirSync(flagsDir, { recursive: true });
fs.mkdirSync(historyDir, { recursive: true });

const countriesToImport = [
  {
    id: 'barbados',
    flagFile: 'barbados.svg',
    flagUrl: 'https://flagcdn.com/bb.svg',
    coverFile: 'barbados.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
  },
  {
    id: 'trinidad-and-tobago',
    flagFile: 'trinidadAndTobago.svg',
    flagUrl: 'https://flagcdn.com/tt.svg',
    coverFile: 'trinidadAndTobago.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80',
  },
  {
    id: 'guyana',
    flagFile: 'guyana.svg',
    flagUrl: 'https://flagcdn.com/gy.svg',
    coverFile: 'guyana.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=80',
  },
  {
    id: 'suriname',
    flagFile: 'suriname.svg',
    flagUrl: 'https://flagcdn.com/sr.svg',
    coverFile: 'suriname.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80',
  },
  {
    id: 'belize',
    flagFile: 'belize.svg',
    flagUrl: 'https://flagcdn.com/bz.svg',
    coverFile: 'belize.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80',
  },
  {
    id: 'st-kitts-and-nevis',
    flagFile: 'stKittsAndNevis.svg',
    flagUrl: 'https://flagcdn.com/kn.svg',
    coverFile: 'stKittsAndNevis.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&q=80',
  },
  {
    id: 'st-lucia',
    flagFile: 'stLucia.svg',
    flagUrl: 'https://flagcdn.com/lc.svg',
    coverFile: 'stLucia.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80',
  },
  {
    id: 'st-vincent-and-the-grenadines',
    flagFile: 'stVincent.svg',
    flagUrl: 'https://flagcdn.com/vc.svg',
    coverFile: 'stVincent.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    id: 'antigua-and-barbuda',
    flagFile: 'antiguaAndBarbuda.svg',
    flagUrl: 'https://flagcdn.com/ag.svg',
    coverFile: 'antiguaAndBarbuda.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80',
  },
  {
    id: 'bahamas',
    flagFile: 'bahamas.svg',
    flagUrl: 'https://flagcdn.com/bs.svg',
    coverFile: 'bahamas.jpg',
    coverUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&q=80',
  },
];

async function downloadFile(url, targetPath) {
  console.log(`Downloading ${url} -> ${path.basename(targetPath)}`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: HTTP ${res.status}`);
  }
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(targetPath, Buffer.from(buffer));
}

async function importAll() {
  console.log('=== Importing Flags and Cover Images for New Caribbean Nations ===\n');
  for (const item of countriesToImport) {
    const flagPath = path.join(flagsDir, item.flagFile);
    const coverPath = path.join(historyDir, item.coverFile);

    try {
      await downloadFile(item.flagUrl, flagPath);
      await downloadFile(item.coverUrl, coverPath);
      console.log(`✓ Imported images for ${item.id}`);
    } catch (err) {
      console.error(`✗ Error importing for ${item.id}:`, err.message);
    }
  }
  console.log('\n✓ Image import complete!');
}

importAll();
