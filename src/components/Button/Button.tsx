import React, { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.css';

export enum ButtonSize {
  Large = 'is-large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = (
  { children, className, size, ...props }
) => {
  return (
    <button className={clsx(styles.button, size === ButtonSize.Large && styles['is-large'], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
