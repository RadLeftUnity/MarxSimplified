const fs = require('fs');

function findAnnotationAcrossBook(bookId, searchId) {
  const sumPath = `public/data/books/${bookId}/summary.json`;
  if (!fs.existsSync(sumPath)) return null;
  const sum = JSON.parse(fs.readFileSync(sumPath, 'utf8'));
  for (const ch of sum.chapters) {
    const annPath = `public/data/books/${bookId}/${ch.annotationFile}`;
    if (fs.existsSync(annPath)) {
      const anns = JSON.parse(fs.readFileSync(annPath, 'utf8'));
      const found = anns.find(a => a && a.id && (a.id === searchId || a.id.includes(searchId)));
      if (found) {
        return { chapterId: ch.id, chapterTitle: ch.title, annotation: found };
      }
    }
  }
  return null;
}

function listAnnotationsInBook(bookId) {
  const sumPath = `public/data/books/${bookId}/summary.json`;
  if (!fs.existsSync(sumPath)) return [];
  const sum = JSON.parse(fs.readFileSync(sumPath, 'utf8'));
  const results = [];
  for (const ch of sum.chapters) {
    const annPath = `public/data/books/${bookId}/${ch.annotationFile}`;
    if (fs.existsSync(annPath)) {
      const anns = JSON.parse(fs.readFileSync(annPath, 'utf8'));
      for (const a of anns) {
        if (a) {
          results.push({ chapterId: ch.id, chapterTitle: ch.title, id: a.id || '(no-id)', quote: a.targetText ? a.targetText.slice(0, 50) : '' });
        }
      }
    }
  }
  return results;
}

console.log('1. gotha-programme:', findAnnotationAcrossBook('gotha-programme', 'gotha-prog-ch1-ann-3'));
console.log('2. on-the-correct-handling:', listAnnotationsInBook('on-the-correct-handling-of-contradictions-among-the-people'));
console.log('3. wage-labour:', listAnnotationsInBook('wage-labour').filter(a => a.id.includes('wages') || a.id.includes('profit') || a.chapterId.includes('wage')));
console.log('4. the-tax-in-kind:', listAnnotationsInBook('the-tax-in-kind'));
console.log('5. principles-of-communism (ch15):', findAnnotationAcrossBook('principles-of-communism', 'principles-of-communism-chapter15-ann-1'));
console.log('6. left-wing-communism (parliaments):', listAnnotationsInBook('left-wing-communism').filter(a => a.chapterId.includes('parliament')));
console.log('7. self-determination:', listAnnotationsInBook('the-revolutionary-proletariat-and-the-right-of-nations-to-self-determination'));
console.log('8. imperialism:', findAnnotationAcrossBook('imperialism', 'imperialism-chapter10-1') || listAnnotationsInBook('imperialism').slice(-5));
console.log('9. the-state-and-revolution:', findAnnotationAcrossBook('the-state-and-revolution', 'staterev-ch2-1'));
console.log('10. social-basis-of-the-woman-question:', listAnnotationsInBook('social-basis-of-the-woman-question'));
console.log('11. capitalism-and-female-labour:', listAnnotationsInBook('capitalism-and-female-labour'));
console.log('12. das-kapital-vol-1:', listAnnotationsInBook('das-kapital-vol-1').filter(a => a.id.includes('10')));
console.log('13. foundations-of-leninism:', listAnnotationsInBook('foundations-of-leninism').filter(a => a.chapterId.includes('peasant')));
console.log('14. the-courage-to-criticize-imperialism:', listAnnotationsInBook('the-courage-to-criticize-imperialism'));
console.log('15. summary-of-dialectics:', listAnnotationsInBook('summary-of-dialectics'));
