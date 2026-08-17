import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildSearchIndex } from './build-search-index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const booksDir = path.join(workspaceRoot, 'public', 'data', 'books');
const manifestPath = path.join(workspaceRoot, 'public', 'data', 'manifest.json');

export function syncManifest() {
  console.log('=== Syncing manifest.json from all books in public/data/books/ ===');
  
  if (!fs.existsSync(booksDir)) {
    console.error(`Books directory not found at: ${booksDir}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(booksDir, { withFileTypes: true });
  const books = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const summaryPath = path.join(booksDir, entry.name, 'summary.json');
      if (fs.existsSync(summaryPath)) {
        try {
          const summaryData = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
          
          const coverColor = summaryData.coverColor || 
            (summaryData.coverGradient ? summaryData.coverGradient.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/)?.[0] : null) || 
            '#8b0000';

          const bookEntry = {
            id: summaryData.id || entry.name,
            title: summaryData.title || entry.name,
            author: summaryData.author || 'Unknown',
            year: summaryData.year || 'Unknown',
            difficulty: summaryData.difficulty || 'Medium',
            readingTime: summaryData.readingTime || '1 hour',
            shortDescription: summaryData.shortDescription || summaryData.context || `A classic work by ${summaryData.author || 'Karl Marx'}.`,
            coverColor: coverColor,
            coverGradient: summaryData.coverGradient || 'linear-gradient(135deg, #8b0000 0%, #3a0000 100%)',
            subject: summaryData.subject || 'Theory & Philosophy',
            tags: summaryData.tags || ['Theory', 'Philosophy']
          };

          books.push(bookEntry);
          console.log(`✓ Added "${bookEntry.title}" (${bookEntry.id})`);
        } catch (err) {
          console.error(`❌ Error reading summary.json for folder ${entry.name}:`, err.message);
        }
      }
    }
  }

  const manifest = { books };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`Successfully updated manifest.json with ${books.length} book(s).\n`);

  // Build full-text search index across all books & chapters
  buildSearchIndex();
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('sync-manifest.js')) {
  syncManifest();
}
