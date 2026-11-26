const fs = require('fs');
const content = fs.readFileSync('src/pages/FAQ.tsx', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);

lines.forEach((l, idx) => {
  if (l.includes('detailedAnswer') || l.includes('shortAnswer') || l.includes('citations') || l.includes('relatedAnnotations') || l.includes('[1]')) {
    console.log(`${idx + 1}: ${l.trim().slice(0, 100)}`);
  }
});
