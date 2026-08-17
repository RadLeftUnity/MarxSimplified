const fs = require('fs');
const path = require('path');

const glossaryDir = path.join(__dirname, '../src/data/glossary');
const files = fs.readdirSync(glossaryDir).filter(f => f.endsWith('.ts') && f !== 'types.ts');

const terms = [];
const patternsMap = new Map();
const termNamesMap = new Map();

files.forEach(file => {
  const content = fs.readFileSync(path.join(glossaryDir, file), 'utf8');
  // Match objects with term and pattern
  const termMatches = [...content.matchAll(/"term":\s*"([^"]+)"/g)];
  const patternMatches = [...content.matchAll(/"pattern":\s*"([^"]+)"/g)];

  for (let i = 0; i < termMatches.length; i++) {
    const term = termMatches[i][1];
    const pattern = patternMatches[i] ? patternMatches[i][1] : '';

    if (termNamesMap.has(term.toLowerCase())) {
      console.log(`DUPLICATE TERM: "${term}" in ${file} and ${termNamesMap.get(term.toLowerCase())}`);
    } else {
      termNamesMap.set(term.toLowerCase(), file);
    }

    const variants = pattern.split('|').map(v => v.trim().toLowerCase()).filter(Boolean);
    variants.forEach(v => {
      if (patternsMap.has(v)) {
        console.log(`OVERLAPPING PATTERN VARIANT: "${v}" (in term "${term}" in ${file}) overlaps with term "${patternsMap.get(v).term}" in ${patternsMap.get(v).file}`);
      } else {
        patternsMap.set(v, { term, file });
      }
    });
  }
});

console.log('Duplicate check complete.');
