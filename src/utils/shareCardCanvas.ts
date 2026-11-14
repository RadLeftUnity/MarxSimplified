/**
 * Client-Side Share Card Canvas Generator
 * Renders 1200x630 social share cards directly in the browser's HTML5 Canvas.
 */

import { getAuthorImageUrl, getAuthorCoverGradient } from './authorImage';

const WIDTH = 1200;
const HEIGHT = 630;

function applyCoverBackground(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  coverColorOrGradient?: string
) {
  const bgStr = coverColorOrGradient || '#7a152e';
  const colorMatches = bgStr.match(/#(?:[0-9a-fA-F]{3,8})|rgba?\([^)]+\)|hsla?\([^)]+\)/g);

  if (colorMatches && colorMatches.length >= 2) {
    const grad = ctx.createLinearGradient(x, y, x + width, y + height);
    const step = 1 / (colorMatches.length - 1);
    colorMatches.forEach((color, idx) => {
      grad.addColorStop(idx * step, color);
    });
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, width, height);
  } else if (colorMatches && colorMatches.length === 1) {
    ctx.fillStyle = colorMatches[0];
    ctx.fillRect(x, y, width, height);
  } else {
    try {
      ctx.fillStyle = bgStr;
      ctx.fillRect(x, y, width, height);
    } catch (e) {
      ctx.fillStyle = '#7a152e';
      ctx.fillRect(x, y, width, height);
    }
  }
}

function drawCoverAuthorImage(
  ctx: CanvasRenderingContext2D,
  authorImg: HTMLImageElement,
  coverX: number,
  coverY: number,
  coverW: number,
  coverH: number
) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(coverX, coverY, coverW, coverH);
  ctx.clip();
  ctx.globalAlpha = 0.28;

  const destX = coverX - 30;
  const destY = coverY - 20;
  const destW = coverW + 60;
  const destH = coverH + 40;

  const imgW = authorImg.naturalWidth || authorImg.width || destW;
  const imgH = authorImg.naturalHeight || authorImg.height || destH;

  const imgAspect = imgW / imgH;
  const destAspect = destW / destH;

  let srcX = 0;
  let srcY = 0;
  let srcW = imgW;
  let srcH = imgH;

  if (imgAspect > destAspect) {
    srcW = imgH * destAspect;
    srcX = (imgW - srcW) / 2;
  } else {
    srcH = imgW / destAspect;
    srcY = (imgH - srcH) / 2;
  }

  ctx.drawImage(authorImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
  ctx.restore();
}

