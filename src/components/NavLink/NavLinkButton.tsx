import React, { ReactNode } from 'react';
import styles from "./NavLink.module.css";
import { clsx } from 'clsx';

export interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

const NavLinkButton: React.FC<NavButtonProps> = ({ disabled, ariaLabel, children, className }) => {
  return (
    <button
      aria-label={ariaLabel ?? ariaLabel}
      aria-disabled={disabled} 
      tabIndex={disabled ? -1 : undefined}
      className={clsx(styles.link, className, { [styles.disabled]: disabled })}
    >
      {children}
    </button>
  );
};

export default NavLinkButton;