import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { syncManifest } from './sync-manifest.js';
import { decodeAllHtmlEntities } from './clean-html-entities.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');

const gradients = [
  "linear-gradient(135deg, #1b263b 0%, #0d1b2a 100%)",
  "linear-gradient(135deg, #4a154b 0%, #200122 100%)",
  "linear-gradient(135deg, #8b0000 0%, #3a0000 100%)",
  "linear-gradient(135deg, #2b2d42 0%, #1d1a39 100%)",
  "linear-gradient(135deg, #4e1a3b 0%, #2f0f23 100%)"
];

// Helper to decode basic HTML entities and remove em-dashes
function cleanHtml(html) {
  let bodyContent = html;
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    bodyContent = bodyMatch[1];
  }

  // Remove scripts, styles, and comments
  bodyContent = bodyContent
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
    .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '')
    .replace(/<!--([\s\S]*?)-->/g, '');

  // Remove standard study guides/indexes navigation links from page
  bodyContent = bodyContent
    .replace(/<(?:table|div|p)[^>]*class=["']footer["'][\s\S]*?<\/(?:table|div|p)>/gi, '')
    .replace(/<hr class="end"[\s\S]*?>/gi, '');

  // Replace block level tags with newlines
  bodyContent = bodyContent
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi, '\n\n$1\n\n')
    .replace(/<tr[^>]*>/gi, '\n')
    .replace(/<div[^>]*>/gi, '\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<\/li>/gi, '\n');

  // Decode all HTML entities, strip remaining tags, and replace em-dashes
  let text = decodeAllHtmlEntities(bodyContent);

  // Collapse spaces and excessive newlines
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\r\n/g, '\n');
  text = text.replace(/\n\s*\n\s*\n+/g, '\n\n');
  text = text.trim();

  return text;
}

