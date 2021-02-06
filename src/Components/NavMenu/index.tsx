import React from 'react'
import { CloseIcon, LogoIcon } from '../../assets/svg';
import styles from './NavMenu.module.scss';
import { INavMenu } from '../../interface';
import cx from 'classnames';



function NavMenu({ setIsopen, isOpen }: INavMenu) {
    return (
        <div className={cx(styles.nav, isOpen && styles.navOpen)}>
            <div className={styles.navHeader}>
                <LogoIcon />
                <CloseIcon onClick={() => setIsopen(false)} className={cx(isOpen && styles.rotate)} />
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
