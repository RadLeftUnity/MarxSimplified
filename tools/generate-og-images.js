import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas, loadImage, GlobalFonts } from '@napi-rs/canvas';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const publicDir = path.join(workspaceRoot, 'public');
const ogDir = path.join(publicDir, 'og');
const fontsDir = path.join(__dirname, 'fonts');
const glossaryDir = path.join(workspaceRoot, 'src', 'data', 'glossary');
const historyDir = path.join(workspaceRoot, 'src', 'data', 'history', 'countries');

const getTermSlug = (term) => {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

function loadAllGlossaryTerms() {
  if (!fs.existsSync(glossaryDir)) return [];
  const files = fs.readdirSync(glossaryDir).filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts' && f !== 'index.tsx'
  );

  const allTerms = [];
  for (const file of files) {
    const filePath = path.join(glossaryDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const jsonMatch = content.match(/export const \w+: GlossaryTerm\[\] = (\[[\s\S]*\]);?/);
    if (jsonMatch) {
      try {
        const terms = JSON.parse(jsonMatch[1]);
        for (const termObj of terms) {
          termObj._sourceFile = file;
          allTerms.push(termObj);
        }
      } catch (err) {}
    }
  }
  return allTerms;
}

function loadCountryData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/export const \w+: CountryData = (\{[\s\S]*\});?\s*$/);
  if (!match) return null;
  try {
    const jsObjStr = match[1];
    const evalFn = new Function(`return ${jsObjStr}`);
    return evalFn();
  } catch (e) {
    return null;
  }
}

function loadAllHistoryCountries() {
  if (!fs.existsSync(historyDir)) return [];
  const files = fs.readdirSync(historyDir).filter((f) => f.endsWith('.ts') && !f.startsWith('_'));
  const countries = [];
  for (const file of files) {
    const data = loadCountryData(path.join(historyDir, file));
    if (data) countries.push(data);
  }
  return countries;
}

async function ensureAndRegisterFonts() {
  const fontTargets = [
    { name: 'Lora-Bold.ttf', url: 'https://cdn.jsdelivr.net/fontsource/fonts/lora@latest/latin-700-normal.ttf', family: 'Lora' },
    { name: 'Lora-Italic.ttf', url: 'https://cdn.jsdelivr.net/fontsource/fonts/lora@latest/latin-400-italic.ttf', family: 'Lora' },
    { name: 'Lora-Regular.ttf', url: 'https://cdn.jsdelivr.net/fontsource/fonts/lora@latest/latin-400-normal.ttf', family: 'Lora' },
    { name: 'Outfit-Bold.ttf', url: 'https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-700-normal.ttf', family: 'Outfit' },
    { name: 'Outfit-Medium.ttf', url: 'https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-500-normal.ttf', family: 'Outfit' },
    { name: 'Outfit-Regular.ttf', url: 'https://cdn.jsdelivr.net/fontsource/fonts/outfit@latest/latin-400-normal.ttf', family: 'Outfit' }
  ];

  fs.mkdirSync(fontsDir, { recursive: true });

  for (const item of fontTargets) {
    const dest = path.join(fontsDir, item.name);
    if (!fs.existsSync(dest) || fs.statSync(dest).size < 1000) {
      try {
        const res = await fetch(item.url);
        if (res.ok) {
          const buf = Buffer.from(await res.arrayBuffer());
          fs.writeFileSync(dest, buf);
        }
      } catch (e) {}
    }
    if (fs.existsSync(dest)) {
      try {
        GlobalFonts.registerFromPath(dest, item.family);
      } catch (e) {}
    }
  }
}

const WIDTH = 1200;
const HEIGHT = 630;

// Parse CLI Args
const args = process.argv.slice(2);
const forceAll = args.includes('--all');
const targetBookId = args.find(a => a.startsWith('--book='))?.split('=')[1] || 'grundrisse';
const essentialOnly = args.includes('--essential') || (!forceAll && !args.some(a => a.startsWith('--type=')));

function writePng(destPath, canvas) {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, canvas.toBuffer('image/png'));
}

function shouldSkip(destPath) {
  return !forceAll && fs.existsSync(destPath);
}

