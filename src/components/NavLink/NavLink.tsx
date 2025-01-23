import React, { ReactNode } from 'react';
import styles from "./NavLink.module.css";
import Link, { LinkProps } from 'next/link';
import { clsx } from 'clsx';

interface NavLinkProps extends LinkProps {
  ariaLabel?: string;
  disabled?: boolean;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, disabled, ariaLabel, children }) => {
  return (
    <Link 
      aria-label={ariaLabel ?? ariaLabel}
      aria-disabled={disabled} 
      tabIndex={disabled ? -1 : undefined}
      className={clsx(styles.link, { [styles.disabled]: disabled })}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;