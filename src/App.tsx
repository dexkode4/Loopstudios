import React from 'react';
import Hero from './Components/HeroSection';
import styles from './App.module.scss';
import About from './Components/About';
import Products from './Components/Products';
import Footer from './Components/Footer';
import ComingSoon from './Components/ComingSoon';
import { isMobile } from 'react-device-detect';

function App() {
  return isMobile ?
    <div className={styles.app}>
      <Hero id={"hero"} />
      <About id={"about"} />
      <Products id={"products"} />
      <Footer />
    </div> : <ComingSoon />

}

export default App;
