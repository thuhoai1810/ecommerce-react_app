import React from "react";
import  styles from "./ButtonSocial.module.scss"
import Button from "../Button/Button";

type Tprops = {
    text?: string;
    onClick?: (event: any) => void;
    disabled?: boolean;
    type?: 'button' | 'submit';
    hasError?: boolean;
    btnRef?: any;
}

const ButtonSocial = () =>{

    return(
        <div className={styles.social}>
            <Button text='facebook'/>
            <Button text='google'/>
        </div>
    )
}
export  default ButtonSocial;