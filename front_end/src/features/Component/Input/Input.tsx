import styles from './Input.module.scss'
import React from "react";

type TProps = {
    type: string;
    text: string;

}
const Input: React.FC<TProps> = ({
      text, type
}) => {
    const inputItem = {}
    return (
        <div className={styles.input}>
            <label className={styles.inputLabel}>
                {text}
            </label>
            <input/>
        </div>
    )
}
 export default Input;
