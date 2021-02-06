import React, { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { HamburgerIcon, LogoIcon } from '../../assets/svg';
import NavMenu, { MenuLinks } from '../NavMenu';
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

            <nav className={styles.desktopNav}>
                <ul>
                    {MenuLinks.map(({ title, link }: { title: string, link: string }, index: number) => (
                        <li className={styles.desktopNavItem} key={index} >

                            <LinkScroll
                                activeClass="active"
                                to={`${link}`}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title.toLowerCase()}
                            </LinkScroll>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header