function cleanQuoteText(text) {
  return (text || '')
    .replace(/\[\d+\]/g, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/[*_#]/g, '')
    .replace(/[^\x00-\x7F\u00A0-\u00FF\u2010-\u2044]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function wrapText(ctx, text, maxWidth) {
  if (!text) return [];
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

function drawText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const lines = wrapText(ctx, text, maxWidth);
  const count = Math.min(lines.length, maxLines);
  for (let i = 0; i < count; i++) {
    let line = lines[i];
    if (i === maxLines - 1 && lines.length > maxLines) {
      line = line.replace(/[\s.,;!?]+$/, '') + '...';
    }
    ctx.fillText(line, x, y + i * lineHeight);
  }
  return count;
}

function getFittingSentences(ctx, text, maxWidth, maxLines) {
  if (!text) return '';
  const clean = cleanQuoteText(text);
  const sentences = clean.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
  if (sentences.length <= 1) {
    return clean;
  }

  let result = '';
  for (let i = 0; i < sentences.length; i++) {
    const candidate = result ? `${result} ${sentences[i]}` : sentences[i];
    const lines = wrapText(ctx, candidate, maxWidth);
    if (lines.length <= maxLines) {
      result = candidate;
    } else {
      break;
    }
  }

  if (!result && sentences.length > 0) {
    result = sentences[0];
  }
  return result;
}

function drawCenteredText(ctx, text, centerX, y, maxWidth, lineHeight, maxLines = 4) {
  const lines = wrapText(ctx, text, maxWidth);
  const count = Math.min(lines.length, maxLines);
  ctx.textAlign = 'center';
  for (let i = 0; i < count; i++) {
    let line = lines[i];
    if (i === maxLines - 1 && lines.length > maxLines) {
      line = line.replace(/[\s.,;!?]+$/, '') + '...';
    }
    ctx.fillText(line, centerX, y + i * lineHeight);
  }
  return count;
}

function getCleanQuoteText(rawContext, fallbackDesc) {
  const text = (rawContext || fallbackDesc || '').trim();
  if (!text) return 'Essential foundational reading for understanding political economy and scientific socialism.';

  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.length > 0);
  if (sentences.length === 0) return text;

  let quote = sentences[0];
  if (quote.length < 45 && sentences.length > 1) {
    quote = `${sentences[0]} ${sentences[1]}`;
  }
  return quote;
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawBookIcon(ctx, x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(x - 6, y - 4);
  ctx.lineTo(x - 1, y - 6);
  ctx.lineTo(x - 1, y + 4);
  ctx.lineTo(x - 6, y + 6);
  ctx.closePath();
  ctx.moveTo(x + 6, y - 4);
  ctx.lineTo(x + 1, y - 6);
  ctx.lineTo(x + 1, y + 4);
  ctx.lineTo(x + 6, y + 6);
  ctx.closePath();
  ctx.stroke();
}

function drawClockIcon(ctx, x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y - 3.5);
  ctx.lineTo(x, y);
  ctx.lineTo(x + 2.5, y);
  ctx.stroke();
}

function drawSignalIcon(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x - 5, y + 2, 2.5, 4);
  ctx.fillRect(x - 1, y - 1, 2.5, 7);
  ctx.fillRect(x + 3, y - 4, 2.5, 10);
}

function drawDoubleQuoteIcon(ctx, x, y, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(x - 7, y - 2, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - 10, y);
  ctx.quadraticCurveTo(x - 12, y + 8, x - 15, y + 10);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + 7, y - 2, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + 4, y);
  ctx.quadraticCurveTo(x + 2, y + 8, x - 1, y + 10);
  ctx.stroke();
}

function getAuthorImgPath(authorName) {
  if (!authorName) return null;
  const lower = authorName.toLowerCase();
  if (lower.includes('marx') && lower.includes('engels')) return path.join(publicDir, 'images', 'authors', 'marx-engels.webp');
  if (lower.includes('kollontai')) return path.join(publicDir, 'images', 'authors', 'kollontai.jpg');
  if (lower.includes('marx')) return path.join(publicDir, 'images', 'authors', 'marx.jpg');
  if (lower.includes('engels')) return path.join(publicDir, 'images', 'authors', 'engels.jpg');
  if (lower.includes('lenin')) return path.join(publicDir, 'images', 'authors', 'lenin.jpg');
  if (lower.includes('luxemburg')) return path.join(publicDir, 'images', 'authors', 'luxemburg.jpg');
  if (lower.includes('mao')) return path.join(publicDir, 'images', 'authors', 'mao.jpg');
  if (lower.includes('fanon')) return path.join(publicDir, 'images', 'authors', 'fanon.webp');
  return null;
}

function drawBackdrop(ctx) {
  ctx.fillStyle = '#0f1015';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = '#14151c';
  ctx.fillRect(25, 25, 1150, 580);
  ctx.strokeStyle = '#222530';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(25, 25, 1150, 580);
}

async function drawBookCoverSection(ctx, title, author, coverColor, metaCol1, metaCol2, metaCol3, renderMetaBar = true) {
  const coverX = 65;
  const coverY = renderMetaBar ? 55 : 65;
  const coverW = renderMetaBar ? 320 : 330;
  const coverH = renderMetaBar ? 450 : 500;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.fillRect(coverX + 12, coverY + 12, coverW, coverH);

  ctx.fillStyle = coverColor || '#7a152e';
  ctx.fillRect(coverX, coverY, coverW, coverH);

  const authorImgPath = getAuthorImgPath(author);
  if (authorImgPath && fs.existsSync(authorImgPath)) {
    try {
      const authorImg = await loadImage(authorImgPath);
      ctx.save();
      ctx.beginPath();
      ctx.rect(coverX, coverY, coverW, coverH);
      ctx.clip();
      ctx.globalAlpha = 0.28;
      ctx.drawImage(authorImg, coverX - 30, coverY - 20, coverW + 60, coverH + 40);
      ctx.restore();
    } catch (e) {}
  }

  drawStar(ctx, coverX + coverW - 35, coverY + 45, 5, 14, 6, '#c48b2c');

  ctx.fillStyle = '#ffffff';
  let titleFontSize = 28;
  if (title.length > 25) titleFontSize = 24;
  if (title.length > 35) titleFontSize = 20;
  ctx.font = `bold ${titleFontSize}px Lora, serif`;
  drawCenteredText(ctx, title, coverX + coverW * 0.5, coverY + 140, coverW - 56, titleFontSize + 10, 4);

  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 16px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText((author || 'KARL MARX').toUpperCase(), coverX + coverW * 0.5, coverY + coverH - 45);

  const binderX = coverX + 22;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.fillRect(binderX, coverY, 3, coverH);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.fillRect(binderX + 3, coverY, 1.5, coverH);

  const spineGrad = ctx.createLinearGradient(coverX, coverY, coverX + 22, coverY);
  spineGrad.addColorStop(0, 'rgba(0,0,0,0.55)');
  spineGrad.addColorStop(0.7, 'rgba(0,0,0,0.15)');
  spineGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = spineGrad;
  ctx.fillRect(coverX, coverY, 22, coverH);

  if (renderMetaBar) {
    const metaY = 520;
    const metaH = 65;
    ctx.fillStyle = '#181a22';
    ctx.fillRect(coverX, metaY, coverW, metaH);
    ctx.strokeStyle = '#272a38';
    ctx.lineWidth = 1;
    ctx.strokeRect(coverX, metaY, coverW, metaH);

    const colW = coverW / 3;

    const col1CX = coverX + colW * 0.5;
    drawBookIcon(ctx, col1CX - 30, metaY + 23, '#d4af37');
    ctx.textAlign = 'left';
    ctx.fillStyle = '#85725a';
    ctx.font = 'bold 10px Outfit, sans-serif';
    ctx.fillText(metaCol1.label, col1CX - 18, metaY + 26);
    ctx.fillStyle = '#e2e2ec';
    ctx.font = '500 14px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(metaCol1.val, col1CX, metaY + 49);

    const col2CX = coverX + colW * 1.5;
    drawClockIcon(ctx, col2CX - 30, metaY + 23, '#d4af37');
    ctx.textAlign = 'left';
    ctx.fillStyle = '#85725a';
    ctx.font = 'bold 10px Outfit, sans-serif';
    ctx.fillText(metaCol2.label, col2CX - 18, metaY + 26);
    ctx.fillStyle = '#e2e2ec';
    ctx.font = '500 14px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(metaCol2.val, col2CX, metaY + 49);

    const col3CX = coverX + colW * 2.5;
    drawSignalIcon(ctx, col3CX - 36, metaY + 23, '#d4af37');
    ctx.textAlign = 'left';
    ctx.fillStyle = '#85725a';
    ctx.font = 'bold 10px Outfit, sans-serif';
    ctx.fillText(metaCol3.label, col3CX - 24, metaY + 26);
    ctx.fillStyle = '#e2e2ec';
    ctx.font = '500 14px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(metaCol3.val, col3CX, metaY + 49);
  }
}

function drawCategoryPill(ctx, rightX, text) {
  ctx.font = 'bold 12px Outfit, sans-serif';
  const tagWidth = ctx.measureText(text.toUpperCase()).width + 24;
  const tagY = 55;
  const tagH = 26;

  ctx.fillStyle = 'rgba(212, 175, 55, 0.08)';
  ctx.fillRect(rightX, tagY, tagWidth, tagH);
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
  ctx.lineWidth = 1;
  ctx.strokeRect(rightX, tagY, tagWidth, tagH);

  ctx.fillStyle = '#d4af37';
  ctx.textAlign = 'left';
  ctx.fillText(text.toUpperCase(), rightX + 12, tagY + 17);
}

function drawQuoteBox(ctx, rightX, quoteY, quoteH, text, maxLines = 4) {
  ctx.fillStyle = '#171921';
  ctx.fillRect(rightX, quoteY, 705, quoteH);

  ctx.fillStyle = '#d4af37';
  ctx.fillRect(rightX, quoteY, 3.5, quoteH);

  drawDoubleQuoteIcon(ctx, rightX + 38, quoteY + 32, '#d4af37');

  ctx.fillStyle = '#d8dcde';
  ctx.font = 'italic 16px Lora, serif';
  drawText(ctx, text, rightX + 72, quoteY + 30, 605, 23, maxLines);
}

async function renderAnnotationCard(book, chId, item, annSlug) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');
  drawBackdrop(ctx);

  await drawBookCoverSection(
    ctx,
    book.title,
    book.author,
    book.coverColor || '#7a152e',
    null, null, null,
    false
  );

  const rightX = 435;
  drawCategoryPill(ctx, rightX, `${book.title} • ANNOTATION`);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px Lora, serif';
  ctx.textAlign = 'left';
  ctx.fillText('Quote', rightX, 124);

  const authorY = 154;
  ctx.fillStyle = '#8e96a2';
  ctx.font = '15px Outfit, sans-serif';
  ctx.fillText('By ', rightX, authorY);
  
  const byWidth = ctx.measureText('By ').width;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'italic 17px Lora, serif';
  ctx.fillText(book.author, rightX + byWidth, authorY);

  const authorWidth = ctx.measureText(book.author).width;
  ctx.fillStyle = '#8e96a2';
  ctx.font = '15px Outfit, sans-serif';
  ctx.fillText(` (${book.year || 'Classic Work'})`, rightX + byWidth + authorWidth, authorY);

  const dividerY = authorY + 18;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(rightX, dividerY);
  ctx.lineTo(rightX + 705, dividerY);
  ctx.stroke();

  const quoteY = dividerY + 16;
  const quoteH = 145;
  const cleanTarget = cleanQuoteText(item.targetText);

  drawQuoteBox(ctx, rightX, quoteY, quoteH, `“${cleanTarget.replace(/^["“]|["”]$/g, '')}”`);

  const explY = quoteY + quoteH + 18;
  const explH = 145;

  ctx.fillStyle = 'rgba(212, 175, 55, 0.05)';
  ctx.fillRect(rightX, explY, 705, explH);
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
  ctx.lineWidth = 1;
  ctx.strokeRect(rightX, explY, 705, explH);

  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 12px Outfit, sans-serif';
  ctx.fillText('EXPLANATION', rightX + 20, explY + 28);

  ctx.fillStyle = '#d4af37';
  ctx.font = '15px Outfit, sans-serif';
  ctx.fillText('•', rightX + 20, explY + 60);

  ctx.fillStyle = '#cbd3df';
  ctx.font = '15px Outfit, sans-serif';
  drawText(
    ctx,
    cleanQuoteText(item.explanation),
    rightX + 38,
    explY + 60,
    640,
    24,
    3
  );

  writePng(path.join(ogDir, 'annotations', `${annSlug}.png`), canvas);
}

