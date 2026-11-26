const fs = require('fs');
const path = require('path');
const bookDir = 'public/data/books/principles-of-communism';

const updates = {
  "chapter3/chapter3-annotations.json": [
    {
      "id": "principles-of-communism-chapter3-ann-1",
      "targetText": "There have always been poor and working classes; and the working class have mostly been poor. But there have not always been workers and poor people living under conditions as they are today",
      "summary": "Poverty has existed across history, but modern wage labor dependent on market competition is unique to industrial capitalism.",
      "explanation": "Historical materialist insight: poverty existed in ancient and feudal eras, but modern wage labor subjected to unbridled market competition is a unique product of industrial capitalism.",
      "topics": ["Historical Materialism", "Scientific Socialism"]
    }
  ],
  "chapter5/chapter5-annotations.json": [
    {
      "id": "principles-of-communism-chapter5-ann-1",
      "targetText": "Hence the price of labor is also equal to the cost of production of labor.",
      "summary": "Under market competition, baseline wages fluctuate around the cost of reproducing the worker's labor-power.",
      "explanation": "Under competitive capitalism, baseline wages fluctuate around the cost of maintaining and reproducing the worker's capacity to labor daily.",
      "topics": ["Political Economy", "Wage Labor"]
    }
  ],
  "chapter9/chapter9-annotations.json": [
    {
      "id": "principles-of-communism-chapter9-ann-1",
      "targetText": "His goal is to acquire capital himself wherewith to exploit other workers.",
      "summary": "Handicraftsmen and guild artisans operate with small property, aiming to accumulate capital rather than acting as modern proletarians.",
      "explanation": "Guild craftsmen operated within small-scale pre-capitalist production; modern industrial concentration renders advancement to capital ownership impossible for the vast majority of workers.",
      "topics": ["Class Struggle", "Historical Materialism"]
    }
  ],
  "chapter10/chapter10-annotations.json": [
    {
      "id": "principles-of-communism-chapter10-ann-1",
      "targetText": "The manufacturing worker almost always lives in the countryside and in a more or less patriarchal relation to his landlord or employer. The proletarian lives, for the most part, in the big cities and his relation to his employer is purely a cash relation.",
      "summary": "Industrial capitalism replaces traditional rural patron-client dependencies with impersonal urban cash-nexus relations.",
      "explanation": "Industrialization replaced rural, traditional master-worker dependencies with impersonal urban cash-nexus employment under capital.",
      "topics": ["Historical Materialism", "Proletariat"]
    }
  ],
  "chapter11/chapter11-annotations.json": [
    {
      "id": "principles-of-communism-chapter11-ann-1",
      "targetText": "big industry has brought all the people of the earth into contact with each other, has merged all local markets into one world market",
      "summary": "Modern mechanized industry globalizes production and connects local economies into a unified world market.",
      "explanation": "Industrial machine production forces global economic integration, rendering local market crises and labor struggles inherently international.",
      "topics": ["Imperialism", "Political Economy"]
    }
  ],
  "chapter12/chapter12-annotations.json": [
    {
      "id": "principles-of-communism-chapter12-ann-1",
      "targetText": "As a consequence, finished commodities could not be sold, and a so-called commercial crisis broke out.",
      "summary": "Capitalist economic crises originate from overproduction and market anarchy rather than physical scarcity.",
      "explanation": "Modern economic crises stem not from physical scarcity, but from capitalist overproduction: producing more commodities than impoverished consumers can afford to purchase.",
      "topics": ["Political Economy", "Crises of Capitalism"]
    }
  ],
  "chapter13/chapter13-annotations.json": [
    {
      "id": "principles-of-communism-ch13-ann-1",
      "targetText": "big industry, and the limitless expansion of production which it makes possible, bring within the range of feasibility a social order in which so much is produced that every member of society will be in a position to exercise and develop all his powers and faculties in complete freedom.",
      "summary": "Modern industrial capacity creates the technological foundation for a society of abundance and individual flourishing.",
      "explanation": "Replacing competitive private ownership with democratic social planning resolves the structural contradiction between collective industrial production and private appropriation.",
      "topics": ["Scientific Socialism", "Historical Materialism"]
    },
    {
      "id": "principles-of-communism-ch13-ann-2",
      "targetText": "for big industry, competition and generally the individualistic organization of production have become a fetter which it must and will shatter; that so long as big industry remains on its present footing, it can be maintained only at the cost of general chaos every seven years",
      "summary": "Unregulated market competition becomes a barrier to industrial development, generating recurring crises of overproduction.",
      "explanation": "Engels identifies the cyclical nature of capitalist crises: private appropriation acts as a fetter on socialized production, necessitating collective economic planning.",
      "topics": ["Political Economy", "Crises of Capitalism"]
    }
  ],
  "chapter16/chapter16-annotations.json": [
    {
      "id": "principles-of-communism-chapter16-ann-1",
      "targetText": "It would be desirable if this could happen, and the communists would certainly be the last to oppose it.",
      "summary": "Communists do not desire violence for its own sake, but recognize that the ruling class will use force to protect private property.",
      "explanation": "Engels clarifies that communists would prefer peaceful abolition of private property, but material history proves that ruling classes will violently crush democratic transformation, requiring workers to defend themselves.",
      "topics": ["Revolution", "Scientific Socialism"]
    }
  ],
  "chapter17/chapter17-annotations.json": [
    {
      "id": "principles-of-communism-chapter17-ann-1",
      "targetText": "In all probability, the proletarian revolution will transform existing society gradually and will be able to abolish private property only when the means of production are in sufficient quantity available.",
      "summary": "Socialist revolution abolishes private property gradually as productive capacity develops to ensure material abundance.",
      "explanation": "Engels directly refutes utopian and anarchist illusions of abolishing property overnight, proving that socialist transition requires systematically developing productive forces.",
      "topics": ["Socialist Transition", "Historical Materialism"]
    },
    {
      "id": "principles-of-communism-chapter17-ext-2",
      "targetText": "No, no more than existing forces of production can at one stroke be multiplied to the extent necessary for the creation of a communal society.",
      "summary": "Productive forces cannot be multiplied overnight, making gradual socialist transition an objective necessity.",
      "explanation": "Engels shows that the full elimination of capitalist relations depends upon the physical expansion of productive capacity over time.",
      "topics": ["Historical Materialism", "Socialist Transition"]
    }
  ],
  "chapter18/chapter18-annotations.json": [
    {
      "id": "principles-of-communism-chapter18-ann-1",
      "targetText": "Democracy would be wholly valueless to the proletariat if it were not immediately used as a means for putting through measures directed against private property and ensuring the livelihood of the proletariat.",
      "summary": "Political democracy is meaningless for the working class unless weaponized to dismantle private property and secure social rights.",
      "explanation": "Engels emphasizes that bourgeois political democracy is merely formal unless working people use political power to socialize the economy and guarantee living standards.",
      "topics": ["Democracy and Elections", "The State"]
    },
    {
      "id": "principles-of-communism-chapter18-ext-2",
      "targetText": "In the first place, it will establish a democratic constitution, and through this, the direct or indirect dominance of the proletariat.",
      "summary": "The first step of the revolution is establishing a democratic constitution securing working-class political power.",
      "explanation": "Engels argues that where workers are a majority, democracy means direct proletarian rule, while in agrarian nations it requires alliances with working peasants.",
      "topics": ["Democracy and Elections", "The State"]
    }
  ],
  "chapter19/chapter19-annotations.json": [
    {
      "id": "principles-of-communism-chapter19-ann-1",
      "targetText": "It is a universal revolution and will, accordingly, have a universal theater.",
      "summary": "Because capitalist production is global, socialist transformation requires international working-class solidarity.",
      "explanation": "Because capitalist production is global, socialist transformation requires international working-class cooperation and anti-imperialist solidarity.",
      "topics": ["Proletarian Internationalism", "Imperialism"]
    }
  ],
  "chapter21/chapter21-annotations.json": [
    {
      "id": "principles-of-communism-chapter21-ann-1",
      "targetText": "It will transform the relations between the sexes into a purely private matter which concerns only the persons involved and into which society has no occasion to intervene.",
      "summary": "Socializing domestic labor and child care emancipates personal relationships from financial dependence.",
      "explanation": "Socializing domestic labor and child care frees personal relationships from financial dependency and patriarchal dominance.",
      "topics": ["Women and Family", "Scientific Socialism"]
    }
  ],
  "chapter22/chapter22-annotations.json": [
    {
      "id": "principles-of-communism-chapter22-ann-1",
      "targetText": "The nationalities of the peoples associating themselves in accordance with the principle of community will be compelled to mingle with each other as a result of this association",
      "summary": "International communist cooperation dissolves national chauvinism and borders through shared social development.",
      "explanation": "International economic integration and shared social interests render national chauvinism and imperialist borders historically obsolete.",
      "topics": ["Proletarian Internationalism", "Anti-Imperialism"]
    }
  ],
  "chapter23/chapter23-annotations.json": [
    {
      "id": "principles-of-communism-chapter23-ann-1",
      "targetText": "All religions so far have been the expression of historical stages of development of individual peoples or groups of peoples.",
      "summary": "Religious doctrines reflect historical stages of human development and material helplessness before natural and economic forces.",
      "explanation": "Materialist analysis: religious belief reflects human helplessness before natural and economic forces; rational social planning removes the material roots of religious alienation.",
      "topics": ["Historical Materialism", "Theory and Philosophy"]
    }
  ],
  "chapter24/chapter24-annotations.json": [
    {
      "id": "principles-of-communism-chapter24-ann-1",
      "targetText": "The so-called socialists are divided into three categories.",
      "summary": "Engels categorizes socialists into reactionary, bourgeois reformist, and democratic factions to clarify communist principles.",
      "explanation": "Engels distinguishes scientific communists from feudal reactionaries, liberal reformers, and democratic socialists who seek to patch up capitalism.",
      "topics": ["Scientific Socialism", "Schools of Marxism"]
    }
  ],
  "chapter25/chapter25-annotations.json": [
    {
      "id": "principles-of-communism-chapter25-ann-1",
      "targetText": "In England, for example, the working-class Chartists are infinitely closer to the communists than the democratic petty bourgeoisie or the so-called Radicals.",
      "summary": "Communists forge strategic alliances with militant working-class movements while maintaining independent revolutionary goals.",
      "explanation": "Principled coalition strategy: communists support mass working-class movements (like Chartism) against bourgeois parties while preserving their independent revolutionary program.",
      "topics": ["Class Struggle", "Political Strategy"]
    }
  ],
  "chapter26/chapter26-annotations.json": [
    {
      "id": "principles-of-communism-chapter26-ann-1",
      "targetText": "The Principles of Communism was written by Engels in late 1847 as a draft program for the Communist League",
      "summary": "Historical publication note on the drafting of the Communist League program that laid the foundation for the Communist Manifesto.",
      "explanation": "Historical publication notes detailing how Eduard Bernstein published Engels' original 1847 manuscript in 1914 in the German Social Democratic newspaper Vorwärts!.",
      "topics": ["Socialist History"]
    }
  ]
};

for (const [relPath, anns] of Object.entries(updates)) {
  const fullPath = path.join(bookDir, relPath);
  fs.writeFileSync(fullPath, JSON.stringify(anns, null, 2), 'utf8');
  console.log(`✓ Updated ${relPath}`);
}
