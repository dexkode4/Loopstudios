import React from 'react';
import Hero from './Components/HeroSection';
import styles from './App.module.scss';
import About from './Components/About';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Hero id={"hero"} />
      <About id={"about"} />
      <Products id={"products"} />
      <Footer />
    </div>
  )
}

export default App;
