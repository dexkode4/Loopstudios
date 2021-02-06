import React from 'react'
import Header from '../Header';
import styles from './HeroSection.module.scss';

type HeroProps = {
    id: string
}

function Hero({id}:HeroProps) {
    return (
        <div className={styles.hero} id={id}>
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
