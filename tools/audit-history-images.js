import fs from 'fs';
import path from 'path';

const COUNTRIES_DIR = path.resolve(process.cwd(), 'src/data/history/countries');
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

const files = fs.readdirSync(COUNTRIES_DIR).filter((f) => f.endsWith('.ts') && !f.startsWith('_'));

const missingFlags = [];
const missingCovers = [];

for (const file of files) {
  const filePath = path.join(COUNTRIES_DIR, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract flagUrl
  const flagMatch = content.match(/flagUrl:\s*['"]([^'"]+)['"]/);
  if (flagMatch) {
    const flagRel = flagMatch[1];
    const flagAbs = path.join(PUBLIC_DIR, flagRel.replace(/^\//, ''));
    if (!fs.existsSync(flagAbs)) {
      missingFlags.push({ file, flagUrl: flagRel });
    }
  }

  // Extract coverImage
  const coverMatch = content.match(/coverImage:\s*['"]([^'"]+)['"]/);
  if (coverMatch) {
    const coverRel = coverMatch[1];
    const coverAbs = path.join(PUBLIC_DIR, coverRel.replace(/^\//, ''));
    if (!fs.existsSync(coverAbs)) {
      missingCovers.push({ file, coverImage: coverRel });
    }
  }
}

console.log('=== MISSING FLAGS ===');
console.log(missingFlags);

console.log('\n=== MISSING COVERS ===');
console.log(missingCovers);
