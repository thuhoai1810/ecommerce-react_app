import React from "react";
import styles  from './Button.module.scss'
import cssStyles from "./Button.module.scss";
import Button from "./Button";

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

const ButtonClose = () =>{

     return(
         <div className={styles.close}>
             <Button text= 'close'/>
         </div>
     )
 }
  export  default ButtonClose;