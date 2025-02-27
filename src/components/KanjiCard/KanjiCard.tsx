'use client'

import React, { useState } from 'react';
import styles from "./KanjiCard.module.css";
import { clsx } from 'clsx';
import { Kanji } from '@/types/kanji';
import { HeartCrack } from 'lucide-react';
import Button, { ButtonSize } from '../Button/Button';

interface KanjiCardProps {
  kanjiInfo: Kanji | undefined;
}

const KanjiCard: React.FC<KanjiCardProps> = ({ kanjiInfo }) => {
  const [cardPosition, setCardPosition] = useState(false);

  if (!kanjiInfo) {
    return <div className={clsx(styles.card, styles['not-found'])}>
      <HeartCrack className={clsx(styles.heart)} />
      <span>Kanji not found</span>
    </div>;
  }

  return (
    <div 
      className={clsx(styles.card, { [styles.flipped]: cardPosition })} 
    >
      <button className={clsx(styles.front)} onClick={() => setCardPosition(!cardPosition)}>
        <h1 className={clsx(styles.title)}>{kanjiInfo.kanji}</h1>
      </button>
      <div className={clsx(styles.back)}>
        <div className={clsx(styles['kanji-characters'])}>
          <h2 className={clsx(styles['kanji-fancy'])}>{kanjiInfo.kanji}</h2>
          <h2 className={clsx(styles['kanji-stroke'])}>{kanjiInfo.kanji}</h2>
        </div>
        <dl className={clsx(styles['kanji-info'])}>
          <dt className={clsx(styles.dt)}>Meaning</dt>
          <dd className={clsx(styles.dd)}>{kanjiInfo.meaning}</dd>
          <dt className={clsx(styles.dt)}>On&apos;yomi</dt>
          <dd className={clsx(styles.dd)}>
            {kanjiInfo.onYomi.katakana} ({kanjiInfo.onYomi.romaji})
          </dd>
          {kanjiInfo.kunYomi.hiragana && (
            <>
              <dt className={clsx(styles.dt)}>Kun&apos;yomi</dt>
              <dd className={clsx(styles.dd)}>
                {kanjiInfo.kunYomi.hiragana} ({kanjiInfo.kunYomi.romaji})
              </dd>
            </>
          )}
          <dt className={clsx(styles.dt)}>Words</dt>
          <dd className={clsx(styles.dd, styles['common-words'])}>
            {kanjiInfo.commonWords.map((word, index) => (
              <span className={clsx(styles.word)} key={index}>{word}</span>
            ))}
          </dd>
        </dl>
        <Button size={ButtonSize.Large} onClick={() => setCardPosition(!cardPosition)}>
          Hide Answer
        </Button>
      </div>
    </div>
  );
};

export default KanjiCard;
