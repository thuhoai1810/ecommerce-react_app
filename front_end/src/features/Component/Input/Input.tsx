import styles from "./Input.module.scss"

const Input = () => {
    return(
        <div className={styles.}>
            <label className={styles.inputLabel}>
                Full name
            </label>
            <input/>
        </div>
    )
}
 export default Input;