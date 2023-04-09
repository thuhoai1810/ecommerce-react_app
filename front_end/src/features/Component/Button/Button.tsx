import React from 'react';
import  cssStyles from './Button.module.scss'

type TCssStyles = keyof typeof cssStyles;
type TProps = {
    text?: string;
    onClick?: (event: any) => void;
    styles?: TCssStyles[];
    disabled?: boolean;
    type?: 'button' | 'submit';
    hasError?: boolean;
    btnRef?: any;
}
const Button: React.FC<TProps> = ({
  text,
  onClick,
  styles = [],
  disabled = false,
  type = "button",
  hasError = false,
  btnRef,
}) => {
    // const newStyles = hasError ? [...styles, 'error'] : styles;
  return (
    <button className={cssStyles.btn} type={type} ref={btnRef} disabled={disabled} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
export  default  Button;
