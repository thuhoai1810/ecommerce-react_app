import React from 'react';
import  styles from './SignIn.module.scss';
import ButtonSocial from "../Component/ButtonSocial/ButtonSocial";
import ButtonClose from "../Component/Button/ButtonClose";
const SignIn = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Sign Up</span>
                <i className="fa-solid fa-xmark"/>
                <ButtonClose/>
            </div>
            <div className={styles.btn_social}>
                <ButtonSocial/>
            </div>
        </div>
    )
}
export  default  SignIn;