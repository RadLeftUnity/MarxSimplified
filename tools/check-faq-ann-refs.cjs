const fs = require('fs');

const content = fs.readFileSync('src/data/faq/faqData.ts', 'utf8');
const blocks = content.split(/\n\s*\{\s*\n\s*"id":/);

console.log('Checking FAQ items for annotation reference validity...');

let errorsFound = 0;

blocks.slice(1).forEach(b => {
  const idMatch = b.match(/^\s*"([^"]+)"/);
  const qId = idMatch ? idMatch[1] : 'unknown';

  const relAnnIdx = b.indexOf('"relatedAnnotations": [');
  if (relAnnIdx === -1) return;
  const endRelAnnIdx = b.indexOf('],', relAnnIdx);
  const relAnnStr = b.slice(relAnnIdx + '"relatedAnnotations": ['.length, endRelAnnIdx);

  // Find each annotation ref object
  const refMatches = [...relAnnStr.matchAll(/\{\s*"bookId":\s*"([^"]+)",\s*"chapterId":\s*"([^"]+)",\s*"annotationId":\s*"([^"]+)"/g)];

  refMatches.forEach(m => {
    const bookId = m[1];
    const chapterId = m[2];
    const annotationId = m[3];

    const sumPath = `public/data/books/${bookId}/summary.json`;
    if (!fs.existsSync(sumPath)) {
      console.log(`[ERROR in FAQ ${qId}]: book summary does not exist: ${sumPath}`);
      errorsFound++;
      return;
    }

    const sum = JSON.parse(fs.readFileSync(sumPath, 'utf8'));
    const ch = sum.chapters.find(c => c.id === chapterId);
    if (!ch) {
      console.log(`[ERROR in FAQ ${qId}]: chapterId "${chapterId}" not found in book "${bookId}". Available chapters:`, sum.chapters.map(c => c.id));
      errorsFound++;
      return;
    }

    // Check if annotation exists in chapter
    const annPath = `public/data/books/${bookId}/${ch.annotationFile}`;
    if (!fs.existsSync(annPath)) {
      console.log(`[ERROR in FAQ ${qId}]: annotation file does not exist: ${annPath}`);
      errorsFound++;
      return;
    }

    const anns = JSON.parse(fs.readFileSync(annPath, 'utf8'));
    const ann = anns.find((a, idx) => (a.id || `${ch.id}-ann-${idx + 1}`) === annotationId);
    if (!ann) {
      console.log(`[ERROR in FAQ ${qId}]: annotationId "${annotationId}" not found in ${annPath}`);
      errorsFound++;
    }
  });
});

console.log(`Check complete. Total errors found: ${errorsFound}`);
process.exit(errorsFound > 0 ? 1 : 0);
