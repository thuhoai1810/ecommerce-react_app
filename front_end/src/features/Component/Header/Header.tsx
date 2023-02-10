import React  from "react";
import  styles from './Header.module.scss'
const Header = () =>{
    const asvv = "/"
    const language = {
        image:{},
        country: ''
    }
 return (
     <div className={styles.container}>
      <div className={styles.headerIntroduce}>
          <i className="fa-solid fa-truck-fast"></i>
          <text className={styles.headerText}>
           FREE SHIPPING NATIONWIDE FOR ORDER FROM 50$
          </text>
      </div>
         <div className={styles.headerSupport}>
             <a href= "/">Help and FAQs</a>
         </div>
         <div className={styles.headerLanguage}>
             <img src={asvv} alt = 'country'/>
             <text className={styles.language}>{language.country}</text>
             <i className="fa-solid fa-angle-down"></i>
             <div className={styles.headerDropdownContent}>
                 <a href="#">English</a>
                 <br/>
                 <a href="#">Vietnamese</a>
             </div>
         </div>
     </div>
 )
}
 export  default  Header