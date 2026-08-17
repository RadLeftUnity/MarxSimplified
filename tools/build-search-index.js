import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const booksDir = path.join(workspaceRoot, 'public', 'data', 'books');
const searchIndexPath = path.join(workspaceRoot, 'public', 'data', 'search-index.json');

export function buildSearchIndex() {
  console.log('=== Building Search Index from public/data/books/ ===');

  if (!fs.existsSync(booksDir)) {
    console.error(`Books directory not found at: ${booksDir}`);
    process.exit(1);
  }

  const bookDirs = fs.readdirSync(booksDir, { withFileTypes: true });
  const indexChapters = [];

  for (const bDir of bookDirs) {
    if (!bDir.isDirectory()) continue;
    const bookFolderPath = path.join(booksDir, bDir.name);
    const summaryPath = path.join(bookFolderPath, 'summary.json');

    if (!fs.existsSync(summaryPath)) continue;

    try {
      const summaryData = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
      const bookId = summaryData.id || bDir.name;
      const bookTitle = summaryData.title || bDir.name;
      const author = summaryData.author || 'Unknown';
      const subject = summaryData.subject || 'Theory';
      const tags = summaryData.tags || [];

      for (const ch of summaryData.chapters || []) {
        const chapterId = ch.id;
        const chapterTitle = ch.title;

        let summaryText = '';
        if (ch.summaryFile) {
          const sumFilePath = path.join(bookFolderPath, ch.summaryFile);
          if (fs.existsSync(sumFilePath)) {
            summaryText = fs.readFileSync(sumFilePath, 'utf8').trim();
          }
        }

        let annotations = [];
        if (ch.annotationFile) {
          const annFilePath = path.join(bookFolderPath, ch.annotationFile);
          if (fs.existsSync(annFilePath)) {
            try {
              annotations = JSON.parse(fs.readFileSync(annFilePath, 'utf8'));
            } catch {
              annotations = [];
            }
          }
        }

        let paragraphs = [];
        if (ch.textFile) {
          const textFilePath = path.join(bookFolderPath, ch.textFile);
          if (fs.existsSync(textFilePath)) {
            const rawText = fs.readFileSync(textFilePath, 'utf8');
            paragraphs = rawText
              .split(/\n\s*\n/)
              .map((p) => p.replace(/\s+/g, ' ').trim())
              .filter((p) => p.length > 10);
          }
        }

        indexChapters.push({
          bookId,
          bookTitle,
          author,
          subject,
          tags,
          chapterId,
          chapterTitle,
          summaryText,
          annotations,
          paragraphs,
        });
      }
    } catch (err) {
      console.error(`❌ Error indexing book ${bDir.name}:`, err.message);
    }
  }

  const output = {
    updatedAt: new Date().toISOString(),
    totalChapters: indexChapters.length,
    chapters: indexChapters,
  };

  fs.writeFileSync(searchIndexPath, JSON.stringify(output), 'utf8');
  console.log(`✓ Built search index with ${indexChapters.length} chapter(s) across catalog.\n`);
}

// Run directly if executed as standalone script
if (process.argv[1] && process.argv[1].endsWith('build-search-index.js')) {
  buildSearchIndex();
}
