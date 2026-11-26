import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const topicCategoriesPath = path.join(workspaceRoot, 'src', 'data', 'topicCategories.json');
const topicsIndexPath = path.join(workspaceRoot, 'public', 'data', 'topics-index.json');
const faqDataPath = path.join(workspaceRoot, 'src', 'data', 'faq', 'faqData.ts');

function getTopicSlug(topic) {
  return topic
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[/\\]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function checkFaqTopics() {
  console.log('=== Running FAQ Related Topics Verification ===\n');

  if (!fs.existsSync(topicCategoriesPath)) {
    console.error(`Error: topicCategories.json not found at ${topicCategoriesPath}`);
    process.exit(1);
  }

  const categoryMap = JSON.parse(fs.readFileSync(topicCategoriesPath, 'utf8'));
  const validSlugs = new Set();
  const validNames = new Set();

  // Add all categoryMap keys and values
  for (const [key, value] of Object.entries(categoryMap)) {
    validNames.add(key.toLowerCase());
    validNames.add(value.toLowerCase());
    validSlugs.add(getTopicSlug(key));
    validSlugs.add(getTopicSlug(value));
  }

  // Add from topics-index.json if present
  if (fs.existsSync(topicsIndexPath)) {
    const topicIndex = JSON.parse(fs.readFileSync(topicsIndexPath, 'utf8'));
    if (Array.isArray(topicIndex.topics)) {
      topicIndex.topics.forEach((t) => {
        if (t.topic) validNames.add(t.topic.toLowerCase());
        if (t.slug) validSlugs.add(t.slug.toLowerCase());
      });
    }
  }

  console.log(`Loaded ${validSlugs.size} valid topic slugs across catalog.`);

  const faqContent = fs.readFileSync(faqDataPath, 'utf8');

  // Simple parser to extract FAQ items and their relatedTopics
  // Regex to extract items with relatedTopics
  const itemBlocks = faqContent.split(/\{\s*"id":/);
  let totalChecked = 0;
  let totalTopicsFound = 0;
  let hasErrors = false;

  for (let i = 1; i < itemBlocks.length; i++) {
    const block = itemBlocks[i];
    const idMatch = block.match(/^\s*"([^"]+)"/);
    if (!idMatch) continue;
    const itemId = idMatch[1];

    const relatedTopicsMatch = block.match(/"relatedTopics":\s*\[([\s\S]*?)\]/);
    if (relatedTopicsMatch) {
      totalChecked++;
      const topicsRaw = relatedTopicsMatch[1];
      const topics = [...topicsRaw.matchAll(/"([^"]+)"/g)].map((m) => m[1]);

      for (const topic of topics) {
        totalTopicsFound++;
        const slug = getTopicSlug(topic);
        const nameLower = topic.toLowerCase();

        if (!validSlugs.has(slug) && !validNames.has(nameLower)) {
          console.error(`❌ INVALID TOPIC in FAQ item [${itemId}]: "${topic}" (slug: "${slug}") does not match any recognized topic!`);
          hasErrors = true;
        }
      }
    }
  }

  console.log(`Verified ${totalChecked} FAQ items with a total of ${totalTopicsFound} topic links.`);

  if (hasErrors) {
    console.error('\n❌ FAQ topic validation failed: One or more topics do not exist.');
    process.exit(1);
  } else {
    console.log('✅ ALL FAQ RELATED TOPICS EXIST AND PASSED VALIDATION!\n');
  }
}

// Run directly if invoked from CLI
if (process.argv[1] && process.argv[1].endsWith('check-faq-topics.js')) {
  checkFaqTopics();
}
