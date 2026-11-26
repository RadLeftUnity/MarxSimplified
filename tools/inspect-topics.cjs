const fs = require('fs');
const path = require('path');

if (fs.existsSync('public/data/topics-index.json')) {
  const topicsIndex = JSON.parse(fs.readFileSync('public/data/topics-index.json', 'utf8'));
  console.log('topics-index.json keys or length:', Array.isArray(topicsIndex) ? topicsIndex.length : Object.keys(topicsIndex));
  if (Array.isArray(topicsIndex)) {
    console.log('Sample item:', topicsIndex[0]);
  } else {
    console.log('Sample keys:', Object.keys(topicsIndex).slice(0, 10));
  }
}

// Check tools/build-topic-index.js
if (fs.existsSync('tools/build-topic-index.js')) {
  console.log('build-topic-index.js exists!');
}
