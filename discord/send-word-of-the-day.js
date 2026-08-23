import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const GLOSSARY_DIR = path.resolve(__dirname, '../src/data/glossary');

// Default target categories if not specified in environment
const DEFAULT_ALLOWED_CATEGORIES = ['Marxism-Leninism', 'Maoism', 'Marxist Feminism'];
// Default excluded categories when accepting all categories
const DEFAULT_EXCLUDED_CATEGORIES = ['Capitalist Theory', 'Bourgeois Philosophy'];

// Load environment variables from .env, .env.local, or discord-webhook.json
function loadEnv() {
  const envPaths = ['.env.local', '.env'];
  for (const envPath of envPaths) {
    const fullPath = path.resolve(process.cwd(), envPath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      }
    }
  }

  const jsonPath = path.resolve(process.cwd(), 'discord-webhook.json');
  if (fs.existsSync(jsonPath)) {
    try {
      const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      if (jsonContent.url && !process.env.DISCORD_WEBHOOK_URL) {
        process.env.DISCORD_WEBHOOK_URL = jsonContent.url;
      }
      if (jsonContent.siteUrl && !process.env.SITE_URL) {
        process.env.SITE_URL = jsonContent.siteUrl;
      }
      if (jsonContent.allowedCategories && !process.env.ALLOWED_CATEGORIES) {
        process.env.ALLOWED_CATEGORIES = Array.isArray(jsonContent.allowedCategories)
          ? jsonContent.allowedCategories.join(',')
          : jsonContent.allowedCategories;
      }
      if (jsonContent.excludedCategories && !process.env.EXCLUDED_CATEGORIES) {
        process.env.EXCLUDED_CATEGORIES = Array.isArray(jsonContent.excludedCategories)
          ? jsonContent.excludedCategories.join(',')
          : jsonContent.excludedCategories;
      }
    } catch {
      // Ignore JSON parse errors silently
    }
  }
}

