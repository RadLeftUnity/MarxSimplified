import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { syncManifest } from './sync-manifest.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const booksDir = path.join(workspaceRoot, 'public', 'data', 'books');

export function decodeAllHtmlEntities(str) {
  if (typeof str !== 'string') return str;

  // 1. Decodes numeric decimal entities (e.g. &#8220; -> ")
  str = str.replace(/&#(\d+);/g, (_, dec) => {
    const code = parseInt(dec, 10);
    if (code === 8220 || code === 8221) return '"';
    if (code === 8216 || code === 8217) return "'";
    if (code === 8212 || code === 8211) return ': ';
    try {
      return String.fromCodePoint(code);
    } catch (e) {
      return String.fromCharCode(code);
    }
  });

  // 2. Decodes numeric hex entities (e.g. &#x201c; -> ")
  str = str.replace(/&#x([0-9a-f]+);/gi, (_, hex) => {
    const code = parseInt(hex, 16);
    if (code === 0x201c || code === 0x201d) return '"';
    if (code === 0x2018 || code === 0x2019) return "'";
    if (code === 0x2014 || code === 0x2013) return ': ';
    try {
      return String.fromCodePoint(code);
    } catch (e) {
      return String.fromCharCode(code);
    }
  });

  // 3. Comprehensive Named Entities Map
  const entityMap = {
    '&quot;': '"',
    '&apos;': "'",
    '&#39;': "'",
    '&lsquo;': "'",
    '&rsquo;': "'",
    '&ldquo;': '"',
    '&rdquo;': '"',
    '&mdash;': ': ',
    '&ndash;': ': ',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&nbsp;': ' ',
    '&thinsp;': ' ',
    '&ensp;': ' ',
    '&emsp;': ' ',
    '&hellip;': '...',
    '&bull;': '•',
    '&middot;': '·',
    '&sect;': '§',
    '&para;': '¶',
    '&copy;': '©',
    '&reg;': '®',
    '&trade;': '™',
    // Umlauts and Accented Characters
    '&uuml;': 'ü', '&Uuml;': 'Ü',
    '&auml;': 'ä', '&Auml;': 'Ä',
    '&ouml;': 'ö', '&Ouml;': 'Ö',
    '&eacute;': 'é', '&Eacute;': 'É',
    '&egrave;': 'è', '&Egrave;': 'È',
    '&agrave;': 'à', '&Agrave;': 'À',
    '&acirc;': 'â', '&Acirc;': 'Â',
    '&ecirc;': 'ê', '&Ecirc;': 'Ê',
    '&icirc;': 'î', '&Icirc;': 'Î',
    '&ocirc;': 'ô', '&Ocirc;': 'Ô',
    '&ucirc;': 'û', '&Ucirc;': 'Û',
    '&ccedil;': 'ç', '&Ccedil;': 'Ç',
    '&szlig;': 'ß',
    '&aring;': 'å', '&Aring;': 'Å',
    '&euml;': 'ë', '&Euml;': 'Ë',
    '&iuml;': 'ï', '&Iuml;': 'Ï',
    '&aelig;': 'æ', '&Aelig;': 'Æ',
    '&oelig;': 'œ', '&Oelig;': 'Œ',
    '&iacute;': 'í', '&Iacute;': 'Í',
    '&oacute;': 'ó', '&Oacute;': 'Ó',
    '&uacute;': 'ú', '&Uacute;': 'Ú',
    '&aacute;': 'á', '&Aacute;': 'Á',
    '&ntilde;': 'ñ', '&Ntilde;': 'Ñ'
  };

  for (const [entity, char] of Object.entries(entityMap)) {
    str = str.replaceAll(entity, char);
  }

  // 4. Strip leftover stray HTML tags if present (e.g. <span>, <i>, <b>)
  str = str.replace(/<[^>]+>/g, '');

  // 5. AGENTS.md Zero Em-Dash Policy (replace em-dash and double hyphen)
  str = str.replace(/—/g, ': ').replace(/--/g, ': ');

  // Collapse multiple spaces
  str = str.replace(/  +/g, ' ');

  return str;
}

function processObj(obj) {
  if (typeof obj === 'string') {
    return decodeAllHtmlEntities(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(processObj);
  }
  if (obj && typeof obj === 'object') {
    const res = {};
    for (const [key, val] of Object.entries(obj)) {
      res[decodeAllHtmlEntities(key)] = processObj(val);
    }
    return res;
  }
  return obj;
}

function processDir(dir) {
  let cleanedCount = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      cleanedCount += processDir(fullPath);
    } else if (entry.isFile()) {
      if (entry.name.endsWith('.txt')) {
        const text = fs.readFileSync(fullPath, 'utf8');
        const cleaned = decodeAllHtmlEntities(text);
        if (cleaned !== text) {
          fs.writeFileSync(fullPath, cleaned, 'utf8');
          console.log(`✓ Cleaned text: ${path.relative(booksDir, fullPath)}`);
          cleanedCount++;
        }
      } else if (entry.name.endsWith('.json')) {
        const text = fs.readFileSync(fullPath, 'utf8');
        try {
          const json = JSON.parse(text);
          const cleanedJson = processObj(json);
          const cleanedText = JSON.stringify(cleanedJson, null, 2);
          if (cleanedText !== text) {
            fs.writeFileSync(fullPath, cleanedText, 'utf8');
            console.log(`✓ Cleaned JSON: ${path.relative(booksDir, fullPath)}`);
            cleanedCount++;
          }
        } catch (e) {
          // ignore non-json
        }
      }
    }
  }
  return cleanedCount;
}

if (process.argv[1] && process.argv[1].endsWith('clean-html-entities.js')) {
  console.log('=== Cleaning HTML Entities, Tags, and Em-dashes Across All Books ===');
  const count = processDir(booksDir);
  console.log(`\nSuccessfully cleaned ${count} file(s).`);
  syncManifest();
}
