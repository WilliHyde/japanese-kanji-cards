'use client'

import React, { useState } from 'react';
import styles from "./KanjiCard.module.css";
import { clsx } from 'clsx';
import { Kanji } from '@/types/kanji';
import { HeartCrack, Rotate3d } from 'lucide-react';
import Button from '../Button/Button';

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
        <button
          className={clsx(styles['kanji-flip-btn'])}
          onClick={() => setCardPosition(!cardPosition)}
        >
          <h2 className={clsx(styles['sub-title'])}>{kanjiInfo.kanji}</h2>
        </button>
        <dl className={clsx(styles['kanji-info'])}>
          <dt className={clsx(styles.dt)}>Meaning</dt>
          <dd className={clsx(styles.dd)}>{kanjiInfo.meaning}</dd>
          <dt className={clsx(styles.dt)}>On&apos;yomi</dt>
          <dd className={clsx(styles.dd)}>
            {kanjiInfo.onYomi.katakana} ({kanjiInfo.onYomi.romaji})
          </dd>
          <dt className={clsx(styles.dt)}>Kun&apos;yomi</dt> 
          <dd className={clsx(styles.dd)}>
            {kanjiInfo.kunYomi.hiragana} ({kanjiInfo.kunYomi.romaji})
          </dd>
          <dt className={clsx(styles.dt)}>Common Words</dt>
          <dd className={clsx(styles.dd)}>
            {kanjiInfo.commonWords.map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </dd>
        </dl>
        <Button onClick={() => setCardPosition(!cardPosition)}>
          <Rotate3d />
          <span>Flip</span>
        </Button>
      </div>
    </div>
  );
};

export default KanjiCard;