function cleanTextPreservingNewlines(text?: string | null): string {
  if (!text) return '';
  return text
    .replace(/\[\d+\]/g, '')
    .replace(/[*_#]/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

async function drawCardWatermark(ctx: CanvasRenderingContext2D) {
  const logoImg = await loadWebImage('/images/logo/logo.png');
  const rightX = 1135;
  const topY = 45;

  ctx.save();
  if (logoImg) {
    const origW = logoImg.naturalWidth || logoImg.width || 120;
    const origH = logoImg.naturalHeight || logoImg.height || 40;
    const targetH = 60;
    const targetW = (origW / origH) * targetH;

    ctx.globalAlpha = 0.95;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 3;
    ctx.drawImage(logoImg, rightX - targetW, topY, targetW, targetH);
  } else {
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('MARX SIMPLIFIED', rightX, topY + 28);
  }
  ctx.restore();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  if (!text) return [];
  const words = text.split(/\s+/);
  const lines: string[] = [];
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

function drawText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number = 4
): number {
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

function drawCenteredText(
  ctx: CanvasRenderingContext2D,
  text: string,
  centerX: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number = 4
): number {
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

function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number,
  color: string
) {
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

function drawDoubleQuoteIcon(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
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

function drawBackdrop(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#0f1015';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = '#14151c';
  ctx.fillRect(25, 25, 1150, 580);
  ctx.strokeStyle = '#222530';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(25, 25, 1150, 580);
}

async function loadWebImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

/**
 * Ensures document fonts are loaded before canvas rendering.
 */
export async function prepareFonts(): Promise<void> {
  if (typeof document !== 'undefined' && document.fonts) {
    try {
      await document.fonts.ready;
    } catch (e) {
      // Ignore font loading errors
    }
  }
}

/**
 * Export a PNG image blob directly to clipboard.
 * Falls back to automatic file download if browser clipboard permission fails.
 */
export async function copyBlobToClipboard(blob: Blob, filename = 'marx-simplified-card.png'): Promise<boolean> {
  try {
    if (navigator.clipboard && typeof window.ClipboardItem !== 'undefined') {
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      return true;
    } else {
      downloadBlobAsFile(blob, filename);
      return true;
    }
  } catch (err) {
    console.warn('Clipboard write unsuccessful, falling back to PNG download.', err);
    downloadBlobAsFile(blob, filename);
    return true;
  }
}

/**
 * Export a rendered canvas directly to clipboard as a PNG image blob.
 * Falls back to automatic file download if browser clipboard permission fails.
 */
export async function copyCanvasToClipboard(canvas: HTMLCanvasElement): Promise<boolean> {
  return new Promise((resolve) => {
    canvas.toBlob(async (blob) => {
      if (!blob) {
        resolve(false);
        return;
      }
      const success = await copyBlobToClipboard(blob);
      resolve(success);
    }, 'image/png');
  });
}

function downloadBlobAsFile(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Generate Book Card Canvas
 */
export async function generateBookCardCanvas(book: {
  title: string;
  author: string;
  year?: string;
  difficulty?: string;
  readingTime?: string;
  subject?: string;
  context?: string;
  keyTakeaways?: string[];
  coverGradient?: string;
  authorImageUrl?: string | null;
}): Promise<HTMLCanvasElement> {
  await prepareFonts();

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d')!;

  drawBackdrop(ctx);

  // Draw Book Cover Section
  const coverX = 65;
  const coverY = 65;
  const coverW = 330;
  const coverH = 500;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.fillRect(coverX + 12, coverY + 12, coverW, coverH);

  const bgGrad = book.coverGradient || getAuthorCoverGradient(book.author);
  applyCoverBackground(ctx, coverX, coverY, coverW, coverH, bgGrad);

  if (book.authorImageUrl) {
    const authorImg = await loadWebImage(book.authorImageUrl);
    if (authorImg) {
      drawCoverAuthorImage(ctx, authorImg, coverX, coverY, coverW, coverH);
    }
  }

  drawStar(ctx, coverX + coverW - 35, coverY + 45, 5, 14, 6, '#c48b2c');

  ctx.save();
  ctx.fillStyle = '#ffffff';
  let titleFontSize = 28;
  if (book.title.length > 25) titleFontSize = 24;
  if (book.title.length > 35) titleFontSize = 20;
  ctx.font = `bold ${titleFontSize}px Lora, serif`;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  drawCenteredText(ctx, book.title, coverX + coverW * 0.5, coverY + 140, coverW - 56, titleFontSize + 10, 4);
  ctx.restore();

  // Draw prominent MarxSimplified logo above author name on book cover with black drop shadow
  const logoImg = await loadWebImage('/images/logo/logo.png');
  const logoCenterY = coverY + coverH - 85;
  if (logoImg) {
    const origW = logoImg.naturalWidth || logoImg.width || 120;
    const origH = logoImg.naturalHeight || logoImg.height || 40;
    const targetH = 62;
    const targetW = (origW / origH) * targetH;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;
    ctx.drawImage(logoImg, coverX + coverW * 0.5 - targetW * 0.5, logoCenterY - targetH * 0.5, targetW, targetH);
    ctx.restore();
  }

  ctx.save();
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 14px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  ctx.fillText(book.author.toUpperCase(), coverX + coverW * 0.5, coverY + coverH - 26);
  ctx.restore();

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

  // Right Side Information
  const rightX = 430;
  ctx.textAlign = 'left';

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px Lora, serif';
  const titleLinesCount = drawText(ctx, book.title, rightX, 65, 710, 44, 2);

  const authorY = 65 + titleLinesCount * 44 + 6;
  ctx.fillStyle = '#8e96a2';
  ctx.font = '15px Inter, sans-serif';
  ctx.fillText('By ', rightX, authorY);

  const byWidth = ctx.measureText('By ').width;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'italic 17px Lora, serif';
  ctx.fillText(book.author, rightX + byWidth, authorY);

  const authorWidth = ctx.measureText(book.author).width;
  ctx.fillStyle = '#8e96a2';
  ctx.font = '15px Inter, sans-serif';
  ctx.fillText(` (${book.year || 'Classic Work'})`, rightX + byWidth + authorWidth, authorY);

  const dividerY = authorY + 14;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(rightX, dividerY);
  ctx.lineTo(rightX + 710, dividerY);
  ctx.stroke();

  const quoteY = dividerY + 14;
  const rawContext = cleanTextPreservingNewlines(book.context || 'Essential foundational reading for understanding political economy and scientific socialism.');
  const takeaways = book.keyTakeaways && book.keyTakeaways.length > 0
    ? book.keyTakeaways.map((t) => cleanTextPreservingNewlines(t))
    : ['Essential foundational reading for understanding political economy and socialism.'];

  const maxRightW = 710;

  // Lock quote box font size to 14.5px Lora with quotation marks (1:1 with Annotation cards)
  const chosenDefFs = 14.5;
  const contextLh = 22;
  ctx.font = `italic ${chosenDefFs}px Lora, serif`;

  let formattedContext = rawContext;
  if (!formattedContext.startsWith('“') && !formattedContext.startsWith('"')) {
    formattedContext = `“${formattedContext}”`;
  }
  const chosenContextLines = wrapText(ctx, formattedContext, maxRightW - 68);
  const contextQuoteH = chosenContextLines.length * contextLh + 32;

  // Evaluate takeaway bullet font size to fit available space below quote box
  const takeawaysY = quoteY + contextQuoteH + 16;
  const availableTakeawaysH = 565 - takeawaysY - 30;

  const candidateSubFontSizes = [14.5, 13.5, 12.5, 11.5, 10.5, 9.5, 9];
  let chosenSubFs = 13.5;
  let chosenTakeawayLinesList: string[][] = [];

  for (const subFs of candidateSubFontSizes) {
    ctx.font = `${subFs}px Inter, sans-serif`;
    const tLinesList = takeaways.map((item) => wrapText(ctx, item, maxRightW - 25));
    const subLh = Math.round(subFs * 1.42);

    let neededH = 0;
    tLinesList.forEach((tLines) => {
      neededH += tLines.length * subLh + 5;
    });

    if (neededH <= availableTakeawaysH || subFs === 9) {
      chosenSubFs = subFs;
      chosenTakeawayLinesList = tLinesList;
      break;
    }
  }

  const subLh = Math.round(chosenSubFs * 1.42);

  // 1. Draw Context Quote Box (Identical font & styling to Annotation cards)
  ctx.fillStyle = '#171921';
  ctx.fillRect(rightX, quoteY, maxRightW, contextQuoteH);

  ctx.fillStyle = '#d4af37';
  ctx.fillRect(rightX, quoteY, 4, contextQuoteH);

  drawDoubleQuoteIcon(ctx, rightX + 24, quoteY + 22, '#d4af37');

  ctx.fillStyle = '#d8dcde';
  ctx.font = `italic ${chosenDefFs}px Lora, serif`;
  ctx.textAlign = 'left';

  for (let i = 0; i < chosenContextLines.length; i++) {
    ctx.fillText(chosenContextLines[i], rightX + 56, quoteY + 22 + i * contextLh);
  }

  // 2. Draw Key Takeaways Section (Pushed down cleanly with generous label spacing)
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 11px Inter, sans-serif';
  ctx.fillText('KEY CONCEPT TAKEAWAYS', rightX, takeawaysY);

  let curY = takeawaysY + 28;
  ctx.font = `${chosenSubFs}px Inter, sans-serif`;

  for (const tLines of chosenTakeawayLinesList) {
    if (curY > 565) break;

    ctx.fillStyle = '#d4af37';
    ctx.fillText('•', rightX, curY);

    ctx.fillStyle = '#cbd3df';
    for (let i = 0; i < tLines.length; i++) {
      ctx.fillText(tLines[i], rightX + 18, curY);
      curY += subLh;
    }
    curY += 4;
  }

  return canvas;
}

/**
 * Generate Glossary Term Card Canvas
 */
export async function generateGlossaryCardCanvas(term: {
  term: string;
  definition: string;
  example: string;
  misconception?: string;
  theoryTags?: string[];
}): Promise<HTMLCanvasElement> {
  await prepareFonts();

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d')!;

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

  const initial = (term.term || 'M').charAt(0).toUpperCase();
  ctx.save();
  ctx.fillStyle = 'rgba(212, 175, 55, 0.22)';
  ctx.font = 'bold 150px Lora, serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 3;
  ctx.fillText(initial, leftX + leftW * 0.5, leftY + 210);
  ctx.restore();

  ctx.save();
  ctx.fillStyle = '#ffffff';
  let termFontSize = 26;
  if (term.term.length > 20) termFontSize = 18;
  else if (term.term.length > 15) termFontSize = 21;
  ctx.font = `bold ${termFontSize}px Lora, serif`;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  drawCenteredText(ctx, term.term, leftX + leftW * 0.5, leftY + 260, leftW - 44, termFontSize + 10, 3);
  ctx.restore();

  // Draw prominent MarxSimplified logo above MARXIST GLOSSARY on left emblem cover
  const logoImg = await loadWebImage('/images/logo/logo.png');
  const logoCenterY = leftY + leftH - 80;
  if (logoImg) {
    const origW = logoImg.naturalWidth || logoImg.width || 120;
    const origH = logoImg.naturalHeight || logoImg.height || 40;
    const targetH = 52;
    const targetW = (origW / origH) * targetH;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;
    ctx.drawImage(logoImg, leftX + leftW * 0.5 - targetW * 0.5, logoCenterY - targetH * 0.5, targetW, targetH);
    ctx.restore();
  }

  ctx.save();
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 12px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  ctx.fillText('MARXIST GLOSSARY', leftX + leftW * 0.5, leftY + leftH - 26);
  ctx.restore();

  ctx.fillStyle = '#d4af37';
  ctx.fillRect(leftX, leftY, 4, leftH);

  const rightX = 435;
  ctx.textAlign = 'left';

  const tagsText = term.theoryTags && term.theoryTags.length > 0 ? term.theoryTags.join('  •  ') : 'Classical Marxism';

  ctx.fillStyle = '#ffffff';
  let mainTitleFontSize = 36;
  if (term.term.length > 22) mainTitleFontSize = 28;
  else if (term.term.length > 16) mainTitleFontSize = 32;
  ctx.font = `bold ${mainTitleFontSize}px Lora, serif`;
  const termTitleLines = drawText(ctx, term.term, rightX, 60, 705, mainTitleFontSize + 8, 2);

  const authorY = 60 + termTitleLines * (mainTitleFontSize + 8) + 6;
  ctx.fillStyle = '#8e96a2';
  ctx.font = '15px Inter, sans-serif';
  ctx.fillText('Concept in ', rightX, authorY);

  const inWidth = ctx.measureText('Concept in ').width;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'italic 15px Lora, serif';
  ctx.fillText(tagsText, rightX + inWidth, authorY);

  const dividerY = authorY + 12;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(rightX, dividerY);
  ctx.lineTo(rightX + 705, dividerY);
  ctx.stroke();

  const quoteY = dividerY + 14;
  const rawDefinition = cleanTextPreservingNewlines(term.definition || '');
  const rawExample = cleanTextPreservingNewlines(term.example || '');
  const rawMisconception = cleanTextPreservingNewlines(term.misconception || '');

  const maxRightW = 705;

  // Lock definition quote box font size to 14.5px Lora (1:1 with Book & Annotation cards)
  const chosenDefFs = 14.5;
  const defLh = 22;
  ctx.font = `italic ${chosenDefFs}px Lora, serif`;

  const chosenDefLines = wrapText(ctx, rawDefinition, maxRightW - 68);
  const defQuoteH = chosenDefLines.length * defLh + 32;

  // Evaluate REAL WORLD EXAMPLE and COMMON MISCONCEPTION font size starting at 14.5px down to 9px
  const explY = quoteY + defQuoteH + 16;
  const availableSubH = 565 - explY - 30;

  const candidateSubFontSizes = [14.5, 13.5, 12.5, 11.5, 10.5, 9.5, 9];
  let chosenSubFs = 13.5;
  let chosenExLines: string[] = [];
  let chosenMiscLines: string[] = [];

  for (const subFs of candidateSubFontSizes) {
    ctx.font = `${subFs}px Inter, sans-serif`;
    const exLines = wrapText(ctx, rawExample, maxRightW - 25);
    const miscLines = rawMisconception ? wrapText(ctx, rawMisconception, maxRightW - 25) : [];
    const subLh = Math.round(subFs * 1.42);

    const exNeededH = 28 + exLines.length * subLh;
    const miscNeededH = rawMisconception && miscLines.length > 0 ? 28 + miscLines.length * subLh : 0;
    const totalNeededH = exNeededH + (miscNeededH > 0 ? 14 + miscNeededH : 0);

    if (totalNeededH <= availableSubH || subFs === 9) {
      chosenSubFs = subFs;
      chosenExLines = exLines;
      chosenMiscLines = miscLines;
      break;
    }
  }

  const subLh = Math.round(chosenSubFs * 1.42);

  // 1. Draw Definition Box (1:1 font & styling with Book & Annotation cards)
  ctx.fillStyle = '#171921';
  ctx.fillRect(rightX, quoteY, maxRightW, defQuoteH);

  ctx.fillStyle = '#d4af37';
  ctx.fillRect(rightX, quoteY, 4, defQuoteH);

  drawDoubleQuoteIcon(ctx, rightX + 24, quoteY + 22, '#d4af37');

  ctx.fillStyle = '#d8dcde';
  ctx.font = `italic ${chosenDefFs}px Lora, serif`;
  ctx.textAlign = 'left';

  for (let i = 0; i < chosenDefLines.length; i++) {
    ctx.fillText(chosenDefLines[i], rightX + 56, quoteY + 22 + i * defLh);
  }

  // 2. Draw Real World Example Section (Pushed down with generous spacing and dynamic font scaling)
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 11px Inter, sans-serif';
  ctx.fillText('REAL WORLD EXAMPLE', rightX, explY + 10);

  let curExY = explY + 28;
  ctx.font = `${chosenSubFs}px Inter, sans-serif`;

  ctx.fillStyle = '#d4af37';
  ctx.fillText('•', rightX, curExY);

  ctx.fillStyle = '#cbd3df';
  for (let i = 0; i < chosenExLines.length; i++) {
    ctx.fillText(chosenExLines[i], rightX + 18, curExY + i * subLh);
  }

  const exTotalY = curExY + (chosenExLines.length - 1) * subLh;

  // 3. Draw Common Misconception Section (Pushed to Bottom with generous spacing and dynamic font scaling)
  if (rawMisconception && chosenMiscLines.length > 0) {
    const miscY = exTotalY + 18;
    ctx.fillStyle = '#c42626';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillText('COMMON MISCONCEPTION', rightX, miscY + 10);

    let curMiscY = miscY + 28;
    ctx.font = `${chosenSubFs}px Inter, sans-serif`;

    ctx.fillStyle = '#c42626';
    ctx.fillText('•', rightX, curMiscY);

    ctx.fillStyle = '#e2b3b3';
    for (let i = 0; i < chosenMiscLines.length; i++) {
      ctx.fillText(chosenMiscLines[i], rightX + 18, curMiscY + i * subLh);
    }
  }

  return canvas;
}

/**
 * Generate Annotation Card Canvas
 */
export async function generateAnnotationCardCanvas(data: {
  bookTitle: string;
  author: string;
  targetText: string;
  summary?: string;
  explanation?: string;
  context?: string;
  coverGradient?: string;
  authorImageUrl?: string | null;
}): Promise<HTMLCanvasElement> {
  await prepareFonts();

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d')!;

  drawBackdrop(ctx);

  // Left Cover Emblem
  const coverX = 65;
  const coverY = 65;
  const coverW = 330;
  const coverH = 500;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.fillRect(coverX + 12, coverY + 12, coverW, coverH);

  const bgGrad = data.coverGradient || getAuthorCoverGradient(data.author);
  applyCoverBackground(ctx, coverX, coverY, coverW, coverH, bgGrad);

  const authorImgSrc = data.authorImageUrl || getAuthorImageUrl(data.author);
  if (authorImgSrc) {
    const authorImg = await loadWebImage(authorImgSrc);
    if (authorImg) {
      drawCoverAuthorImage(ctx, authorImg, coverX, coverY, coverW, coverH);
    }
  }

  drawStar(ctx, coverX + coverW - 35, coverY + 45, 5, 14, 6, '#c48b2c');

  ctx.save();
  ctx.fillStyle = '#ffffff';
  let titleFontSize = 26;
  if (data.bookTitle.length > 25) titleFontSize = 22;
  if (data.bookTitle.length > 35) titleFontSize = 18;
  ctx.font = `bold ${titleFontSize}px Lora, serif`;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  drawCenteredText(ctx, data.bookTitle, coverX + coverW * 0.5, coverY + 140, coverW - 56, titleFontSize + 10, 4);
  ctx.restore();

  // Draw prominent MarxSimplified logo above author name on book cover with black drop shadow
  const logoImg = await loadWebImage('/images/logo/logo.png');
  const logoCenterY = coverY + coverH - 85;
  if (logoImg) {
    const origW = logoImg.naturalWidth || logoImg.width || 120;
    const origH = logoImg.naturalHeight || logoImg.height || 40;
    const targetH = 62;
    const targetW = (origW / origH) * targetH;

    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;
    ctx.drawImage(logoImg, coverX + coverW * 0.5 - targetW * 0.5, logoCenterY - targetH * 0.5, targetW, targetH);
    ctx.restore();
  }

  ctx.save();
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 14px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 2;
  ctx.fillText(data.author.toUpperCase(), coverX + coverW * 0.5, coverY + coverH - 26);
  ctx.restore();

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

  const rightX = 435;
  const maxRightW = 705;

  let rawSummary = cleanTextPreservingNewlines(data.summary || '');
  const rawTargetText = cleanTextPreservingNewlines(data.targetText || '');
  let rawExplanation = cleanTextPreservingNewlines(data.explanation || data.context || '');

  if (rawExplanation === rawSummary) {
    rawExplanation = '';
  }
  if (!rawSummary && rawExplanation) {
    rawSummary = rawExplanation;
    rawExplanation = '';
  }

  ctx.fillStyle = '#ffffff';
  let mainTitleFontSize = 30;
  if (data.bookTitle.length > 30) mainTitleFontSize = 25;
  if (data.bookTitle.length > 45) mainTitleFontSize = 21;
  ctx.font = `bold ${mainTitleFontSize}px Lora, serif`;
  ctx.textAlign = 'left';
  const titleLinesCount = drawText(ctx, data.bookTitle, rightX, 60, maxRightW, mainTitleFontSize + 8, 2);

  const authorY = 60 + titleLinesCount * (mainTitleFontSize + 8) + 4;
  ctx.fillStyle = '#8e96a2';
  ctx.font = '14px Inter, sans-serif';
  ctx.fillText('By ', rightX, authorY);

  const byWidth = ctx.measureText('By ').width;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'italic 16px Lora, serif';
  ctx.fillText(data.author, rightX + byWidth, authorY);

  const dividerY = authorY + 12;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(rightX, dividerY);
  ctx.lineTo(rightX + maxRightW, dividerY);
  ctx.stroke();

  const startY = dividerY + 14;
  const availableH = 565 - startY;

  const candidateSubFontSizes = [16.5, 15.5, 14.5, 13.5, 12.5, 11.5, 10.5, 9.5, 9];
  let chosenFs = 16.5;
  let chosenQuoteFs = 19.5;
  let chosenSummaryLines: string[] = [];
  let chosenQuoteLines: string[] = [];
  let chosenExplLines: string[] = [];

  let formattedQuote = rawTargetText;
  if (formattedQuote && !formattedQuote.startsWith('“') && !formattedQuote.startsWith('"')) {
    formattedQuote = `“${formattedQuote}”`;
  }

  const labelGap = 30;
  const interSectionGap = 20;

  for (const subFs of candidateSubFontSizes) {
    const qFs = Math.max(subFs + 2.5, Math.round(subFs * 1.15));
    const lhBody = Math.round(subFs * 1.4);
    const lhQuote = Math.round(qFs * 1.42);

    ctx.font = `${subFs}px Inter, sans-serif`;
    const sLines = rawSummary ? wrapText(ctx, rawSummary, maxRightW - 25) : [];
    const eLines = rawExplanation ? wrapText(ctx, rawExplanation, maxRightW - 25) : [];

    ctx.font = `italic ${qFs}px Lora, serif`;
    const qLines = formattedQuote ? wrapText(ctx, formattedQuote, maxRightW - 68) : [];

    const quoteH = qLines.length > 0 ? (24 + qLines.length * lhQuote + 28) : 0;
    const summaryH = sLines.length > 0 ? (labelGap + sLines.length * lhBody) : 0;
    const explH = eLines.length > 0 ? (labelGap + eLines.length * lhBody) : 0;

    let activeCount = 0;
    if (qLines.length > 0) activeCount++;
    if (sLines.length > 0) activeCount++;
    if (eLines.length > 0) activeCount++;

    const gaps = activeCount > 1 ? (activeCount - 1) * interSectionGap : 0;
    const totalNeededH = quoteH + summaryH + explH + gaps;

    if (totalNeededH <= availableH || subFs === 9) {
      chosenFs = subFs;
      chosenQuoteFs = qFs;
      chosenSummaryLines = sLines;
      chosenQuoteLines = qLines;
      chosenExplLines = eLines;
      break;
    }
  }

  const lhBody = Math.round(chosenFs * 1.4);
  const lhQuote = Math.round(chosenQuoteFs * 1.42);

  let curY = startY;

  // 1. ORIGINAL EXCERPT (Quote at top)
  if (chosenQuoteLines.length > 0) {
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('ORIGINAL EXCERPT', rightX, curY + 11);

    curY += 24;
    const qBoxH = chosenQuoteLines.length * lhQuote + 28;

    ctx.fillStyle = '#171921';
    ctx.fillRect(rightX, curY, maxRightW, qBoxH);

    ctx.fillStyle = '#d4af37';
    ctx.fillRect(rightX, curY, 4, qBoxH);

    drawDoubleQuoteIcon(ctx, rightX + 24, curY + 22, '#d4af37');

    ctx.fillStyle = '#d8dcde';
    ctx.font = `italic ${chosenQuoteFs}px Lora, serif`;
    ctx.textAlign = 'left';

    for (let i = 0; i < chosenQuoteLines.length; i++) {
      ctx.fillText(chosenQuoteLines[i], rightX + 56, curY + 22 + i * lhQuote);
    }

    curY += qBoxH + interSectionGap;
  }

  // 2. SIMPLIFIED MEANING (Below quote, above detailed analysis)
  if (chosenSummaryLines.length > 0) {
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('SIMPLIFIED MEANING', rightX, curY + 11);

    curY += labelGap;
    ctx.font = `${chosenFs}px Inter, sans-serif`;
    ctx.fillStyle = '#d4af37';
    ctx.fillText('•', rightX, curY);

    ctx.fillStyle = '#f0f4f8';
    for (let i = 0; i < chosenSummaryLines.length; i++) {
      ctx.fillText(chosenSummaryLines[i], rightX + 18, curY + i * lhBody);
    }
    curY += (chosenSummaryLines.length - 1) * lhBody + interSectionGap + 4;
  }

  // 3. DETAILED ANALYSIS (Below simplified meaning)
  if (chosenExplLines.length > 0) {
    ctx.fillStyle = '#60a5fa';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('DETAILED ANALYSIS', rightX, curY + 11);

    curY += labelGap;
    ctx.font = `${chosenFs}px Inter, sans-serif`;
    ctx.fillStyle = '#60a5fa';
    ctx.fillText('•', rightX, curY);

    ctx.fillStyle = '#cbd3df';
    for (let i = 0; i < chosenExplLines.length; i++) {
      ctx.fillText(chosenExplLines[i], rightX + 18, curY + i * lhBody);
    }
  }

  return canvas;
}

/**
 * Generate Country History Card Canvas
 */
export async function generateHistoryCardCanvas(country: {
  name: string;
  shortName?: string;
  flagUrl?: string;
  coverImage?: string;
  era?: string;
  governingIdeology?: string;
  overviewText: string;
}): Promise<HTMLCanvasElement> {
  await prepareFonts();

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#0f1015';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = '#14151c';
  ctx.fillRect(25, 25, 1150, 580);
  ctx.strokeStyle = '#222530';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(25, 25, 1150, 580);

  if (country.coverImage) {
    const coverImg = await loadWebImage(country.coverImage);
    if (coverImg) {
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
    }
  }

  const cx = 600;
  const displayName = country.shortName || country.name;

  let flagImg: HTMLImageElement | null = null;
  if (country.flagUrl) {
    flagImg = await loadWebImage(country.flagUrl);
  }

  ctx.font = 'bold 38px Lora, serif';
  const nameWidth = ctx.measureText(displayName).width;

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
    ctx.fillText(displayName, startX + 60, titleY);
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(displayName, cx, titleY);
  }

  const subText = `${country.era || 'Historical Era'}  •  ${country.governingIdeology || 'Socialist Development'}`;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'italic 16.5px Lora, serif';
  ctx.textAlign = 'center';
  ctx.fillText(subText, cx, titleY + 34);

  const dividerY = titleY + 50;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, dividerY);
  ctx.lineTo(1100, dividerY);
  ctx.stroke();

  const ovY = dividerY + 16;
  ctx.fillStyle = '#d4af37';
  ctx.font = 'bold 11px Outfit, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('HISTORICAL OVERVIEW', 75, ovY + 10);

  const quoteY = ovY + 22;
  const maxAvailableH = 550 - quoteY;

  const rawOverview = cleanTextPreservingNewlines(country.overviewText || '');
  const paragraphs = rawOverview.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  const maxTextW = 940;
  const candidateFontSizes = [17.5, 16, 15, 14, 13, 12, 11, 10];

  let chosenFontSize = 14;
  let chosenLineHeight = 22;
  let chosenGap = 10;
  let chosenParagraphLines: string[][] = [];

  for (const fs of candidateFontSizes) {
    ctx.font = `italic ${fs}px Lora, serif`;
    const lh = Math.round(fs * 1.5);
    const gap = Math.round(fs * 0.55);
    const paraLinesList: string[][] = [];
    let totalLinesCount = 0;

    for (const para of paragraphs) {
      const pLines = wrapText(ctx, para, maxTextW);
      paraLinesList.push(pLines);
      totalLinesCount += pLines.length;
    }

    const totalH = totalLinesCount * lh + (paragraphs.length - 1) * gap;
    if (totalH <= maxAvailableH || fs === 10) {
      chosenFontSize = fs;
      chosenLineHeight = lh;
      chosenGap = gap;
      chosenParagraphLines = paraLinesList;
      break;
    }
  }

  let totalRenderedLines = 0;
  for (const pLines of chosenParagraphLines) {
    totalRenderedLines += pLines.length;
  }
  const totalContentH = totalRenderedLines * chosenLineHeight + Math.max(0, chosenParagraphLines.length - 1) * chosenGap;
  const quoteH = Math.max(160, Math.min(550 - quoteY, totalContentH + 42));

  ctx.fillStyle = '#171921';
  ctx.fillRect(75, quoteY, 1050, quoteH);

  ctx.fillStyle = '#d4af37';
  ctx.fillRect(75, quoteY, 4, quoteH);

  drawDoubleQuoteIcon(ctx, 75 + 34, quoteY + 28, '#d4af37');

  ctx.fillStyle = '#d8dcde';
  ctx.font = `italic ${chosenFontSize}px Lora, serif`;
  ctx.textAlign = 'left';

  let currentY = quoteY + 28;
  for (let i = 0; i < chosenParagraphLines.length; i++) {
    const pLines = chosenParagraphLines[i];
    for (const lineText of pLines) {
      ctx.fillText(lineText, 75 + 68, currentY);
      currentY += chosenLineHeight;
    }
    if (i < chosenParagraphLines.length - 1) {
      currentY += chosenGap;
    }
  }

  await drawCardWatermark(ctx);
  return canvas;
}

/**
 * Generate Timeline Event Share Card Canvas
 */
export async function generateTimelineEventCardCanvas(data: {
  countryName: string;
  flagUrl?: string;
  coverImage?: string;
  title: string;
  period: string;
  summary: string;
  details?: string;
  keyFigures?: string[];
  sources?: { id: number; label: string; year?: string; url?: string; publisher?: string }[];
  citationIds?: number[];
}): Promise<HTMLCanvasElement> {
  await prepareFonts();

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#0f1015';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = '#14151c';
  ctx.fillRect(25, 25, 1150, 580);
  ctx.strokeStyle = '#222530';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(25, 25, 1150, 580);

  if (data.coverImage) {
    const coverImg = await loadWebImage(data.coverImage);
    if (coverImg) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(25, 25, 1150, 580);
      ctx.clip();

      ctx.globalAlpha = 0.22;
      ctx.drawImage(coverImg, 25, 25, 1150, 500);

      const fadeGrad = ctx.createLinearGradient(25, 25, 25, 480);
      fadeGrad.addColorStop(0, 'rgba(20, 21, 28, 0.45)');
      fadeGrad.addColorStop(0.65, 'rgba(20, 21, 28, 0.88)');
      fadeGrad.addColorStop(1, 'rgba(20, 21, 28, 1.0)');

      ctx.globalAlpha = 1.0;
      ctx.fillStyle = fadeGrad;
      ctx.fillRect(25, 25, 1150, 500);
      ctx.restore();
    }
  }

  const leftX = 65;

  // Draw Top Left Country Header (Flag and Country Name)
  let headerTextX = leftX;
  if (data.flagUrl) {
    const flagImg = await loadWebImage(data.flagUrl);
    if (flagImg) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(leftX, 45, 26, 18);
      ctx.clip();
      ctx.drawImage(flagImg, leftX, 45, 26, 18);
      ctx.restore();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.strokeRect(leftX, 45, 26, 18);
      headerTextX = leftX + 34;
    }
  }

  if (data.countryName) {
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(data.countryName.toUpperCase(), headerTextX, 58);
  }

  ctx.fillStyle = '#ffffff';
  let titleFontSize = 32;
  if (data.title.length > 35) titleFontSize = 26;
  if (data.title.length > 50) titleFontSize = 22;
  ctx.font = `bold ${titleFontSize}px Lora, serif`;
  ctx.textAlign = 'left';
  const titleLinesCount = drawText(ctx, data.title, leftX, 85, 800, titleFontSize + 8, 2);

  const dividerY = 85 + titleLinesCount * (titleFontSize + 8) + 6;

  if (data.keyFigures && data.keyFigures.length > 0) {
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillText('KEY FIGURES: ', leftX, dividerY + 4);
    const figuresText = data.keyFigures.join('  •  ');
    ctx.fillStyle = '#e2e2ec';
    ctx.font = '14px Inter, sans-serif';
    ctx.fillText(figuresText, leftX + 95, dividerY + 4);
  }

  // Extract Dynamic Citation References ([1], [2], etc.)
  const textToScan = `${data.summary || ''} ${data.details || ''}`;
  const matchedIds = new Set<number>();
  const matches = textToScan.matchAll(/\[(\d+)\]/g);
  for (const m of matches) {
    const num = parseInt(m[1], 10);
    if (!isNaN(num)) matchedIds.add(num);
  }
  if (data.citationIds) {
    for (const id of data.citationIds) {
      matchedIds.add(id);
    }
  }
  const sortedCitationIds = Array.from(matchedIds).sort((a, b) => a - b);

  const sourceItems: string[] = [];
  if (data.sources && data.sources.length > 0) {
    for (const id of sortedCitationIds) {
      const found = data.sources.find((s) => s.id === id);
      if (found && found.label) {
        let itemStr = `[${id}] ${found.label}`;
        const metaParts: string[] = [];
        if (found.year) {
          metaParts.push(found.year);
        }
        if (found.url) {
          const domain = found.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
          if (domain) metaParts.push(domain);
        }
        if (metaParts.length > 0) {
          itemStr += ` (${metaParts.join(' • ')})`;
        }
        sourceItems.push(itemStr);
      }
    }
  }

  const hasSources = sourceItems.length > 0;
  const fullSourcesStr = hasSources ? sourceItems.join('   •   ') : '';

  // Measure multi-line sources wrapping
  ctx.font = '9.5px Inter, sans-serif';
  const sourceLines = hasSources ? wrapText(ctx, fullSourcesStr, 980) : [];
  const sourceLineCount = Math.min(sourceLines.length, 3);
  const sourceLineHeight = 13;
  const sourcesStartY = hasSources ? (585 - (sourceLineCount - 1) * sourceLineHeight) : 585;

  const bottomMargin = hasSources ? (sourcesStartY - 14) : 565;
  const quoteY = dividerY + 16;
  const maxAvailableH = bottomMargin - quoteY - 20;

  const rawSummary = cleanTextPreservingNewlines(data.summary || '');
  const rawDetails = cleanTextPreservingNewlines(data.details || '');

  // Determine if summary is separate from details
  const hasDistinctSummary = Boolean(
    rawSummary &&
    rawDetails &&
    !rawDetails.toLowerCase().startsWith(rawSummary.toLowerCase().slice(0, 20))
  );

  const summaryParagraphs = hasDistinctSummary
    ? rawSummary.split(/\n+/).map((p) => p.trim()).filter(Boolean)
    : [];
  const detailsParagraphs = (hasDistinctSummary ? rawDetails : (rawDetails || rawSummary))
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const maxTextW = 960;
  const candidateFontSizes = [17.5, 16, 15, 14, 13, 12, 11, 10];

  let chosenFontSize = 14;
  let chosenLineHeight = 22;
  let chosenGap = 10;
  let chosenSummaryLinesList: string[][] = [];
  let chosenDetailsLinesList: string[][] = [];

  for (const fs of candidateFontSizes) {
    const lh = Math.round(fs * 1.5);
    const gap = Math.round(fs * 0.55);

    // Measure summary paragraphs with bold font
    ctx.font = `italic bold ${fs}px Lora, serif`;
    const sLinesList = summaryParagraphs.map((p) => wrapText(ctx, p, maxTextW));
    let sLinesCount = 0;
    sLinesList.forEach((l) => (sLinesCount += l.length));

    // Measure details paragraphs with regular font
    ctx.font = `italic 400 ${fs}px Lora, serif`;
    const dLinesList = detailsParagraphs.map((p) => wrapText(ctx, p, maxTextW));
    let dLinesCount = 0;
    dLinesList.forEach((l) => (dLinesCount += l.length));

    const totalLinesCount = sLinesCount + dLinesCount;
    const totalParasCount = summaryParagraphs.length + detailsParagraphs.length;
    const dividerSpacing = hasDistinctSummary ? 14 : 0;

    const totalH = totalLinesCount * lh + (totalParasCount - 1) * gap + dividerSpacing;
    if (totalH <= maxAvailableH || fs === 10) {
      chosenFontSize = fs;
      chosenLineHeight = lh;
      chosenGap = gap;
      chosenSummaryLinesList = sLinesList;
      chosenDetailsLinesList = dLinesList;
      break;
    }
  }

  let totalRenderedLines = 0;
  chosenSummaryLinesList.forEach((l) => (totalRenderedLines += l.length));
  chosenDetailsLinesList.forEach((l) => (totalRenderedLines += l.length));

  const totalParasCount = chosenSummaryLinesList.length + chosenDetailsLinesList.length;
  const dividerSpacing = hasDistinctSummary ? 14 : 0;
  const totalContentH =
    totalRenderedLines * chosenLineHeight +
    Math.max(0, totalParasCount - 1) * chosenGap +
    dividerSpacing;
  const quoteH = Math.max(140, Math.min(bottomMargin - quoteY, totalContentH + 42));

  ctx.fillStyle = '#171921';
  ctx.fillRect(leftX, quoteY, 1070, quoteH);

  ctx.fillStyle = '#d4af37';
  ctx.fillRect(leftX, quoteY, 4, quoteH);

  drawDoubleQuoteIcon(ctx, leftX + 34, quoteY + 28, '#d4af37');

  let currentY = quoteY + 28;

  // Render Summary Block (Bold Warm Gold Text)
  if (hasDistinctSummary && chosenSummaryLinesList.length > 0) {
    ctx.fillStyle = '#e5c158';
    ctx.font = `italic bold ${chosenFontSize}px Lora, serif`;
    ctx.textAlign = 'left';

    for (let i = 0; i < chosenSummaryLinesList.length; i++) {
      const sLines = chosenSummaryLinesList[i];
      for (const lineText of sLines) {
        ctx.fillText(lineText, leftX + 68, currentY);
        currentY += chosenLineHeight;
      }
      if (i < chosenSummaryLinesList.length - 1) {
        currentY += chosenGap;
      }
    }

    // Subtle Gold Divider Line
    currentY += 4;
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftX + 68, currentY);
    ctx.lineTo(leftX + 1020, currentY);
    ctx.stroke();
    currentY += 14;
  }

  // Render Details Block (Soft Silver Text)
  ctx.fillStyle = '#d8dcde';
  ctx.font = `italic 400 ${chosenFontSize}px Lora, serif`;
  ctx.textAlign = 'left';

  for (let i = 0; i < chosenDetailsLinesList.length; i++) {
    const dLines = chosenDetailsLinesList[i];
    for (const lineText of dLines) {
      ctx.fillText(lineText, leftX + 68, currentY);
      currentY += chosenLineHeight;
    }
    if (i < chosenDetailsLinesList.length - 1) {
      currentY += chosenGap;
    }
  }

  // Draw Tiny Multi-Line Sources at Far Bottom
  if (hasSources) {
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 9.5px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('SOURCES:', leftX, sourcesStartY);

    ctx.fillStyle = '#8e929f';
    ctx.font = '9.5px Inter, sans-serif';
    drawText(ctx, fullSourcesStr, leftX + 68, sourcesStartY, 980, sourceLineHeight, 3);
  }

  await drawCardWatermark(ctx);
  return canvas;
}
