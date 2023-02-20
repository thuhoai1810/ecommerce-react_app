import React from "react";
import styles  from './Button.module.scss'
import Button from "./Button";

 const ButtonClose = () =>{
     return(
         <div className={styles.close}>
             <Button/>
         </div>
     )
 }
  export  default ButtonClose;