const fs = require('fs');
const catMap = JSON.parse(fs.readFileSync('src/data/topicCategories.json', 'utf8'));

function getTopicSlug(topic) {
  return topic
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[/\\]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const allTopics = Object.keys(catMap).map(name => ({
  name,
  slug: getTopicSlug(name)
}));

['fascism', 'nazi', 'coop', 'co-op', 'reduct', 'race', 'gender', 'innovat', 'motivat', 'defector', 'korea', 'dprk', 'refugee', 'migrat', 'cuban', 'exile', 'class-struggle', 'materialism'].forEach(term => {
  const matches = allTopics.filter(t => t.name.toLowerCase().includes(term) || t.slug.includes(term));
  console.log(`\nMatches for "${term}":`, matches);
});
