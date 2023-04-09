import React from 'react';
import ButtonSocial from "../Component/ButtonSocial/ButtonSocial";
import  styles from './SignUp.module.scss';
import ButtonClose from "../Component/Button/ButtonClose";
const SignUp = () => {
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
export default SignUp;
