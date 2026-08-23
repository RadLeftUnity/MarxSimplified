import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const distDir = path.join(workspaceRoot, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');
const manifestPath = path.join(distDir, 'data', 'manifest.json');
const historyDir = path.join(workspaceRoot, 'src', 'data', 'history', 'countries');
const glossaryDir = path.join(workspaceRoot, 'src', 'data', 'glossary');

function loadCountryData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/export const \w+: CountryData = (\{[\s\S]*\});?\s*$/);
  if (!match) return null;
  try {
    const jsObjStr = match[1];
    const evalFn = new Function(`return ${jsObjStr}`);
    return evalFn();
  } catch (e) {
    return null;
  }
}

function getSlug(term) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function prerenderPage(routePath, title, description, imagePath) {
  if (!fs.existsSync(indexHtmlPath)) return;
  const template = fs.readFileSync(indexHtmlPath, 'utf8');

  const fullTitle = `${title} | Marx Simplified`;
  const fullImage = imagePath.startsWith('http') ? imagePath : `https://marxsimplified.onrender.com${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;

  let html = template;
  html = html.replace(/<title>.*?<\/title>/, `<title>${fullTitle}</title>`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${fullTitle}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${fullImage}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${fullTitle}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${fullImage}" />`);

  const targetDir = path.join(distDir, routePath);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html);
}

function run() {
  if (!fs.existsSync(distDir)) {
    console.log('Skipping prerender: dist/ directory not found. Run vite build first.');
    return;
  }

  console.log('=== Pre-rendering Static OG HTML Meta Pages for Render Static Site ===');

  // 1. Pre-render Book Pages
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      for (const book of manifest.books || []) {
        const title = book.title;
        const desc = book.shortDescription || `Study ${book.title} by ${book.author} on Marx Simplified.`;
        const img = `/og/books/${book.id}.png`;

        prerenderPage(`books/${book.id}`, title, desc, img);
      }
      console.log(`✓ Pre-rendered static OG meta tags for ${manifest.books.length} books.`);
    } catch (e) {}
  }

  // 2. Pre-render History Country Pages
  if (fs.existsSync(historyDir)) {
    const files = fs.readdirSync(historyDir).filter(f => f.endsWith('.ts') && !f.startsWith('_'));
    let hCount = 0;
    for (const file of files) {
      const country = loadCountryData(path.join(historyDir, file));
      if (country) {
        const title = `${country.shortName || country.name} - Revolutionary History`;
        const desc = `Explore the historical overview, social metrics, and economic transformation of ${country.shortName || country.name}.`;
        const img = `/og/history/${country.id}.png`;

        prerenderPage(`history/${country.id}`, title, desc, img);
        hCount++;
      }
    }
    console.log(`✓ Pre-rendered static OG meta tags for ${hCount} history countries.`);
  }

  // 3. Pre-render Glossary Term Pages
  if (fs.existsSync(glossaryDir)) {
    const files = fs.readdirSync(glossaryDir).filter(
      (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts' && f !== 'index.tsx'
    );
    let gCount = 0;
    for (const file of files) {
      const filePath = path.join(glossaryDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const jsonMatch = content.match(/export const \w+: GlossaryTerm\[\] = (\[[\s\S]*\]);?/);
      if (jsonMatch) {
        try {
          const terms = JSON.parse(jsonMatch[1]);
          for (const t of terms) {
            const slug = getSlug(t.term);
            const title = `${t.term} - Glossary`;
            const desc = t.definition || `Learn about ${t.term} on Marx Simplified.`;
            const imgPath = path.join(distDir, 'og', 'glossary', `${slug}.png`);
            const img = fs.existsSync(imgPath) ? `/og/glossary/${slug}.png` : '/og/main.png';

            prerenderPage(`glossary/${slug}`, title, desc, img);
            gCount++;
          }
        } catch (e) {}
      }
    }
    console.log(`✓ Pre-rendered static OG meta tags for ${gCount} glossary terms.`);
  }

  console.log('✓ All static OG meta HTML pages generated in dist/!\n');
}

run();
