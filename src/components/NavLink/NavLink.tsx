import React, { ReactNode } from 'react';
import styles from "./NavLink.module.css";
import Link, { LinkProps } from 'next/link';
import { clsx } from 'clsx';

interface NavLinkProps extends LinkProps {
  ariaLabel?: string;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, disabled, ariaLabel, children, className }) => {
  return (
    <Link 
      aria-label={ariaLabel ?? ariaLabel}
      aria-disabled={disabled} 
      tabIndex={disabled ? -1 : undefined}
      className={clsx(styles.link, className, { [styles.disabled]: disabled })}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;