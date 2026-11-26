const fs = require('fs');
const content = fs.readFileSync('src/pages/FAQ.tsx', 'utf8');
const lines = content.split('\n');
console.log('=== Lines 95-135 ===');
console.log(lines.slice(95, 135).join('\n'));
console.log('\n=== Lines 300-350 ===');
console.log(lines.slice(300, 350).join('\n'));
console.log('\n=== Lines 370-420 ===');
console.log(lines.slice(370, 420).join('\n'));
