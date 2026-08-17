import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const booksDir = path.join(__dirname, '..', 'public', 'data', 'books');

function decodeEntities(text) {
  if (!text) return text;
  return text
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8216;|&#8217;|&lsquo;|&rsquo;/g, "'")
    .replace(/&#8211;|&#8212;|&ndash;|&mdash;/g, '; ')
    .replace(/&#163;/g, '£')
    .replace(/&#160;|&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => {
      const num = parseInt(code, 10);
      if (num === 8211 || num === 8212) return '; ';
      if (num === 8220 || num === 8221) return '"';
      if (num === 8216 || num === 8217) return "'";
      return String.fromCharCode(num);
    })
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    })
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/—|--/g, '; ');
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      if (entry.name.endsWith('.txt') || entry.name.endsWith('.json')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const cleaned = decodeEntities(content);
        if (content !== cleaned) {
          fs.writeFileSync(fullPath, cleaned, 'utf8');
          console.log(`Cleaned HTML entities in: ${path.relative(booksDir, fullPath)}`);
        }
      }
    }
  }
}

console.log('=== Cleaning HTML entities across all books ===');
processDirectory(booksDir);
console.log('=== Finished cleaning HTML entities ===');
