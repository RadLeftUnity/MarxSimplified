import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const GLOSSARY_DIR = path.resolve(__dirname, '../src/data/glossary');

const getTermSlug = (term) => {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

function runGlossaryVerification() {
  console.log('=== Running Glossary Verification Suite ===\n');

  const files = fs.readdirSync(GLOSSARY_DIR).filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts' && f !== 'index.tsx'
  );

  const allTerms = [];
  const errors = [];
  const warnings = [];

  for (const file of files) {
    const filePath = path.join(GLOSSARY_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Parse JSON-like array objects inside export const ... = [ ... ];
    const jsonMatch = content.match(/export const \w+: GlossaryTerm\[\] = (\[[\s\S]*\]);?/);
    if (!jsonMatch) {
      errors.push(`Could not parse glossary array in file: ${file}`);
      continue;
    }

    try {
      const terms = JSON.parse(jsonMatch[1]);
      for (const termObj of terms) {
        termObj._sourceFile = file;
        allTerms.push(termObj);
      }
    } catch (err) {
      errors.push(`JSON syntax error in file ${file}: ${err.message}`);
    }
  }

  console.log(`Loaded ${allTerms.length} terms across ${files.length} glossary files.`);

  // 1. Check for Duplicate Exact Terms
  const termMap = new Map();
  // 2. Check for Duplicate Slugs
  const slugMap = new Map();

  for (const t of allTerms) {
    // Check missing fields
    const required = ['term', 'pattern', 'definition', 'misconception', 'dayToDayExample'];
    for (const req of required) {
      if (!t[req] || typeof t[req] !== 'string' || !t[req].trim()) {
        errors.push(`Missing or empty required field "${req}" in term "${t.term || 'UNKNOWN'}" (${t._sourceFile})`);
      }
    }

    // Check em-dashes (AGENTS.md rule)
    const emDashRegex = /—|--/;
    for (const prop of required) {
      if (t[prop] && emDashRegex.test(t[prop])) {
        errors.push(`EM-DASH VIOLATION in term "${t.term}" (${t._sourceFile}) field "${prop}": Contains em-dash ("—" or "--")`);
      }
    }

    // Check duplicate term name
    const lowerTerm = t.term.toLowerCase().trim();
    if (termMap.has(lowerTerm)) {
      const prev = termMap.get(lowerTerm);
      errors.push(`DUPLICATE TERM: "${t.term}" in ${t._sourceFile} conflicts with term in ${prev._sourceFile}`);
    } else {
      termMap.set(lowerTerm, t);
    }

    // Check duplicate slug
    const slug = getTermSlug(t.term);
    if (slugMap.has(slug)) {
      const prev = slugMap.get(slug);
      if (prev.term.toLowerCase() !== t.term.toLowerCase()) {
        errors.push(`SLUG COLLISION: Term "${t.term}" (${t._sourceFile}) shares slug "${slug}" with term "${prev.term}" (${prev._sourceFile})`);
      }
    } else {
      slugMap.set(slug, t);
    }
  }

  // 3. Check for Overlapping Pattern Variants
  const variantMap = new Map();
  for (const t of allTerms) {
    if (!t.pattern) continue;
    const variants = t.pattern.split('|').map((v) => v.trim().toLowerCase());
    for (const v of variants) {
      if (!v) continue;
      if (variantMap.has(v)) {
        const prev = variantMap.get(v);
        if (prev.term !== t.term) {
          warnings.push(`OVERLAPPING PATTERN VARIANT: "${v}" (in "${t.term}" [${t._sourceFile}]) overlaps with "${prev.term}" [${prev._sourceFile}]`);
        }
      } else {
        variantMap.set(v, t);
      }
    }
  }

  // Output Results
  if (warnings.length > 0) {
    console.log('\n--- WARNINGS ---');
    warnings.forEach((w) => console.warn(`⚠️  ${w}`));
  }

  if (errors.length > 0) {
    console.error('\n--- ERRORS ---');
    errors.forEach((e) => console.error(`❌ ${e}`));
    console.error(`\nGlossary verification FAILED with ${errors.length} error(s).`);
    process.exit(1);
  } else {
    console.log('\n✅ ALL GLOSSARY VERIFICATION TESTS PASSED CLEANLY!');
    process.exit(0);
  }
}

runGlossaryVerification();