async function renderGlossaryCard(term, firstTag, definition, misconception, example, slug) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');
  drawBackdrop(ctx);

  const leftX = 65;
  const leftY = 65;
  const leftW = 330;
  const leftH = 500;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.fillRect(leftX + 12, leftY + 12, leftW, leftH);

  const emblemGrad = ctx.createLinearGradient(leftX, leftY, leftX + leftW, leftY + leftH);
  emblemGrad.addColorStop(0, '#7a152e');
  emblemGrad.addColorStop(1, '#4a0b1a');
  ctx.fillStyle = emblemGrad;
  ctx.fillRect(leftX, leftY, leftW, leftH);

  drawStar(ctx, leftX + leftW - 35, leftY + 45, 5, 14, 6, '#c48b2c');

  const initial = (term || 'M').charAt(0).toUpperCase();
  ctx.fillStyle = 'rgba(212, 175, 55, 0.22)';
  ctx.font = 'bold 150px Lora, serif';
  ctx.textAlign = 'center';
  ctx.fillText(initial, leftX + leftW * 0.5, leftY + 210);

  ctx.fillStyle = '#ffffff';
  let termFontSize = 26;
  if (term.length > 20) termFontSize = 18;
  else if (term.length > 15) termFontSize = 21;
  ctx.font = `bold ${termFontSize}px Lora, serif`;
  drawCenteredText(ctx, term, leftX + leftW * 0.5, leftY + 260, leftW - 44, termFontSize + 10, 3);

  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 13px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('MARXIST GLOSSARY', leftX + leftW * 0.5, leftY + leftH - 45);

  ctx.fillStyle = '#d4af37';
  ctx.fillRect(leftX, leftY, 4, leftH);

  const rightX = 435;
  ctx.textAlign = 'left';

  const categoryText = `MARXIST GLOSSARY • ${firstTag || 'CLASSICAL MARXISM'}`;
  ctx.font = 'bold 12px Outfit, sans-serif';
  const tagWidth = ctx.measureText(categoryText.toUpperCase()).width + 24;
  const tagY = 55;
  const tagH = 26;

  ctx.fillStyle = 'rgba(212, 175, 55, 0.08)';
  ctx.fillRect(rightX, tagY, tagWidth, tagH);
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
  ctx.lineWidth = 1;
  ctx.strokeRect(rightX, tagY, tagWidth, tagH);

  ctx.fillStyle = '#d4af37';
  ctx.fillText(categoryText.toUpperCase(), rightX + 12, tagY + 17);

  ctx.fillStyle = '#ffffff';
  let mainTitleFontSize = 36;
  if (term.length > 22) mainTitleFontSize = 28;
  else if (term.length > 16) mainTitleFontSize = 32;
  ctx.font = `bold ${mainTitleFontSize}px Lora, serif`;
  const termTitleLines = drawText(ctx, term, rightX, 124, 705, mainTitleFontSize + 8, 2);

  const authorY = 124 + termTitleLines * (mainTitleFontSize + 8) + 6;
  ctx.fillStyle = '#8e96a2';
  ctx.font = '15px Outfit, sans-serif';
  ctx.fillText('Concept in ', rightX, authorY);
  
  const inWidth = ctx.measureText('Concept in ').width;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'italic 17px Lora, serif';
  ctx.fillText(firstTag || 'Classical Marxism', rightX + inWidth, authorY);

  const dividerY = authorY + 12;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(rightX, dividerY);
  ctx.lineTo(rightX + 705, dividerY);
  ctx.stroke();

  const hasMisconception = Boolean(misconception && misconception.trim().length > 0);

  if (hasMisconception) {
    const quoteY = dividerY + 10;
    ctx.font = 'italic 16px Lora, serif';
    const fittingDefText = getFittingSentences(ctx, definition, 615, 4);
    const defLines = wrapText(ctx, fittingDefText, 615);
    const defLinesCount = Math.min(defLines.length, 4);
    const quoteH = Math.max(80, 28 + defLinesCount * 22);

    ctx.fillStyle = '#171921';
    ctx.fillRect(rightX, quoteY, 705, quoteH);

    ctx.fillStyle = '#d4af37';
    ctx.fillRect(rightX, quoteY, 3.5, quoteH);

    drawDoubleQuoteIcon(ctx, rightX + 34, quoteY + 26, '#d4af37');

    ctx.fillStyle = '#d8dcde';
    ctx.font = 'italic 16px Lora, serif';
    drawText(ctx, fittingDefText, rightX + 66, quoteY + 26, 615, 22, 4);

    const miscY = quoteY + quoteH + 10;
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 11px Outfit, sans-serif';
    ctx.fillText('COMMON MISCONCEPTION', rightX, miscY + 10);

    ctx.fillStyle = '#d4af37';
    ctx.font = '13.5px Outfit, sans-serif';
    ctx.fillText('•', rightX, miscY + 26);

    ctx.fillStyle = '#cbd3df';
    ctx.font = '13.5px Outfit, sans-serif';
    const fittingMiscText = getFittingSentences(ctx, misconception, 680, 5);
    const miscLinesCount = drawText(ctx, fittingMiscText, rightX + 16, miscY + 26, 680, 18, 5);

    const explY = miscY + 26 + miscLinesCount * 18 + 8;
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 11px Outfit, sans-serif';
    ctx.fillText('EXAMPLE', rightX, explY + 10);

    ctx.fillStyle = '#d4af37';
    ctx.font = '13.5px Outfit, sans-serif';
    ctx.fillText('•', rightX, explY + 26);

    ctx.fillStyle = '#cbd3df';
    ctx.font = '13.5px Outfit, sans-serif';
    const fittingExampleText = getFittingSentences(ctx, example, 680, 5);
    drawText(ctx, fittingExampleText, rightX + 16, explY + 26, 680, 18, 5);

  } else {
    const quoteY = dividerY + 12;
    ctx.font = 'italic 17px Lora, serif';
    const fittingDefText = getFittingSentences(ctx, definition, 615, 5);
    const defLines = wrapText(ctx, fittingDefText, 615);
    const defLinesCount = Math.min(defLines.length, 5);
    const quoteH = Math.max(100, 32 + defLinesCount * 24);

    drawQuoteBox(ctx, rightX, quoteY, quoteH, fittingDefText, 5);

    const explY = quoteY + quoteH + 14;
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 12px Outfit, sans-serif';
    ctx.fillText('EXAMPLE', rightX, explY + 10);

    ctx.fillStyle = '#d4af37';
    ctx.font = '14px Outfit, sans-serif';
    ctx.fillText('•', rightX, explY + 32);

    ctx.fillStyle = '#cbd3df';
    ctx.font = '14px Outfit, sans-serif';
    const fittingExampleText = getFittingSentences(ctx, example, 680, 6);
    drawText(ctx, fittingExampleText, rightX + 18, explY + 32, 680, 20, 6);
  }

  writePng(path.join(ogDir, 'glossary', `${slug}.png`), canvas);
}

