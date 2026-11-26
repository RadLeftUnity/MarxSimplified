const fs = require('fs');
const sum = JSON.parse(fs.readFileSync('public/data/books/the-state-and-revolution/summary.json', 'utf8'));
sum.chapters.forEach(ch => {
  const p = `public/data/books/the-state-and-revolution/${ch.annotationFile}`;
  if (fs.existsSync(p)) {
    const anns = JSON.parse(fs.readFileSync(p, 'utf8'));
    const matches = anns.filter(a => a && a.id && a.id.includes('staterev-ch2-1'));
    if (matches.length > 0) {
      console.log(`Ch: "${ch.id}" has matches:`, matches.map(m => m.id));
    }
  }
});
