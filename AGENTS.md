# Workspace Rules for MarxSimplified

## Formatting and Typography

- **Avoid Em-dashes**: Do not use em-dashes (`—` or `--`) in any newly created chapter summaries, sentence annotations, code comments, or user-facing documentation.
- **Alternatives**: Use colons (`:`), semicolons (`;`), parentheses (`( ... )`), or commas (`,`) instead of em-dashes to structure parenthetical thoughts or split sentences.
- **Historical Text Citing**: If copying or citing historical source text that contains an em-dash, replace it with a colon or parentheses to maintain absolute typographical consistency across original texts and annotations.
- **Avoid Heavy Use of Ampersands (`&`)**: Avoid unnecessary ampersands (`&` or `&amp;`) in UI labels, tab headers, section titles, country metadata, and prose annotations. Use the word `and` or concise rephrasing instead (e.g., `Timeline and History` instead of `Timeline & History`, `Primary Allies and Solidarity Partners` instead of `Primary Allies & Solidarity Partners`). Reserve `&` only for official proper names or established brand trademarks where indispensable.

## Book Import Technique

All book chapter text files should be sourced directly from marxists.org using the automated import tool at `tools/import-book.js`.

- **New books**: Always use the import tool to create new book entries. Run:
  ```
  node tools/import-book.js <book-id> <marxists-org-index-url>
  ```
  The tool will crawl the index page, extract chapter titles and links, fetch and clean the HTML, strip formatting, replace em-dashes, and write clean plain-text chapter files. It also generates `summary.json` and updates `public/data/manifest.json`.

- **Existing books** (manifesto, wage-labour, grundrisse, value-price-profit): These were imported (or re-imported) using the same tool. After import, curated metadata (context, relatesToToday, keyTakeaways, coverGradient, difficulty, readingTime) and hand-written annotations and chapter summaries are restored manually.

- **Special cases**: Some books on marxists.org have complex analytical contents lists with dozens of subsection anchors (e.g., the Grundrisse). For these, manual chapter organization is preferred over blind tool import, as the tool would create an impractical number of tiny chapters.

## Mandatory Glossary Coverage for Organizations, Operations, and Events

Whenever introducing or referencing specific political organizations (e.g., `People's Defence Force`, `Communist Party of Burma`, `National Endowment for Democracy`), covert imperialist operation codenames (e.g., `Operation Cyclone`, `Operation Yellowbird`, `Operation Gideon`, `Operation Paper`), or multilateral alliances and movements (e.g., `BRICS`, `Color Revolution`, `ETIM`) in country history modules, chapter annotations, or educational entries:

- **Create Dedicated Glossary Entries**: Always ensure corresponding glossary entries exist in `src/data/glossary/` so that users can instantly hover/click to view definitions via the automated jargon-highlighting system.
- **Pattern Variants**: Include all acronyms, common misspellings, and variant names separated by `|` in the `pattern` string.
- **Zero Em-Dash Compliance**: Adhere strictly to the zero em-dash rule in all definitions, misconceptions, and examples.
- **Verification**: Always run `node tools/check-glossary.js` and ensure it passes with exit code 0 before completing tasks.

## Glossary Variant Patterns

When adding glossary terms in `src/data/glossary/`, the `pattern` field should include all common spelling variants, plurals, and alternate forms of the term separated by `|`. For example: `"class interest|class interests"`, `"bourgeoisie|bourgeois|bourgeoise"`. This ensures the glossary highlight system catches all variations in the source texts.

## Concise Glossary Term Titles

When creating or editing glossary terms in `src/data/glossary/`:
- **Avoid Unnecessary Ampersands (`&`)**: Keep term titles concise and clean (e.g. `"United Fruit Company"` instead of `"United Fruit Company (UFCO) & Chiquita"`, `"COINTELPRO"` instead of `"FBI COINTELPRO & Domestic Counter-Subversion"`).
- **Secondary Names & Aliases**: Include alternate names, acronyms, or secondary labels in the `pattern` string for matching, and mention them in the `definition` prose (e.g., "Also known as Chiquita Brands International..."). Use `/` sparingly only when indispensable.

## Valid TheoryTags Requirement

Every tag in a term's `theoryTags` array MUST strictly be an official `TheoryTag` value defined in `src/data/glossary/types.ts` (e.g., `'Classical Marxism'`, `'Marxism-Leninism'`, `'Anti-Colonial Socialism'`, `'Capitalist Theory'`, `'Fascism Analysis'`, `'Neo-Marxism'`, `'Western Marxism'`, etc.). Do NOT invent ad-hoc theory tags.

## Glossary Automated Verification

Whenever creating, editing, or refactoring glossary terms or files in `src/data/glossary/`, you MUST run the automated glossary verification test suite:
```bash
node tools/check-glossary.js
```
The test checks for duplicate term names, slug collisions, overlapping regex pattern variants, missing mandatory fields, invalid theory tags, and em-dash rule violations across all glossary files. Always verify that `node tools/check-glossary.js` passes with exit code 0 before completing tasks.

## GitHub Actions and Git Pushes Rule

- **Do Not Trigger or Create GitHub Actions**: Do not create, modify, or run GitHub Actions workflows, or execute `git push` commands, unless explicitly instructed by the user. All workflow modifications and remote git pushes must be requested by the user.

