import styles from "./not-found.module.css";
import clsx from "clsx";
import ButtonLink from '@/components/Button/ButtonLink';
import { Grid3x3, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className={clsx('g-layout-content', styles.container)}>
      <h1>Not Found</h1>
      <p className={clsx(styles.fancy)}>転んでもただでは起きない。</p>
      <p>Could not find requested resource</p>
      <div className={clsx(styles['button-wrap'])}>
        <ButtonLink href="/">
          <Home />
          <span>Home</span>
        </ButtonLink>
        <ButtonLink href="/kanji">
          <Grid3x3 />
          <span>Kanji List</span>
        </ButtonLink>
      </div>
    </div>
  )
}