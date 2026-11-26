const fs = require('fs');

const content = fs.readFileSync('src/data/faq/faqData.ts', 'utf8');

// We can search for the question by id and print its detailedAnswer
function getDetailed(id) {
  const re = new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"detailedAnswer":\\s*"([\\s\\S]*?)"\\s*,\\s*\\n\\s*"takeaways":`);
  const m = content.match(re);
  return m ? m[1] : null;
}

const checkIds = [
  'ussr-dissolution-and-referendum',
  'cuba-shortages-and-us-blockade',
  'is-national-socialism-a-form-of-socialism',
  'can-worker-cooperatives-replace-capitalism',
  'would-communism-kill-innovation',
  'why-did-people-flee-communist-countries',
  'north-korean-defectors-and-media-distortions',
  'who-works-undesirable-dangerous-jobs-under-communism',
  'marxist-stance-on-automation-and-ai',
  'organizing-workers-with-reactionary-views',
  'why-marxists-focus-on-imperialism-and-multipolarity',
  'ethical-consumption-and-boycotting-under-capitalism',
  'purpose-of-strikes-and-wage-increases',
  'do-communists-just-want-higher-taxes-on-the-rich',
  'rich-workers-and-poor-capitalists-class-definition'
];

checkIds.forEach(id => {
  const d = getDetailed(id);
  console.log(`=== ${id} ===`);
  if (!d) {
    console.log('NOT FOUND!');
  } else {
    // Print lines with key phrases
    const lines = d.split('\\n\\n');
    lines.forEach((l, idx) => {
      console.log(`  [Para ${idx + 1}]: ${l.slice(0, 100)}...`);
    });
  }
});
