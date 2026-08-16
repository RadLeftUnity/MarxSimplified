import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup file paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const manifestPath = path.join(workspaceRoot, 'public', 'data', 'manifest.json');

console.log('=== Running Annotations Match Verification ===\n');

try {
  // Read manifest
  const manifestRaw = fs.readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestRaw);
  
  let totalErrors = 0;
  let totalAnnotationsVerified = 0;

  for (const bookInfo of manifest.books) {
    const bookDir = path.join(workspaceRoot, 'public', 'data', 'books', bookInfo.id);
    const summaryPath = path.join(bookDir, 'summary.json');
    
    if (!fs.existsSync(summaryPath)) {
      console.warn(`⚠️ Warning: summary.json not found for book: ${bookInfo.id}`);
      continue;
    }
    
    const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
    console.log(`Checking book: "${summary.title}" (${bookInfo.id})`);
    
    for (const chapter of summary.chapters) {
      if (!chapter.annotationFile) {
        continue;
      }
      
      const textPath = path.join(bookDir, chapter.textFile);
      const annPath = path.join(bookDir, chapter.annotationFile);
      
      if (!fs.existsSync(textPath)) {
        console.error(`  ❌ Chapter text file not found: ${chapter.textFile}`);
        totalErrors++;
        continue;
      }
      if (!fs.existsSync(annPath)) {
        console.error(`  ❌ Chapter annotations file not found: ${chapter.annotationFile}`);
        totalErrors++;
        continue;
      }
      
      const rawText = fs.readFileSync(textPath, 'utf8');
      const annotations = JSON.parse(fs.readFileSync(annPath, 'utf8'));
      
      // Clean whitespace for robust comparison
      const cleanRawText = rawText.replace(/\s+/g, ' ').trim();
      
      console.log(`  Chapter: "${chapter.title}" - verifying ${annotations.length} annotations`);
      
      for (const ann of annotations) {
        totalAnnotationsVerified++;
        const targetClean = ann.targetText.replace(/\s+/g, ' ').trim();
        
        if (!cleanRawText.includes(targetClean)) {
          console.error(`    ❌ MISMATCH found in annotation "${ann.id}":`);
          console.error(`       Target Text:  "${ann.targetText}"`);
          console.error(`       Clean Target: "${targetClean}"`);
          console.error('       ---');
          totalErrors++;
        }
      }
    }
  }
  
  console.log(`\n=== Verification Summary ===`);
  console.log(`Total annotations verified: ${totalAnnotationsVerified}`);
  
  if (totalErrors > 0) {
    console.error(`\n❌ Failed: Found ${totalErrors} mismatches between annotations and chapter texts.`);
    process.exit(1);
  } else {
    console.log(`\n✅ Success: All annotations match their corresponding chapter texts perfectly.`);
    process.exit(0);
  }
} catch (err) {
  console.error('❌ Error executing verification script:', err);
  process.exit(1);
}
