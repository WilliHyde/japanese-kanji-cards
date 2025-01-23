import React, { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.css';


const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  { children, className, ...props }
) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