async function fetchPage(url) {
  console.log(`Fetching: ${url}`);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: status ${res.status}`);
  }
  const buffer = await res.arrayBuffer();
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(buffer);
  } catch {
    return new TextDecoder('windows-1252').decode(buffer);
  }
}

async function main() {
  const args = process.argv.slice(2);
  let bookId = args[0] || 'value-price-profit';
  let rawUrl = args[1] || 'https://www.marxists.org/archive/marx/works/1865/value-price-profit/';

  console.log(`=== Starting Importer for Book ID: "${bookId}" ===`);
  console.log(`Source URL: ${rawUrl}`);

  let indexHtml = '';
  let isSingleFile = false;

  if (rawUrl.toLowerCase().endsWith('.htm') || rawUrl.toLowerCase().endsWith('.html')) {
    try {
      indexHtml = await fetchPage(rawUrl);
      const filename = rawUrl.substring(rawUrl.lastIndexOf('/') + 1).toLowerCase();
      if (!filename.startsWith('index.htm') && !filename.startsWith('index.html')) {
        isSingleFile = true;
      }
    } catch (err) {
      console.error(`Failed to fetch direct URL: ${err.message}`);
    }
  }

  const baseUrl = rawUrl.substring(0, rawUrl.lastIndexOf('/') + 1);

  if (!indexHtml) {
    try {
      indexHtml = await fetchPage(baseUrl + 'index.htm');
    } catch (err) {
      try {
        indexHtml = await fetchPage(baseUrl + 'index.html');
      } catch (err2) {
        indexHtml = await fetchPage(baseUrl);
      }
    }
  }

  // Parse Title
  let title = 'Unknown Book';
  const h1Match = indexHtml.match(/<h1>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    title = h1Match[1].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
  } else {
    const titleMatch = indexHtml.match(/<title>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
      title = titleMatch[1].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');
    }
  }
  // Remove em-dashes from Title
  title = title.replace(/—|--/g, '; ');
  // Strip leading author prefixes like "Lenin: " or "Che Guevara: "
  title = title.replace(/^(?:V\.\s*I\.\s*)?Lenin\s*:\s*/i, '');
  title = title.replace(/^(?:Che\s+Guevara|Ernesto\s+Che\s+Guevara)\s*:\s*/i, '');
  title = title.replace(/^(?:Joseph\s+Stalin|J\.\s*V\.\s*Stalin|Stalin)\s*:\s*/i, '');
  title = title.replace(/^(?:Mao\s+Zedong|Mao\s+Tse-tung|Mao)\s*:\s*/i, '');
  title = title.replace(/^(?:Karl\s+Marx|Marx|Friedrich\s+Engels|Engels)\s*:\s*/i, '');
  title = title.trim();
  // Convert Title Case if ALL CAPS
  if (title === title.toUpperCase()) {
    title = title.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  // Parse Author
  let author = 'Karl Marx';
  const authorMatch = indexHtml.match(/<meta\s+name="author"\s+content="([^"]+)"/i);
  if (authorMatch) {
    author = authorMatch[1].trim();
    if (author.toLowerCase().includes('mao')) {
      author = 'Mao Zedong';
    } else if (author.toLowerCase().includes('guevara')) {
      author = 'Che Guevara';
    } else if (author.toLowerCase().includes('stalin')) {
      author = 'Joseph Stalin';
    } else if (author.toLowerCase().includes('sankara')) {
      author = 'Thomas Sankara';
    } else if (author.toLowerCase().includes('lenin')) {
      author = 'V.I. Lenin';
    }
  } else if (rawUrl.toLowerCase().includes('sankara') || indexHtml.toLowerCase().includes('sankara')) {
    author = 'Thomas Sankara';
  } else if (rawUrl.toLowerCase().includes('guevara') || indexHtml.toLowerCase().includes('guevara')) {
    author = 'Che Guevara';
  } else if (rawUrl.toLowerCase().includes('stalin') || indexHtml.toLowerCase().includes('stalin')) {
    author = 'Joseph Stalin';
  } else if (rawUrl.toLowerCase().includes('lenin') || indexHtml.toLowerCase().includes('lenin')) {
    author = 'V.I. Lenin';
  } else if (indexHtml.toLowerCase().includes('mao tse-tung') || indexHtml.toLowerCase().includes('mao zedong')) {
    author = 'Mao Zedong';
  } else if (indexHtml.toLowerCase().includes('engels')) {
    author = 'Karl Marx & Friedrich Engels';
  }

  // Parse Year from URL or page
  let year = '1865';
  const yearUrlMatch = rawUrl.match(/\/(?:works\/)?(\d{4})\//);
  if (yearUrlMatch) {
    year = yearUrlMatch[1];
  } else {
    const yearMatch = indexHtml.match(/(?:18|19|20)\d{2}/);
    if (yearMatch) {
      year = yearMatch[0];
    }
  }

  console.log(`Parsed Metadata - Title: "${title}", Author: "${author}", Year: "${year}"`);

  let rawChapters = [];

  if (isSingleFile) {
    // Check if the single file has H2, H3, or H4 headers
    const h2Regex = /<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/gi;
    const allH2Matches = [];
    let h2Match;
    while ((h2Match = h2Regex.exec(indexHtml)) !== null) {
      allH2Matches.push({
        title: h2Match[1].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ').replace(/—|--/g, '; '),
        index: h2Match.index,
        fullMatchLength: h2Match[0].length
      });
    }

    const isExcludedHeader = (hTitle) => {
      const lower = hTitle.toLowerCase().trim();
      if (!lower) return true;
      if (lower === author.toLowerCase()) return true;
      if (lower === title.toLowerCase()) return true;
      if (lower.startsWith('che guevara') || lower.startsWith('ernesto guevara') || lower.startsWith('ernesto \'che\' guevara')) return true;
      if (lower.includes('lenin') || lower === 'v.i. lenin' || lower === 'vi lenin' || lower === 'v. i. lenin') return true;
      if (lower.includes('stalin') || lower === 'joseph stalin' || lower === 'j. v. stalin') return true;
      if (lower.includes('sankara') || lower === 'thomas sankara') return true;
      if (lower.startsWith('speech made to') || lower.startsWith('speech to') || lower.startsWith('written:') || lower.startsWith('translated by')) return true;
      if (lower === 'notes' || lower.startsWith('notes') || lower === 'footnotes' || lower === 'endnotes') return true;
      return false;
    };

    const h2Matches = allH2Matches.filter(m => !isExcludedHeader(m.title));

    if (h2Matches.length > 1) {
      // Split single document into H2 sections
      // Check if there is intro text before first H2
      const bodyStartMatch = indexHtml.match(/<body[^>]*>/i);
      const contentStart = bodyStartMatch ? bodyStartMatch.index + bodyStartMatch[0].length : 0;
      const firstH2Index = h2Matches[0].index;

      if (firstH2Index > contentStart + 200) {
        rawChapters.push({
          title: "Introduction",
          htmlSnippet: indexHtml.substring(contentStart, firstH2Index)
        });
      }

      for (let i = 0; i < h2Matches.length; i++) {
        const currentH2 = h2Matches[i];
        const nextH2 = h2Matches[i + 1];
        const startPos = currentH2.index;
        const endPos = nextH2 ? nextH2.index : indexHtml.length;
        rawChapters.push({
          title: currentH2.title,
          htmlSnippet: indexHtml.substring(startPos, endPos)
        });
      }
    } else {
      rawChapters.push({
        title: title,
        htmlSnippet: indexHtml
      });
    }
  } else {
    // Extract TOC links
    const linkRegex = /<a\s+(?:[^>]*?\s+)?href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let match;

    while ((match = linkRegex.exec(indexHtml)) !== null) {
      const href = match[1].trim();
      let text = match[2].replace(/<[^>]*>/g, '').trim().replace(/\s+/g, ' ');

      if (
        href.startsWith('http') ||
        href.startsWith('//') ||
        href.startsWith('../') ||
        href.startsWith('mailto:') ||
        href.startsWith('#') ||
        href.includes('steering.htm') ||
        href.includes('volunteers.htm') ||
        href.includes('admin/')
      ) {
        continue;
      }

      const lowerHref = href.toLowerCase();
      if (
        lowerHref.startsWith('index.htm') ||
        lowerHref.startsWith('index.html') ||
        lowerHref.startsWith('index-l.htm') ||
        lowerHref.startsWith('guide.htm') ||
        lowerHref.startsWith('notes.htm') ||
        lowerHref.startsWith('study.htm') ||
        lowerHref.includes('index.gif') ||
        lowerHref.endsWith('.pdf') ||
        lowerHref.endsWith('.jpg') ||
        lowerHref.endsWith('.jpeg') ||
        lowerHref.endsWith('.png') ||
        lowerHref.endsWith('.gif') ||
        lowerHref.endsWith('.zip') ||
        lowerHref.endsWith('.epub')
      ) {
        continue;
      }

      if (!text || text.toLowerCase() === 'index' || text.toLowerCase() === 'next' || text.toLowerCase() === 'previous' || text.toLowerCase() === 'study guide') {
        continue;
      }

      text = text.replace(/—|--/g, '; ');

      const hashIdx = href.indexOf('#');
      const file = hashIdx !== -1 ? href.substring(0, hashIdx) : href;
      const anchor = hashIdx !== -1 ? href.substring(hashIdx + 1) : null;

      if (rawChapters.some(c => c.file === file && c.anchor === anchor)) {
        continue;
      }

      rawChapters.push({
        file,
        anchor,
        title: text
      });
    }
  }

  if (rawChapters.length === 0) {
    console.error('❌ Error: No chapter links or sections found on the page.');
    process.exit(1);
  }

  console.log(`Found ${rawChapters.length} chapter/sections.`);

  // Book data directory
  const bookDir = path.join(workspaceRoot, 'public', 'data', 'books', bookId);
  fs.mkdirSync(bookDir, { recursive: true });

  const finalChapters = [];
  let totalWordCount = 0;

  if (isSingleFile) {
    for (let idx = 0; idx < rawChapters.length; idx++) {
      const chapter = rawChapters[idx];
      const cleanText = cleanHtml(chapter.htmlSnippet);
      const words = cleanText.split(/\s+/).filter(Boolean);
      totalWordCount += words.length;

      const chapIndex = idx + 1;
      const chapDirName = `chapter${chapIndex}`;
      const chapDirPath = path.join(bookDir, chapDirName);
      fs.mkdirSync(chapDirPath, { recursive: true });

      const txtFileRelative = `${chapDirName}/chapter${chapIndex}.txt`;
      const annFileRelative = `${chapDirName}/chapter${chapIndex}-annotations.json`;
      const sumFileRelative = `${chapDirName}/chapter${chapIndex}-summary.txt`;

      fs.writeFileSync(path.join(bookDir, txtFileRelative), cleanText, 'utf8');
      fs.writeFileSync(path.join(bookDir, annFileRelative), '[]', 'utf8');

      const summaryPlaceholder = `Summary of the section: ${chapter.title}.\n\nThis section discusses key theoretical concepts outlined by ${author}.`;
      fs.writeFileSync(path.join(bookDir, sumFileRelative), summaryPlaceholder, 'utf8');

      const chapId = chapter.title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || `chapter-${chapIndex}`;

      finalChapters.push({
        id: chapId,
        title: chapter.title,
        textFile: txtFileRelative,
        annotationFile: annFileRelative,
        summaryFile: sumFileRelative
      });

      console.log(`Saved Chapter ${chapIndex}: "${chapter.title}" (${words.length} words)`);
    }
  } else {
    // Multi-file fetch
    const filesToFetch = [...new Set(rawChapters.map(c => c.file))];
    const fileContents = {};

    for (const filename of filesToFetch) {
      const fileUrl = new URL(filename, baseUrl).toString();
      try {
        const html = await fetchPage(fileUrl);
        fileContents[filename] = html;
      } catch (err) {
        console.error(`⚠️ Warning: Failed to fetch chapter file ${filename}:`, err.message);
      }
    }

    for (let idx = 0; idx < rawChapters.length; idx++) {
      const chapter = rawChapters[idx];
      const htmlContent = fileContents[chapter.file];

      if (!htmlContent) {
        console.warn(`⚠️ Skipping chapter "${chapter.title}" because file content is missing.`);
        continue;
      }

      let chapterHtml = '';

      if (chapter.anchor) {
        const startRegex = new RegExp(`(?:name|id)=["']${chapter.anchor}["']`, 'i');
        const startMatch = htmlContent.match(startRegex);
        if (!startMatch) {
          chapterHtml = htmlContent;
        } else {
          const startIdx = startMatch.index;
          const relativeCloseIdx = htmlContent.substring(startIdx).indexOf('>');
          const actualStartIdx = relativeCloseIdx !== -1 ? startIdx + relativeCloseIdx + 1 : startIdx;

          let nextAnchorInFile = null;
          for (let j = idx + 1; j < rawChapters.length; j++) {
            if (rawChapters[j].file === chapter.file && rawChapters[j].anchor) {
              nextAnchorInFile = rawChapters[j].anchor;
              break;
            }
          }

          let endIdx = htmlContent.length;
          if (nextAnchorInFile) {
            const endRegex = new RegExp(`(?:name|id)=["']${nextAnchorInFile}["']`, 'i');
            const endMatch = htmlContent.match(endRegex);
            if (endMatch) {
              endIdx = endMatch.index;
            }
          } else {
            const footerMatch = htmlContent.match(/<hr class="end"|<p class="footer"/i);
            if (footerMatch) {
              endIdx = footerMatch.index;
            }
          }

          const beforeAnchor = htmlContent.substring(0, endIdx);
          const actualEndIdx = beforeAnchor.lastIndexOf('<');
          const finalEndIdx = actualEndIdx !== -1 && actualEndIdx > actualStartIdx ? actualEndIdx : endIdx;

          chapterHtml = htmlContent.substring(actualStartIdx, finalEndIdx);
        }
      } else {
        chapterHtml = htmlContent;
      }

      const cleanText = cleanHtml(chapterHtml);
      const words = cleanText.split(/\s+/).filter(Boolean);
      totalWordCount += words.length;

      const chapIndex = idx + 1;
      const chapDirName = `chapter${chapIndex}`;
      const chapDirPath = path.join(bookDir, chapDirName);
      fs.mkdirSync(chapDirPath, { recursive: true });

      const txtFileRelative = `${chapDirName}/chapter${chapIndex}.txt`;
      const annFileRelative = `${chapDirName}/chapter${chapIndex}-annotations.json`;
      const sumFileRelative = `${chapDirName}/chapter${chapIndex}-summary.txt`;

      fs.writeFileSync(path.join(bookDir, txtFileRelative), cleanText, 'utf8');
      fs.writeFileSync(path.join(bookDir, annFileRelative), '[]', 'utf8');
      
      const summaryPlaceholder = `This chapter explores key theoretical arguments and historical developments addressed by ${author} in "${chapter.title}".`;
      fs.writeFileSync(path.join(bookDir, sumFileRelative), summaryPlaceholder, 'utf8');

      const chapId = chapter.title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || `chapter-${chapIndex}`;

      finalChapters.push({
        id: chapId,
        title: chapter.title,
        textFile: txtFileRelative,
        annotationFile: annFileRelative,
        summaryFile: sumFileRelative
      });

      console.log(`Saved Chapter ${chapIndex}: "${chapter.title}" (${words.length} words)`);
    }
  }

  // Estimate reading time: ~200 words per minute
  const readingTimeMinutes = Math.ceil(totalWordCount / 200);
  let readingTime = `${readingTimeMinutes} mins`;
  if (readingTimeMinutes > 60) {
    const hours = (readingTimeMinutes / 60).toFixed(1);
    readingTime = `${hours} hours`;
  }

  let coverGradient = gradients[Math.floor(Math.random() * gradients.length)];
  if (author === 'Che Guevara') {
    coverGradient = 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)';
  } else if (author === 'Thomas Sankara') {
    coverGradient = 'linear-gradient(135deg, #8b1e0f 0%, #1b381e 100%)';
  } else if (author === 'Joseph Stalin') {
    coverGradient = 'linear-gradient(135deg, #3d0c02 0%, #1f0400 100%)';
  } else if (author === 'V.I. Lenin') {
    coverGradient = 'linear-gradient(135deg, #8c1c1c 0%, #3d0c0c 100%)';
  }

  const summaryJson = {
    id: bookId,
    title: title,
    author: author,
    year: year,
    difficulty: "Medium",
    readingTime: readingTime,
    coverGradient: coverGradient,
    marxistsOrgUrl: rawUrl,
    context: `First published in ${year}, this work by ${author} examines foundational principles of scientific socialism and revolutionary political theory.`,
    relatesToToday: `Provides critical historical and theoretical insights for analyzing political economy, social contradictions, and contemporary working-class struggles.`,
    keyTakeaways: [
      `Examines the material basis of social and economic relations.`,
      `Analyzes the dynamics of class struggle and historical development.`,
      `Outlines strategic and organizational lessons for the liberation of the working class.`
    ],
    chapters: finalChapters
  };

  fs.writeFileSync(path.join(bookDir, 'summary.json'), JSON.stringify(summaryJson, null, 2), 'utf8');
  console.log(`Saved summary.json for "${title}".`);

  // Synchronize manifest automatically from summary.json files
  syncManifest();
  console.log(`=== Importer Completed Successfully for "${title}" ===`);
}

main();
