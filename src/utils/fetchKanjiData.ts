export async function fetchKanjiData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/kanji.json`);
  const kanjiData = await response.json();

  return kanjiData
}