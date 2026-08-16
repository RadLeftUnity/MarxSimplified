# Workspace Rules for MarxSimplified

## Formatting and Typography

- **Avoid Em-dashes**: Do not use em-dashes (`—` or `--`) in any newly created chapter summaries, sentence annotations, code comments, or user-facing documentation.
- **Alternatives**: Use colons (`:`), semicolons (`;`), parentheses (`( ... )`), or commas (`,`) instead of em-dashes to structure parenthetical thoughts or split sentences.
- **Historical Text Citing**: If copying or citing historical source text that contains an em-dash, replace it with a colon or parentheses to maintain absolute typographical consistency across original texts and annotations.

## Book Import Technique

All book chapter text files should be sourced directly from marxists.org using the automated import tool at `tools/import-book.js`.

- **New books**: Always use the import tool to create new book entries. Run:
  ```
  node tools/import-book.js <book-id> <marxists-org-index-url>
  ```
  The tool will crawl the index page, extract chapter titles and links, fetch and clean the HTML, strip formatting, replace em-dashes, and write clean plain-text chapter files. It also generates `summary.json` and updates `public/data/manifest.json`.

- **Existing books** (manifesto, wage-labour, grundrisse, value-price-profit): These were imported (or re-imported) using the same tool. After import, curated metadata (context, relatesToToday, keyTakeaways, coverGradient, difficulty, readingTime) and hand-written annotations and chapter summaries are restored manually.

- **Special cases**: Some books on marxists.org have complex analytical contents lists with dozens of subsection anchors (e.g., the Grundrisse). For these, manual chapter organization is preferred over blind tool import, as the tool would create an impractical number of tiny chapters.

## Glossary Variant Patterns

When adding glossary terms in `src/data/glossary.tsx`, the `pattern` field should include all common spelling variants, plurals, and alternate forms of the term separated by `|`. For example: `"class interest|class interests"`, `"bourgeoisie|bourgeois|bourgeoise"`. This ensures the glossary highlight system catches all variations in the source texts.
