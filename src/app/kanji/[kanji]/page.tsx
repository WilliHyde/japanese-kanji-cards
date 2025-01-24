import { Kanji } from "@/types/kanji";
import { BASE_TITLE } from "@/config/constants";
import styles from "./page.module.css";
import { clsx } from 'clsx';
import KanjiCard from "@/components/KanjiCard/KanjiCard";
import Navigation from "@/components/Navigation/Navigation";
import NavLink from "@/components/NavLink/NavLink";
import { ArrowLeft, ArrowRight, Dices, Grid3x3 } from "lucide-react";
import { fetchKanjiData } from "@/utils/fetchKanjiData";

const kanjiData: Kanji[] = await fetchKanjiData();

export async function generateStaticParams() {
  return kanjiData.map((kanji) => ({
    kanji: encodeURIComponent(kanji.kanji),
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
      <div className={clsx('g-layout-content')}>
        <KanjiCard kanjiInfo={kanjiInfo} />
      </div>
      <Navigation>
        <div className={clsx(styles.nav)}>
          <NavLink 
            href={`/kanji/${prevKanji.kanji}`}
            ariaLabel="Previous Kanji"
            disabled={!kanjiInfo}
            className={clsx(styles['prev-btn'])}
          >
            <ArrowLeft />
          </NavLink>
          <NavLink href="/kanji">
            <Grid3x3 />
            <span>List</span>
          </NavLink>
          <NavLink href={`/kanji/${randomKanji.kanji}`}>
            <Dices />
            <span>Random</span>
          </NavLink>
          <NavLink
            href={`/kanji/${nextKanji.kanji}`}
            ariaLabel="Next Kanji"  
            disabled={!kanjiInfo}
            className={clsx(styles['next-btn'])}
          >
            <ArrowRight />
          </NavLink>
        </div>
      </Navigation>
    </>
  );
}