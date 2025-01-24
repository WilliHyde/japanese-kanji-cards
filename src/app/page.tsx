import { Dices, Grid3x3 } from "lucide-react";
import styles from "./page.module.css";
import clsx from "clsx";
import { fetchKanjiData } from "@/utils/fetchKanjiData";
import { Kanji } from "@/types/kanji";
import ButtonLink from "@/components/Button/ButtonLink";

export default async function Home() {
  const kanjiData: Kanji[] = await fetchKanjiData();
  const randomKanji = kanjiData[Math.floor(Math.random() * kanjiData.length)];

  return (
    <div className={clsx('g-layout-content', styles.wrap)}>
      <h1 className={clsx(styles.title)}>日本語 Kanji Cards</h1>
      <p className={clsx(styles.text)}>
        Master the 80 essential Kanji for your class with this interactive and easy-to-use app.
      </p>
      <h2 className={clsx(styles['sub-title'])}>Features:</h2>
      <ul className={clsx(styles.list)}>
        <li className={clsx(styles['list-item'])}>
          <strong>Comprehensive List:</strong> Explore all 80 Kanji with detailed information.
        </li>
        <li className={clsx(styles['list-item'])}>
          <strong>Random Kanji:</strong> Test yourself with a random Kanji button for quick practice.
        </li>
        <li className={clsx(styles['list-item'])}>
          <strong>Complete Details:</strong> Learn each Kanji's meanings, pronunciations, and common words.
        </li>
        <li className={clsx(styles['list-item'])}>
          <strong>Romanji Support:</strong> See Romanji to help with pronunciation.
        </li>
      </ul>
      <div className={clsx(styles['link-wrap'])}>
        <ButtonLink href="/kanji">
          <Grid3x3 />
          <span>Kanji List</span>
        </ButtonLink>
        <ButtonLink href={`/kanji/${randomKanji.kanji}`}>
          <Dices />
          <span>Random Kanji</span>
        </ButtonLink>
      </div>
    </div>
  );
}
