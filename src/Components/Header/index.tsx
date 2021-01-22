import React, { useState } from 'react'
import { CloseIcon, HamburgerIcon, LogoIcon } from '../../assets/svg';
import NavMenu from '../NavMenu';
import styles from './Header.module.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.header}>
            <LogoIcon className={styles.headerLogo} />
            <HamburgerIcon className={styles.headerTogglemenu} onClick={() => setIsOpen(true)}/>
            { isOpen && <NavMenu  setIsopen={setIsOpen} isOpen={isOpen}/>}
        </div>
    )
}

export default Header
