import React from 'react';
import Hero from './Components/HeroSection';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Hero />
    </div>
  );
}

export default App;
