import https from 'https';

function testQuery(term) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&pithumbsize=1000&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrlimit=1`;
  const options = {
    headers: {
      'User-Agent': 'MarxSimplifiedApp/1.0 (contact@marxsimplified.org)'
    }
  };
  https.get(url, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query?.pages;
        if (pages) {
          const key = Object.keys(pages)[0];
          console.log(`[OK ${term}]`, pages[key].thumbnail?.source);
        } else {
          console.log(`[NO PAGES ${term}]`);
        }
      } catch (e) {
        console.error(`[ERR ${term}]`, e.message, data.substring(0, 100));
      }
    });
  });
}

testQuery('United States Capitol');
testQuery('Eiffel Tower');
testQuery('Tiananmen Beijing');
