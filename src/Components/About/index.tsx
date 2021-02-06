import React from 'react'
import styles from './About.module.scss';
import { InteractiveImg } from '../../assets/img/mobile'

type AboutProps = {
    id: string
}
function About({ id }: AboutProps) {
    return (
        <div className={styles.about} id={id}>
            <div className={styles.aboutImg}>
                <img src={InteractiveImg} alt="vr" />
            </div>
            <div className={styles.aboutDescription}>
                <header className={styles.aboutTitle}>
                    THE LEADER IN INTERACTIVE VR
                </header>
                <p className={styles.aboutParagraph}>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies
                    around the globe. Our award-wining creations have transform businesses
                    through digital experiences that bind to thier brand.
                </p>
            </div>
        </div>
    )
}

export default About