// Normalize category tag for flexible matching (case-insensitive, alphanumeric only)
function normalizeTag(tag) {
  return (tag || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Check if term tag matches target category tag (handles variants like Marxist-Leninism vs Marxism-Leninism)
function isTagMatch(tag1, tag2) {
  const norm1 = normalizeTag(tag1);
  const norm2 = normalizeTag(tag2);
  if (norm1 === norm2) return true;
  if (norm1.replace('marxist', 'marxism') === norm2.replace('marxist', 'marxism')) return true;
  return false;
}

// Generate URL slug from glossary term title
function getTermSlug(term) {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Truncate strings cleanly for Discord embed field limits (1024 characters max)
function truncateText(text, maxLength = 1024) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

// Load all glossary terms from src/data/glossary/
function loadGlossaryTerms() {
  const files = fs.readdirSync(GLOSSARY_DIR).filter(
    (f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts' && f !== 'index.tsx'
  );

  const terms = [];
  for (const file of files) {
    const filePath = path.join(GLOSSARY_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    const jsonMatch = content.match(/export const \w+: GlossaryTerm\[\] = (\[[\s\S]*\]);?/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]);
        for (const t of parsed) {
          terms.push({ ...t, _sourceFile: file });
        }
      } catch (err) {
        console.warn(`Warning: Could not parse terms in ${file}: ${err.message}`);
      }
    }
  }
  return terms;
}

// Parse comma-separated list of categories from environment or CLI
function parseCategoryList(str, defaultList = []) {
  if (str === undefined || str === null) return defaultList;
  const trimmed = str.trim();
  if (!trimmed || trimmed.toLowerCase() === 'all' || trimmed.toLowerCase() === 'none') {
    return [];
  }
  return trimmed.split(',').map((c) => c.trim()).filter(Boolean);
}

async function main() {
  loadEnv();

  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run') || args.includes('-d');
  
  let targetTermName = null;
  const termArg = args.find((a) => a.startsWith('--term='));
  if (termArg) {
    targetTermName = termArg.split('=').slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
  }

  // Parse allowed and excluded category lists
  let allowedCategories = DEFAULT_ALLOWED_CATEGORIES;
  let excludedCategories = DEFAULT_EXCLUDED_CATEGORIES;

  const categoriesArg = args.find((a) => a.startsWith('--categories='));
  if (categoriesArg) {
    const val = categoriesArg.split('=').slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
    allowedCategories = parseCategoryList(val, []);
  } else if (process.env.ALLOWED_CATEGORIES !== undefined) {
    allowedCategories = parseCategoryList(process.env.ALLOWED_CATEGORIES, DEFAULT_ALLOWED_CATEGORIES);
  }

  const excludeArg = args.find((a) => a.startsWith('--exclude-categories='));
  if (excludeArg) {
    const val = excludeArg.split('=').slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
    excludedCategories = parseCategoryList(val, []);
  } else if (process.env.EXCLUDED_CATEGORIES !== undefined) {
    excludedCategories = parseCategoryList(process.env.EXCLUDED_CATEGORIES, DEFAULT_EXCLUDED_CATEGORIES);
  }

  const allTerms = loadGlossaryTerms();
  if (allTerms.length === 0) {
    console.error('Error: No glossary terms found in src/data/glossary/');
    process.exit(1);
  }

  let filteredTerms = [];

  if (targetTermName) {
    const found = allTerms.find((t) => t.term.toLowerCase() === targetTermName.toLowerCase());
    if (!found) {
      console.error(`Error: Glossary term "${targetTermName}" not found.`);
      process.exit(1);
    }
    filteredTerms = [found];
  } else {
    if (allowedCategories.length > 0) {
      // Post terms from allowed categories only
      filteredTerms = allTerms.filter((term) => {
        if (!term.theoryTags || term.theoryTags.length === 0) return false;
        return term.theoryTags.some((tag) =>
          allowedCategories.some((allowed) => isTagMatch(tag, allowed))
        );
      });
    } else {
      // Accepting all categories: exclude terms in excludedCategories list
      filteredTerms = allTerms.filter((term) => {
        if (!term.theoryTags || term.theoryTags.length === 0) return true;
        if (excludedCategories.length > 0) {
          const isExcluded = term.theoryTags.some((tag) =>
            excludedCategories.some((ex) => isTagMatch(tag, ex))
          );
          if (isExcluded) return false;
        }
        return true;
      });
    }

    if (filteredTerms.length === 0) {
      console.warn(`Warning: No terms matched category filters (Allowed: [${allowedCategories.join(', ')}], Excluded: [${excludedCategories.join(', ')}]). Falling back to all terms.`);
      filteredTerms = allTerms;
    }
  }

  const randomIndex = Math.floor(Math.random() * filteredTerms.length);
  const selectedTerm = filteredTerms[randomIndex];

  const siteUrl = (process.env.SITE_URL || 'https://marxsimplified.onrender.com').replace(/\/$/, '');
  const slug = getTermSlug(selectedTerm.term);
  const termUrl = `${siteUrl}/glossary#term-${slug}`;

  const fields = [
    {
      name: 'Definition',
      value: truncateText(selectedTerm.definition),
      inline: false,
    },
  ];

  const exampleText = selectedTerm.example || selectedTerm.dayToDayExample;
  if (exampleText) {
    fields.push({
      name: 'Example',
      value: truncateText(exampleText),
      inline: false,
    });
  }

  if (selectedTerm.misconception) {
    fields.push({
      name: 'Common Misconception',
      value: truncateText(selectedTerm.misconception),
      inline: false,
    });
  }

  if (selectedTerm.theoryTags && selectedTerm.theoryTags.length > 0) {
    fields.push({
      name: 'Theory Categories',
      value: truncateText(selectedTerm.theoryTags.join(', ')),
      inline: true,
    });
  }

  const embedPayload = {
    content: `**Word of the Day: ${selectedTerm.term}**\n${termUrl}`,
    embeds: [
      {
        author: {
          name: 'Marx Simplified Glossary',
          url: termUrl,
        },
        title: selectedTerm.term,
        url: termUrl,
        description: `Featured entry from the Marx Simplified interactive glossary.`,
        color: 0xc1121f, // Rich crimson red theme
        fields: fields,
        footer: {
          text: 'Marx Simplified Glossary',
        },
        timestamp: new Date().toISOString(),
      },
    ],
    components: [
      {
        type: 1, // Action Row
        components: [
          {
            type: 2, // Button
            style: 5, // Link Button
            label: `Read "${selectedTerm.term}" on Marx Simplified`,
            url: termUrl,
          },
        ],
      },
    ],
  };

  console.log(`\n=== Word of the Day: "${selectedTerm.term}" ===`);
  console.log(`Source File: ${selectedTerm._sourceFile}`);
  console.log(`Term Link: ${termUrl}`);
  console.log(`Category Filter Mode: ${allowedCategories.length > 0 ? `Allowed [${allowedCategories.join(', ')}]` : `Accepting All (Excluded: [${excludedCategories.join(', ')}])`}`);
  console.log(`Matching Pool Size: ${filteredTerms.length} / ${allTerms.length} terms`);

  if (isDryRun) {
    console.log('\n--- DRY RUN MODE (No POST sent) ---');
    console.log('Discord Webhook Payload JSON:');
    console.log(JSON.stringify(embedPayload, null, 2));
    process.exit(0);
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('\nError: DISCORD_WEBHOOK_URL is not configured.');
    console.error('Please create a .env file with DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...');
    console.error('Or set DISCORD_WEBHOOK_URL in your environment variables.');
    console.error('You can also run with --dry-run to test payload formatting without a webhook URL.');
    process.exit(1);
  }

  console.log('\nSending Discord Webhook POST request...');
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(embedPayload),
    });

    if (response.ok || response.status === 204) {
      console.log('Successfully posted Word of the Day to Discord Webhook!');
    } else {
      const errorText = await response.text();
      console.error(`Webhook request failed with status ${response.status}: ${errorText}`);
      process.exit(1);
    }
  } catch (err) {
    console.error(`Failed to send request to Discord Webhook: ${err.message}`);
    process.exit(1);
  }
}

main();
