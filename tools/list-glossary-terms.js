import fs from 'fs';
import path from 'path';

const GLOSSARY_DIR = path.join(process.cwd(), 'src', 'data', 'glossary');
const files = fs.readdirSync(GLOSSARY_DIR).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

const terms = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(GLOSSARY_DIR, file), 'utf-8');
  const matches = content.matchAll(/"term":\s*"([^"]+)"[\s\S]*?"pattern":\s*"([^"]+)"/g);
  for (const m of matches) {
    terms.push({ file, term: m[1], pattern: m[2] });
  }
}

console.log(`Found ${terms.length} glossary terms.`);
terms.sort((a, b) => a.term.localeCompare(b.term));
console.log(terms.map(t => `${t.term} | pattern: [${t.pattern}] (${t.file})`).join('\n'));
