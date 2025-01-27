import React, { ReactNode } from 'react';
import styles from "./Navigation.module.css";
import { clsx } from 'clsx';

interface NavigationProps {
  children: ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <div className={clsx('g-layout g-layout-full', styles.nav)}>
      <div className={clsx('g-layout-content')}>
        {children}
      </div>
    </div>
  );
};

export default Navigation;