async function renderHistoryCard(countryData) {
  if (!countryData) return;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Backdrop
  ctx.fillStyle = '#0f1015';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = '#14151c';
  ctx.fillRect(25, 25, 1150, 580);
  ctx.strokeStyle = '#222530';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(25, 25, 1150, 580);

  // Faded background country photo
  if (countryData.coverImage) {
    const imgRel = countryData.coverImage.startsWith('/') ? countryData.coverImage.slice(1) : countryData.coverImage;
    const imgPath = path.join(publicDir, imgRel);

    if (fs.existsSync(imgPath)) {
      try {
        const coverImg = await loadImage(imgPath);
        ctx.save();
        ctx.beginPath();
        ctx.rect(25, 25, 1150, 580);
        ctx.clip();

        ctx.globalAlpha = 0.28;
        ctx.drawImage(coverImg, 25, 25, 1150, 500);

        const fadeGrad = ctx.createLinearGradient(25, 25, 25, 480);
        fadeGrad.addColorStop(0, 'rgba(20, 21, 28, 0.45)');
        fadeGrad.addColorStop(0.65, 'rgba(20, 21, 28, 0.88)');
        fadeGrad.addColorStop(1, 'rgba(20, 21, 28, 1.0)');

        ctx.globalAlpha = 1.0;
        ctx.fillStyle = fadeGrad;
        ctx.fillRect(25, 25, 1150, 500);
        ctx.restore();
      } catch (e) {}
    }
  }

  // TOP MIDDLE HEADER (Country Name + Flag + Year & Economic System / Ideology)
  const cx = 600;
  const shortName = countryData.shortName || countryData.name;

  let flagImg = null;
  if (countryData.flagUrl) {
    const flagRel = countryData.flagUrl.startsWith('/') ? countryData.flagUrl.slice(1) : countryData.flagUrl;
    const flagPath = path.join(publicDir, flagRel);
    if (fs.existsSync(flagPath)) {
      try {
        flagImg = await loadImage(flagPath);
      } catch (e) {}
    }
  }

  ctx.font = 'bold 38px Lora, serif';
  const nameWidth = ctx.measureText(shortName).width;

  const titleY = 78;
  if (flagImg) {
    const totalW = 46 + 14 + nameWidth;
    const startX = cx - totalW * 0.5;

    ctx.drawImage(flagImg, startX, titleY - 32, 46, 30);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1;
    ctx.strokeRect(startX, titleY - 32, 46, 30);

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(shortName, startX + 60, titleY);
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(shortName, cx, titleY);
  }

  // Subtitle Row: Year / Era • Economic System or Ideology
  const econFact = countryData.quickFacts?.find(f => f.label.toLowerCase().includes('economic') || f.label.toLowerCase().includes('system'));
  const econSystemVal = econFact ? econFact.value.replace(/\[\d+\]/g, '') : countryData.governingIdeology || 'Socialist Economy';

  const subText = `${countryData.era || 'Historical Era'}  •  ${econSystemVal}`;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'italic 16.5px Lora, serif';
  ctx.textAlign = 'center';
  ctx.fillText(subText, cx, titleY + 34);

  // Horizontal Divider Line
  const dividerY = titleY + 50;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, dividerY);
  ctx.lineTo(1100, dividerY);
  ctx.stroke();

  // EXPANDED HISTORICAL OVERVIEW QUOTE BOX (Takes over main middle/lower canvas)
  const ovY = dividerY + 16;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 11px Outfit, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('HISTORICAL OVERVIEW', 75, ovY + 10);

  const quoteY = ovY + 22;
  ctx.font = 'italic 17.5px Lora, serif';
  const overviewFitting = getFittingSentences(ctx, countryData.overviewText, 940, 11);
  const ovLines = wrapText(ctx, overviewFitting, 940);
  const ovLinesCount = Math.min(ovLines.length, 11);
  const quoteH = Math.max(140, 36 + ovLinesCount * 27);

  ctx.fillStyle = '#171921';
  ctx.fillRect(75, quoteY, 1050, quoteH);

  ctx.fillStyle = '#d4af37';
  ctx.fillRect(75, quoteY, 4, quoteH);

  drawDoubleQuoteIcon(ctx, 75 + 34, quoteY + 32, '#d4af37');

  ctx.fillStyle = '#d8dcde';
  ctx.font = 'italic 17.5px Lora, serif';
  ctx.textAlign = 'left';
  drawText(ctx, overviewFitting, 75 + 68, quoteY + 32, 940, 27, 11);

  writePng(path.join(ogDir, 'history', `${countryData.id}.png`), canvas);
}

