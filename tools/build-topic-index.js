import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const booksDir = path.join(workspaceRoot, 'public', 'data', 'books');
const outputPath = path.join(workspaceRoot, 'public', 'data', 'topics-index.json');

const TOPIC_RULES = [
  {
    name: 'Anarchy',
    pattern: /anarchism|anarchist|anarcho-|adventurism|market anarchy/i,
  },
  {
    name: 'Dictatorship of the Proletariat',
    pattern: /dictatorship of the proletariat|proletarian dictatorship/i,
  },
  {
    name: 'The State',
    pattern: /\bthe state\b|state power|state apparatus|bourgeois state|workers' state|capitalist state|free state|withering away of the state/i,
    excludePattern: /state of things|state of affairs|state of mind|state of nature/i,
  },
  {
    name: 'Phases of Socialism',
    pattern: /lower phase of|higher phase of|labor tokens?|birthmarks of capitalism|from each according to.*ability|to each according to.*needs?|phases? of socialism|phases? of communism/i,
  },
  {
    name: 'Monopolies',
    pattern: /monopol|trusts?\b|cartels?\b|syndicates?\b/i,
  },
  {
    name: 'Finance Capital',
    pattern: /\bfinance capital\b|\bfinancial oligarchy\b|\bholding companies\b/i,
  },
  {
    name: 'Imperialism',
    pattern: /imperialism|imperialist|colonialism|export of capital/i,
  },
  {
    name: 'Class Struggle',
    pattern: /class struggle|class antagonism|class conflict|proletariat versus bourgeoisie/i,
  },
  {
    name: 'Elections',
    pattern: /elections|parliament|parliamentarism|bourgeois democracy|voting|ballot|universal suffrage|electoral/i,
  },
  {
    name: 'Vanguard Party',
    pattern: /vanguard party|democratic centralism|class-consciousness|political agitation/i,
  },
  {
    name: 'Reformism vs Revolution',
    pattern: /reformism|opportunism|economism|revisionism/i,
  },
  {
    name: 'Dialectics & Contradiction',
    pattern: /dialectics|dialectical|contradiction|unity of opposites/i,
  },
  {
    name: 'Private Property',
    pattern: /private property|abolition of private property/i,
  },
  {
    name: 'Division of Labor',
    pattern: /division of labor|division of labour/i,
  },
  {
    name: 'Concentration of Production',
    pattern: /concentration of production|concentration of capital/i,
  },
  {
    name: 'Socialized Production',
    pattern: /socialized production|social production/i,
  },
  {
    name: 'Kinship & Clan Society',
    pattern: /kinship|gens|phratry|clan society|matriarch/i,
  },
  {
    name: 'Family & Patriarchy',
    pattern: /patriarch|monogamous family|subordination of women/i,
  },
  {
    name: 'Revolutionary Strategy',
    pattern: /revolutionary strategy|proletarian revolution|armed struggle/i,
  },
  {
    name: 'Capitalist Exploitation',
    pattern: /capitalist exploitation|extraction of surplus/i,
  },
  {
    name: 'Financial Oligarchy',
    pattern: /financial oligarchy/i,
  },
  {
    name: 'Opportunism',
    pattern: /opportunism|opportunist/i,
  },
  {
    name: 'Religion',
    pattern: /religion|religious|atheis|clerical|church|parson|god-building|opium of the people/i,
  },
];

function inferTopicsForAnnotation(ann, textContent) {
  const inferred = new Set();

  if (Array.isArray(ann.topics) && ann.topics.length > 0) {
    ann.topics.forEach((t) => inferred.add(t));
  }

  for (const rule of TOPIC_RULES) {
    const textToTest = rule.excludePattern ? textContent.replace(rule.excludePattern, '') : textContent;
    if (rule.pattern.test(textToTest)) {
      inferred.add(rule.name);
    }
  }

  return Array.from(inferred);
}

export function buildTopicIndex() {
  console.log('=== Building Pre-Compiled Topics Index (topics-index.json) ===');
  if (!fs.existsSync(booksDir)) {
    console.error(`Books directory not found at: ${booksDir}`);
    return;
  }

  const topicMap = new Map();
  const bookFolders = fs.readdirSync(booksDir).filter(f => fs.statSync(path.join(booksDir, f)).isDirectory());

  let totalAnnotationsCount = 0;

  for (const bookFolder of bookFolders) {
    const summaryPath = path.join(booksDir, bookFolder, 'summary.json');
    if (!fs.existsSync(summaryPath)) continue;

    let summaryData;
    try {
      summaryData = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
    } catch {
      continue;
    }

    const chapters = summaryData.chapters || [];
    for (const chapter of chapters) {
      const annPath = path.join(booksDir, bookFolder, chapter.annotationFile);
      if (!fs.existsSync(annPath)) continue;

      let annotations;
      try {
        annotations = JSON.parse(fs.readFileSync(annPath, 'utf8'));
      } catch {
        continue;
      }

      for (let i = 0; i < annotations.length; i++) {
        const ann = annotations[i];
        totalAnnotationsCount++;
        const textContent = `${ann.targetText || ''} ${ann.explanation || ann.summary || ''} ${ann.context || ''}`.toLowerCase();
        const topics = inferTopicsForAnnotation(ann, textContent);

        const annId = ann.id || `${chapter.id}-ann-${i + 1}`;
        const effectiveAnn = {
          id: annId,
          targetText: ann.targetText || '',
          summary: ann.summary || ann.explanation || '',
          explanation: ann.explanation || ann.summary || '',
          context: ann.context || '',
          topics
        };

        for (const topic of topics) {
          if (!topicMap.has(topic)) {
            topicMap.set(topic, []);
          }
          topicMap.get(topic).push({
            annotation: effectiveAnn,
            bookId: summaryData.id || bookFolder,
            bookTitle: summaryData.title || bookFolder,
            bookAuthor: summaryData.author || '',
            coverGradient: summaryData.coverGradient || 'linear-gradient(135deg, #8b0000 0%, #3a0000 100%)',
            chapterId: chapter.id,
            chapterTitle: chapter.title
          });
        }
      }
    }
  }

  const topicGroups = Array.from(topicMap.entries())
    .map(([topic, annotations]) => ({
      topic,
      count: annotations.length,
      annotations
    }))
    .sort((a, b) => b.count - a.count || a.topic.localeCompare(b.topic));

  const output = {
    updatedAt: new Date().toISOString(),
    totalTopics: topicGroups.length,
    totalIndexedAnnotations: totalAnnotationsCount,
    topics: topicGroups
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8');
  console.log(`✓ Successfully created topics-index.json with ${topicGroups.length} topic groups.\n`);
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('build-topic-index.js')) {
  buildTopicIndex();
}
