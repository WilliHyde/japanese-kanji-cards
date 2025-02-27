import Link from "next/link";
import { Kanji } from "@/types/kanji";
import { BASE_TITLE } from "@/config/constants";
import styles from "./page.module.css";
import { clsx } from 'clsx';
import Navigation from "@/components/Navigation/Navigation";
import NavLink from "@/components/NavLink/NavLink";
import { Dices, House } from "lucide-react";
import { fetchKanjiData } from "@/utils/fetchKanjiData";

export async function generateMetadata() {
  return {
    title: `Kanji List - ${BASE_TITLE}`,
  };
}

export default async function Page() {
  const kanjiData: Kanji[] = await fetchKanjiData();
  const randomKanji = kanjiData[Math.floor(Math.random() * kanjiData.length)];

  return (
    <>
      <div className={clsx('g-layout-content', styles.container)}>
        <div className={clsx(styles.grid)}>
          {kanjiData.map((kanji) => (
            <Link className={clsx(styles.box)} key={kanji.id} href={`/kanji/${kanji.kanji}`}>
              {kanji.kanji}
            </Link>
          ))}
        </div>
      </div>
      <Navigation>
        <div className={clsx(styles.nav)}>
          <NavLink href={'/'}>
            <House />
          </NavLink>
          <NavLink href={`/kanji/${randomKanji.kanji}`}>
            <Dices />
          </NavLink>
          {/* TODO: Implement settings dialog
          <NavLinkButton ariaLabel="Settings">
            <Settings />
          </NavLinkButton>
           */}
        </div>
      </Navigation>
    </>
  );
}