async function renderMainCard() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Outer Backdrop
  ctx.fillStyle = '#0f1015';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Inner Container Frame
  const boxX = 25;
  const boxY = 25;
  const boxW = 1150;
  const boxH = 580;

  ctx.fillStyle = '#14151c';
  ctx.fillRect(boxX, boxY, boxW, boxH);

  // Subtle radial glow behind center logo
  const glowGrad = ctx.createRadialGradient(600, 315, 50, 600, 315, 500);
  glowGrad.addColorStop(0, 'rgba(122, 21, 46, 0.18)');
  glowGrad.addColorStop(0.5, 'rgba(15, 16, 21, 0.05)');
  glowGrad.addColorStop(1, 'rgba(20, 21, 28, 0)');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(boxX, boxY, boxW, boxH);

  // Double border frame with gold accent line
  ctx.strokeStyle = '#222530';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(boxX, boxY, boxW, boxH);

  const innerX = boxX + 14;
  const innerY = boxY + 14;
  const innerW = boxW - 28;
  const innerH = boxH - 28;

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.28)';
  ctx.lineWidth = 1;
  ctx.strokeRect(innerX, innerY, innerW, innerH);

  // Four corner star accents
  drawStar(ctx, innerX + 18, innerY + 18, 5, 8, 3.5, '#c48b2c');
  drawStar(ctx, innerX + innerW - 18, innerY + 18, 5, 8, 3.5, '#c48b2c');
  drawStar(ctx, innerX + 18, innerY + innerH - 18, 5, 8, 3.5, '#c48b2c');
  drawStar(ctx, innerX + innerW - 18, innerY + innerH - 18, 5, 8, 3.5, '#c48b2c');

  // Load Big Logo
  const logoPath = path.join(publicDir, 'images', 'logo', 'logo.png');
  if (fs.existsSync(logoPath)) {
    try {
      const logoImg = await loadImage(logoPath);
      const origW = logoImg.width;
      const origH = logoImg.height;
      const aspect = origW / origH;

      const maxW = 860;
      const maxH = 260;
      let drawW = maxW;
      let drawH = drawW / aspect;

      if (drawH > maxH) {
        drawH = maxH;
        drawW = drawH * aspect;
      }

      const drawX = 600 - drawW * 0.5;
      const drawY = 315 - drawH * 0.5 - 10;

      ctx.drawImage(logoImg, drawX, drawY, drawW, drawH);
    } catch (e) {}
  }

  writePng(path.join(ogDir, 'main.png'), canvas);
}

