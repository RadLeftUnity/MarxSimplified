const fs = require('fs');
const topicsIndex = JSON.parse(fs.readFileSync('public/data/topics-index.json', 'utf8'));
console.log('Total topics:', topicsIndex.totalTopics);
console.log('Topic names / slugs:');
Object.keys(topicsIndex.topics).forEach(slug => {
  const t = topicsIndex.topics[slug];
  console.log(`  ${slug} -> "${t.name}" (${t.annotations ? t.annotations.length : 0} anns)`);
});
