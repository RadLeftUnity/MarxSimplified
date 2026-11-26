const fs = require('fs');

function addExplicitIds(filePath, idPrefix) {
  if (!fs.existsSync(filePath)) return;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let modified = false;
  data.forEach((item, idx) => {
    if (!item.id) {
      item.id = `${idPrefix}-ann-${idx + 1}`;
      modified = true;
    }
  });
  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`Updated IDs in ${filePath}`);
  }
}

addExplicitIds(
  'public/data/books/capitalism-and-female-labour/chapter1/chapter1-annotations.json',
  'capitalism-and-female-labour'
);
addExplicitIds(
  'public/data/books/summary-of-dialectics/chapter1/chapter1-annotations.json',
  'summary-of-dialectics'
);
addExplicitIds(
  'public/data/books/wage-labour/chapter8/chapter8-annotations.json',
  'rise-and-fall-of-wages'
);
addExplicitIds(
  'public/data/books/left-wing-communism/chapter7/chapter7-annotations.json',
  'should-we-participate-in-bourgeois-parliaments'
);
addExplicitIds(
  'public/data/books/the-revolutionary-proletariat-and-the-right-of-nations-to-self-determination/chapter1/chapter1-annotations.json',
  'the-revolutionary-proletariat-and-the-right-of-nations-to-self-determination'
);
