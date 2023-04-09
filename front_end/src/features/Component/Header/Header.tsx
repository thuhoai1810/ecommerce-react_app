import React  from "react";
import  styles from './Header.module.scss'
import {nanoid} from "@reduxjs/toolkit";
const Header = () =>{
    const test = "/";
    const language = {
        id: nanoid(),
        image: '',
        country: 'English',
    }
 return (
     <div className={styles.container}>
          <div className={styles.headerIntroduce}>
              <div className={styles.headerText}>
                  <i className="fa-solid fa-truck-fast"></i>
                  <text >
                      FREE SHIPPING NATIONWIDE FOR ORDER FROM 50$
                  </text>
              </div>
              <div className={styles.headerSupport}>
                  <div className={styles.headerTextSupport}>
                      <a href= "/">Help and FAQs</a>
                  </div>
                  <div className={styles.headerLanguage}>
                      <div className={styles.countryImg}>
                          <img src={language.image} alt = ''/>
                      </div>
                      <div className={styles.headerDropdownContent}>
                          <form action='/'>
                              <select name={language.country} id={language.id}>
                                  <option value= {language.country}> {language.country} </option>
                              </select>
                          </form>
                      </div>
                  </div>
              </div>
          </div>

     </div>
 )
}
 export  default  Header
