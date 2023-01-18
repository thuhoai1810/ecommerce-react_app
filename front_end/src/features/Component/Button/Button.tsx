import React from 'react';
import  cssStyles from './Button.module.scss'

type TCssStyles = keyof typeof cssStyles;
type Tprops = {
    text?: string;
    onClick?: (event: any) => void;
    styles?: TCssStyles[];
    disabled?: boolean;
    type?: 'button' | 'submit';
    hasError?: boolean;
    btnRef?: any;
}
const Button : React.FC<Tprops> = () =>{
    return(
        <button className={cssStyles.btn}>
            button
        </button>
    )
}
export  default  Button;