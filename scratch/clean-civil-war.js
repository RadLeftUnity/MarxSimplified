import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bookDir = path.join(__dirname, '..', 'public', 'data', 'books', 'civil-war-france');

const replacements = [
  // French / German / Polish accented words
  [/\bpar d\uFFFDcret du peuple\b/gi, 'par décret du peuple'],
  [/H\uFFFDtel de Ville/g, 'Hôtel de Ville'],
  [/fr\uFFFDres Ignorantins/g, 'frères Ignorantins'],
  [/boh\uFFFDme/g, 'bohème'],
  [/champ\uFFFDtre/g, 'champêtre'],
  [/prol\uFFFDtariat foncier/g, 'prolétariat foncier'],
  [/Wr\uFFFDblewski/g, 'Wróblewski'],
  [/Vend\uFFFDme/g, 'Vendôme'],
  [/Wilhelmsh\uFFFDhe/g, 'Wilhelmshöhe'],
  [/concordats \uFFFD/g, 'concordats à'],
  [/Alliance r\uFFFDpublicaine/g, 'Alliance républicaine'],
  [/D\uFFFDpartements/g, 'Départements'],
  [/congre\uFFFDgations/g, 'congrégations'],
  [/Moli\uFFFDre/g, 'Molière'],
  [/D\uFFFDcembriseur/g, 'Décembriseur'],
  [/Soci\uFFFDt\uFFFD G\uFFFDn\uFFFDrale/g, 'Société Générale'],
  [/Credit Mobilier/g, 'Crédit Mobilier'],
  [/Qu\uFFFDlen/g, 'Quélen'],
  [/r\uFFFDpublicaine/g, 'républicaine'],
  [/d\uFFFDcret/g, 'décret'],
  [/h\uFFFDtel/g, 'hôtel'],
  [/fr\uFFFDres/g, 'frères'],
  [/boh\uFFFDme/g, 'bohème'],
  [/champ\uFFFDtre/g, 'champêtre'],
  [/prol\uFFFDtariat/g, 'prolétariat'],
  [/wr\uFFFDblewski/g, 'wróblewski'],
  [/vend\uFFFDme/g, 'vendôme'],
  [/wilhelmsh\uFFFDhe/g, 'wilhelmshöhe'],
  [/concordats \uFFFD/g, 'concordats à'],
  [/d\uFFFDpartements/g, 'départements'],
  [/moli\uFFFDre/g, 'molière'],
  [/d\uFFFDcembriseur/g, 'décembriseur'],
  [/soci\uFFFDt\uFFFD/g, 'société'],
  [/g\uFFFDn\uFFFDrale/g, 'générale'],
  [/qu\uFFFDlen/g, 'quélen'],
  
  // Em-dashes and en-dashes
  [/—/g, ', '],
  [/–/g, '-'],
  [/--/g, ', '],
  
  // HTML entities leftovers
  [/&amp;/g, '&'],
  [/&rsquo;/g, "'"],
  [/&lsquo;/g, "'"],
  [/&quot;/g, '"'],
  [/&lt;/g, '<'],
  [/&gt;/g, '>'],
  
  // Standalone replacement characters
  [/^\s*\uFFFD\s*$/gm, '***'],
  [/\uFFFD/g, '']
];

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// Clean all text files in chapter directories
const dirs = fs.readdirSync(bookDir);
for (const dir of dirs) {
  const fullDirPath = path.join(bookDir, dir);
  if (fs.statSync(fullDirPath).isDirectory()) {
    const files = fs.readdirSync(fullDirPath);
    for (const f of files) {
      if (f.endsWith('.txt')) {
        cleanFile(path.join(fullDirPath, f));
        console.log(`Cleaned ${dir}/${f}`);
      }
    }
  }
}
