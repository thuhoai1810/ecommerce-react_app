import React from 'react';
import styles from'./App.module.scss';
import SignIn from "./features/SignIn/SignIn";

function App() {
  return (
    <div className={styles.App}>
      <SignIn/>
    </div>
  );
}

export default App;
