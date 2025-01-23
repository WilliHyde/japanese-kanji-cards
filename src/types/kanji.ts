export type Kanji = {
  id: number;
  kanji: string;
  meaning: string;
  onYomi: {
    katakana: string;
    romaji: string;
  };
  kunYomi: {
    hiragana: string;
    romaji: string;
  };
  commonWords: string[];
};
