import fs from 'fs';

async function main() {
  const url = 'https://www.marxists.org/archive/marx/works/1865/value-price-profit/ch01.htm';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: status ${res.status}`);
    }
    const html = await res.text();
    fs.writeFileSync('c:/Users/intel/.gemini/antigravity-ide/brain/389b5d8b-5a78-44bd-8ccb-07ce0d77ea72/scratch/ch01.html', html);
    console.log('HTML fetched successfully. Length:', html.length);
  } catch (err) {
    console.error('Error fetching:', err);
  }
}

main();