async function run() {
  await ensureAndRegisterFonts();

  // Clean and recreate og folder on startup
  if (fs.existsSync(ogDir)) {
    fs.rmSync(ogDir, { recursive: true, force: true });
  }
  fs.mkdirSync(ogDir, { recursive: true });
  fs.mkdirSync(path.join(ogDir, 'books'), { recursive: true });
  fs.mkdirSync(path.join(ogDir, 'history'), { recursive: true });
  fs.mkdirSync(path.join(ogDir, 'glossary'), { recursive: true });

  console.log('=== Open Graph Card Generator (Clean Startup Mode) ===');

  const manifestPath = path.join(publicDir, 'data', 'manifest.json');
  let books = [];
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    books = manifest.books || [];
  }

  // 1. Generate All Book Cards
  let bCount = 0;
  for (const book of books) {
    const bPath = path.join(ogDir, 'books', `${book.id}.png`);

    const canvas = createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext('2d');
    drawBackdrop(ctx);

    const bookDir = path.join(publicDir, 'data', 'books', book.id);
    let takeaways = [];
    let rawContext = '';

    if (fs.existsSync(bookDir)) {
      const summaryFile = path.join(bookDir, 'summary.json');
      if (fs.existsSync(summaryFile)) {
        try {
          const sData = JSON.parse(fs.readFileSync(summaryFile, 'utf8'));
          takeaways = sData.keyTakeaways || [];
          rawContext = sData.context || '';
        } catch (e) {}
      }
    }

    if (takeaways.length === 0) {
      takeaways = [book.shortDescription || 'Essential foundational reading for understanding political economy and socialism.'];
    }

    const cleanQuoteTextStr = getCleanQuoteText(rawContext, book.shortDescription);

    await drawBookCoverSection(
      ctx,
      book.title,
      book.author,
      book.coverColor || '#7a152e',
      { label: 'FORMAT', val: 'Text' },
      { label: 'LENGTH', val: book.readingTime || '1 hour' },
      { label: 'DIFFICULTY', val: book.difficulty || 'Medium' }
    );

    const rightX = 430;
    drawCategoryPill(ctx, rightX, book.subject || 'CLASSIC THEORY');

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Lora, serif';
    ctx.textAlign = 'left';
    const titleLinesCount = drawText(ctx, book.title, rightX, 122, 710, 44, 2);

    const authorY = 122 + titleLinesCount * 44 + 8;
    ctx.fillStyle = '#8e96a2';
    ctx.font = '15px Outfit, sans-serif';
    ctx.fillText('By ', rightX, authorY);
    
    const byWidth = ctx.measureText('By ').width;
    ctx.fillStyle = '#d4af37';
    ctx.font = 'italic 17px Lora, serif';
    ctx.fillText(book.author, rightX + byWidth, authorY);

    const authorWidth = ctx.measureText(book.author).width;
    ctx.fillStyle = '#8e96a2';
    ctx.font = '15px Outfit, sans-serif';
    ctx.fillText(` (${book.year || 'Classic Work'})`, rightX + byWidth + authorWidth, authorY);

    const dividerY = authorY + 18;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(rightX, dividerY);
    ctx.lineTo(rightX + 710, dividerY);
    ctx.stroke();

    const quoteY = dividerY + 16;
    const quoteH = 125;
    drawQuoteBox(ctx, rightX, quoteY, quoteH, cleanQuoteTextStr);

    const takeawaysY = quoteY + quoteH + 24;
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 12px Outfit, sans-serif';
    ctx.fillText('KEY CONCEPT TAKEAWAYS', rightX, takeawaysY);

    let curY = takeawaysY + 24;
    ctx.font = '14px Outfit, sans-serif';

    for (const item of takeaways) {
      if (curY > 575) break;

      ctx.fillStyle = '#d4af37';
      ctx.fillText('•', rightX, curY);

      ctx.fillStyle = '#cbd3df';
      const lines = wrapText(ctx, item, 680);
      const maxItemLines = Math.min(lines.length, 2);

      for (let lIdx = 0; lIdx < maxItemLines; lIdx++) {
        let lineStr = lines[lIdx];
        if (lIdx === 1 && lines.length > 2) {
          lineStr = lineStr.replace(/[\s.,;!?]+$/, '') + '...';
        }
        ctx.fillText(lineStr, rightX + 18, curY + lIdx * 20);
      }

      curY += maxItemLines * 20 + 8;
    }

    writePng(bPath, canvas);
    bCount++;
  }

  // 2. Generate All Glossary Term Cards (Skipping annotations)
  const allRealGlossaryTerms = loadAllGlossaryTerms();
  let gCount = 0;
  for (const termObj of allRealGlossaryTerms) {
    const slug = getTermSlug(termObj.term);
    if (!slug) continue;
    const firstTag = (termObj.theoryTags && termObj.theoryTags.length > 0) ? termObj.theoryTags[0] : 'Classical Marxism';
    await renderGlossaryCard(termObj.term, firstTag, termObj.definition, termObj.misconception, termObj.example, slug);
    gCount++;
  }

  // 3. Generate All History Country Cards
  const allCountries = loadAllHistoryCountries();
  let hCount = 0;

  for (const country of allCountries) {
    await renderHistoryCard(country);
    hCount++;
  }

  // 4. Main Site OG Card
  const mainPath = path.join(ogDir, 'main.png');
  await renderMainCard();

  console.log(`✓ Open Graph Cards generated (main card, ${bCount} books, ${hCount} history countries, ${gCount} glossary terms). Annotations skipped.\n`);
}

run().catch(console.error);
