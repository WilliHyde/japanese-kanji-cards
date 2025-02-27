import { Kanji } from "@/types/kanji";
import { BASE_TITLE } from "@/config/constants";
import styles from "./page.module.css";
import { clsx } from 'clsx';
import KanjiCard from "@/components/KanjiCard/KanjiCard";
import Navigation from "@/components/Navigation/Navigation";
import NavLink from "@/components/NavLink/NavLink";
import { CircleChevronLeft, CircleChevronRight, Dices, Grid3x3, House } from "lucide-react";
import { fetchKanjiData } from "@/utils/fetchKanjiData";
import Link from "next/link";

const kanjiData: Kanji[] = await fetchKanjiData();

const isDevEnv = process.env.NODE_ENV === 'development';

export async function generateStaticParams() {
  return kanjiData.map((kanji) => ({
    kanji: isDevEnv ? 
      encodeURIComponent(kanji.kanji) : decodeURIComponent(kanji.kanji),
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ kanji: string }>;
}) {
  let kanjiCharacter: string;
  try {
    kanjiCharacter = decodeURIComponent((await params).kanji);
  } catch (e) {
    console.error('Invalid kanji parameter:', e);
    kanjiCharacter = '';
  }
  
  const kanjiInfo = kanjiData.find((item) => item.kanji === kanjiCharacter);

  return {
    title: kanjiInfo ? 
      `Kanji - ${kanjiInfo.kanji} - ${BASE_TITLE}` : `Kanji - Not Found - ${BASE_TITLE}`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ kanji: string }>;
}) {
  let kanjiCharacter: string;
  try {
    kanjiCharacter = decodeURIComponent((await params).kanji);
  } catch (e) {
    console.error('Invalid kanji parameter:', e);
    kanjiCharacter = '';
  }

  const kanjiInfo = kanjiData.find((item) => item.kanji === kanjiCharacter);

  const randomKanji = kanjiData[Math.floor(Math.random() * kanjiData.length)];
  const currentIndex = kanjiData.findIndex((item) => item.kanji === kanjiCharacter);
  const nextKanji = kanjiData[(currentIndex + 1) % kanjiData.length];
  const prevKanji = kanjiData[(currentIndex - 1 + kanjiData.length) % kanjiData.length];

  return (
    <>
      <div className={clsx('g-layout-content', styles.container)}>
        <div className={clsx(styles['kanji-nav'], styles.prev)}>
          <Link
            href={`/kanji/${prevKanji.kanji}`}
            aria-label={`Previous Kanji ${prevKanji.kanji}`}
            className={clsx(styles['kanji-link'])}
          >
            <CircleChevronLeft className={clsx(styles['kanji-arrow'])} />
            {prevKanji.kanji}
          </Link>
        </div>
        <KanjiCard kanjiInfo={kanjiInfo} />
        <div className={clsx(styles['kanji-nav'], styles.next)}> 
          <Link
            href={`/kanji/${nextKanji.kanji}`}
            aria-label={`Next Kanji ${nextKanji.kanji}`}
            className={clsx(styles['kanji-link'])}
          >
            {nextKanji.kanji}
            <CircleChevronRight className={clsx(styles['kanji-arrow'])} />
          </Link>
        </div>
      </div>
      <Navigation>
        <div className={clsx(styles.nav)}>
          <NavLink href="/" ariaLabel="Home">
            <House />
          </NavLink>
          <NavLink href="/kanji" ariaLabel="Kanji List">
            <Grid3x3 />
          </NavLink>
          <NavLink href={`/kanji/${randomKanji.kanji}`} ariaLabel="Random Kanji">
            <Dices />
          </NavLink>
        </div>
      </Navigation>
    </>
  );
}