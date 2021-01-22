import React from 'react'
import { CloseIcon, LogoIcon } from '../../assets/svg';
import styles from './NavMenu.module.scss';
import { INavMenu } from '../../interface';



function NavMenu({ setIsopen, isOpen }: INavMenu) {
    return (
        <div className={styles.nav}>
            <div className={styles.navHeader}>
                <LogoIcon />
                <CloseIcon onClick={() => setIsopen(false)} />
            </div>

            <nav className={styles.navMenu}>
                <ul>
                    <li className={styles.navMenuItem}>ABOUT</li>
                    <li className={styles.navMenuItem}>CAREERS</li>
                    <li className={styles.navMenuItem}>EVENTS</li>
                    <li className={styles.navMenuItem}>PRODUCTS</li>
                    <li className={styles.navMenuItem}>SUPPORT</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu
