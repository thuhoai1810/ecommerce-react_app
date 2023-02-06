import React from "react";
import styles from "./App.module.scss";
import HomePage from "./features/HomePage/HomePage";
import HomePageContainer from "./features/HomePage/HomePage.container";

function App() {
  return (
    <div className={styles.App}>
      <HomePageContainer />
    </div>
  );
}

export default App;
