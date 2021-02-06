import React, { useState } from 'react'
import { HamburgerIcon, LogoIcon } from '../../assets/svg';
import NavMenu from '../NavMenu';
import styles from './Header.module.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const body = document.body;
    return (
        <div className={styles.header}>
            <LogoIcon className={styles.headerLogo} />
            <HamburgerIcon className={styles.headerTogglemenu} onClick={() => {
                body.style.position = 'fixed';
                setIsOpen(true)
            }} />
            <NavMenu setIsopen={setIsOpen} isOpen={isOpen} />
        </div>
    )
}

export default Header
