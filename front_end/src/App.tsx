import React from "react";
import styles from "./App.module.scss";
import HomePage from "./features/HomePage/HomePage";


function App() {
  return (
    <div className={styles.App}>
      <HomePage />
    </div>
  );
}

export default App;
