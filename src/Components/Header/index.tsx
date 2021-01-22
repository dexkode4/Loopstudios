import React from 'react'
import { CloseIcon, HamburgerIcon, LogoIcon } from '../../assets/svg';
import styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <LogoIcon className={styles.headerLogo}/>
            <HamburgerIcon/>
        </div>
    )
}

export default Header
