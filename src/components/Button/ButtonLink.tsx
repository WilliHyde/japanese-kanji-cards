import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { clsx } from 'clsx';
import styles from './Button.module.css';

interface ButtonLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, className, ...props }) => {
  return (
    <Link className={clsx(styles.button, className)} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
