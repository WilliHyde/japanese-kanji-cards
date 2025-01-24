
import { promises as fs } from 'fs';

export async function fetchKanjiData() {
  const kanjiFile = await fs.readFile(process.cwd() + '/src/app/data/kanji.json', 'utf8');
  return JSON.parse(kanjiFile);
}