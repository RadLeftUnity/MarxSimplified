const fs = require('fs');
const content = fs.readFileSync('src/components/FormattedText.tsx', 'utf8');
console.log(content.slice(0, 1500));
