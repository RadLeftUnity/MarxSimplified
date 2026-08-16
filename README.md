# Marx Simplified

Marx Simplified is an interactive web application designed to make classic Marxist texts accessible and readable for everyone. It presents original historical texts alongside simplified summaries, paragraph-by-paragraph annotations, modern context explanations, and an interactive glossary of terms.

## Features

- **Interactive Reader**: View original texts alongside simplified summaries and line-by-line annotations.
- **Key Concepts and Takeaways**: Each chapter includes curated background context, key takeaways, and real-world relevance to modern events.
- **Dynamic Glossary**: Interactive term highlights throughout texts that display clear definitions for key economic and political terms.
- **Automated Book Importing**: Custom tooling to import, clean, and format public-domain texts from marxists.org.
- **Annotation Verification**: Validation tools to ensure all chapter annotations match existing text content cleanly.

## How It Works

1. **Text Storage and Manifest**: Book content is stored in `public/data/books/` in organized chapter folders. A central manifest (`public/data/manifest.json`) defines book metadata, chapter titles, reading times, and difficulty ratings.
2. **Frontend Application**: Built with React, TypeScript, and Vite. The user interface fetches chapter text files, summary files, and annotation JSON files dynamically as the user navigates through books.
3. **Glossary Engine**: Terms defined in `src/data/glossary.tsx` automatically scan chapter text using pattern matching to highlight defined vocabulary for readers.
4. **Import Tooling**: The script at `tools/import-book.js` automatically downloads book HTML from marxists.org, parses chapter links, strips formatting, fixes typographical inconsistencies, and updates the site manifest.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

## Available Scripts

- `npm run dev`: Starts the local Vite development server.
- `npm run build`: Compiles TypeScript and builds the production bundle.
- `npm run preview`: Previews the local production build.
- `npm run lint`: Runs Oxlint to check code quality.
- `npm run test`: Runs the annotation verification script (`scripts/verify-annotations.js`).

## Adding New Books

New books can be imported automatically using the import tool:

```bash
node tools/import-book.js <book-id> <marxists-org-index-url>
```

Example:
```bash
node tools/import-book.js imperialism https://www.marxists.org/archive/lenin/works/1916/imp-hsc/index.htm
```

The script performs the following tasks:
- Downloads the table of contents and chapter HTML files.
- Extracts clean plain text for each chapter.
- Replaces em-dashes with standard colons or punctuation.
- Generates preliminary summary files and updates `public/data/manifest.json`.

After importing a book, you can edit its metadata and add detailed annotations in `public/data/books/<book-id>/`.
