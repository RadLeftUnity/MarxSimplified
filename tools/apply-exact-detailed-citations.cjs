const fs = require('fs');

let content = fs.readFileSync('src/data/faq/faqData.ts', 'utf8');

const replacements = [
  // who-works-undesirable-dangerous-jobs-under-communism
  {
    target: "society compensates differing quantities and intensities of labor.",
    replacement: "society compensates differing quantities and intensities of labor [1]."
  },
  {
    target: "enabling individuals to develop all-round creative and practical capacities.",
    replacement: "enabling individuals to develop all-round creative and practical capacities [2]."
  },

  // marxist-stance-on-automation-and-ai
  {
    target: "while producing higher output.",
    replacement: "while producing higher output [2]."
  },

  // organizing-workers-with-reactionary-views
  {
    target: "the ideas of the ruling class are in every epoch the ruling ideas",
    replacement: "the ideas of the ruling class are in every epoch the ruling ideas [1]"
  },
  {
    target: "who refused to organize inside reactionary, conservative-led trade unions",
    replacement: "who refused to organize inside reactionary, conservative-led trade unions [2]"
  },

  // why-marxists-focus-on-imperialism-and-multipolarity
  {
    target: "modern capitalism cannot be understood merely as national competition",
    replacement: "modern capitalism cannot be understood merely as national competition [1]"
  },
  {
    target: "political independence without economic sovereignty is an illusion",
    replacement: "political independence without economic sovereignty is an illusion [2]"
  },

  // ethical-consumption-and-boycotting-under-capitalism
  {
    target: "concept of 'commodity fetishism' in Das Kapital",
    replacement: "concept of 'commodity fetishism' in Das Kapital [1]"
  },
  {
    target: "boycott foreign imperialist luxury imports",
    replacement: "boycott foreign imperialist luxury imports [2]"
  },

  // purpose-of-strikes-and-wage-increases
  {
    target: "general rise in commodity prices.",
    replacement: "general rise in commodity prices [1]."
  },
  {
    target: "Abolition of the wages system!'",
    replacement: "Abolition of the wages system!' [2]"
  },

  // do-communists-just-want-higher-taxes-on-the-rich
  {
    target: "obsession with tax and redistribution reform",
    replacement: "obsession with tax and redistribution reform [1]"
  },

  // why-did-people-flee-communist-countries
  {
    target: "overwhelmingly drawn from former exploiting classes",
    replacement: "overwhelmingly drawn from former exploiting classes [1]"
  },
  {
    target: "placed Vietnam under severe economic embargo until 1994.",
    replacement: "placed Vietnam under severe economic embargo until 1994 [2]."
  },

  // would-communism-kill-innovation
  {
    target: "cooperate in science, culture, and artistic creation.",
    replacement: "cooperate in science, culture, and artistic creation [2]."
  }
];

let applied = 0;
replacements.forEach(({ target, replacement }, idx) => {
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    applied++;
  } else {
    console.warn(`[WARN] Target not found #${idx + 1}: "${target}"`);
  }
});

console.log(`Applied: ${applied} / ${replacements.length}`);

fs.writeFileSync('src/data/faq/faqData.ts', content, 'utf8');
console.log('Saved src/data/faq/faqData.ts');
