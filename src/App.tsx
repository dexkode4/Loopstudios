import React from 'react';
import Hero from './Components/HeroSection';
import styles from './App.module.scss';
import About from './Components/About';

function App() {
  return (
    <div className={styles.app}>
      <Hero id={"hero"} />
      <About id={"about"} />
    </div>
  );
}

export default App;
