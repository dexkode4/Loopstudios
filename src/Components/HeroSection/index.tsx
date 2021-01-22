import React from 'react'
import Header from '../Header';
import styles from './HeroSection.module.scss';


function Hero() {
    return (
        <div className={styles.hero}>
           <Header/>
           <div className={styles.heroBanner}>
                <h1>IMMERSIVE</h1>
                <h1>EXPERIENCES</h1>
                <h1>THAT</h1>
                <h1>DELIVER</h1>
           </div>
        </div>
    )
}

export default Hero
