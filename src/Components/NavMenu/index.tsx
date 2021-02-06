import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { CloseIcon, LogoIcon } from '../../assets/svg';
import styles from './NavMenu.module.scss';
import { INavMenu } from '../../interface';
import cx from 'classnames';



const MenuLinks = [
    {
        title: 'ABOUT',
        link: 'about'
    },
    {
        title: 'CAREERS',
        link: 'careers'
    },
    {
        title: 'EVENTS',
        link: 'events'
    },
    {
        title: 'PRODUCTS',
        link: 'products'
    },
    {
        title: 'SUPPORT',
        link: 'supports'
    },
]



function NavMenu({ setIsopen, isOpen }: INavMenu) {
    const body = document.body;
    return (
        <div className={cx(styles.nav, isOpen && styles.navOpen)}>
            <div className={styles.navHeader}>
                <LogoIcon />
                <CloseIcon onClick={() => {
                    body.style.position = 'relative';
                    setIsopen(false)
                }
                } className={cx(isOpen && styles.rotate)} />
            </div>

            <nav className={styles.navMenu}>
                <ul>
                    {MenuLinks.map(({ title, link }: { title: string, link: string }, index: number) => (
                        <li className={styles.navMenuItem} key={index} >

                            <LinkScroll
                                activeClass="active"
                                to={`${link}`}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    body.style.position = 'relative';
                                    setIsopen(false)
                                }}
                            >
                                {title}
                            </LinkScroll>
                        </li>
                    ))}
                    {/* <li className={styles.navMenuItem}>ABOUT</li>
                    <li className={styles.navMenuItem}>CAREERS</li>
                    <li className={styles.navMenuItem}>EVENTS</li>
                    <li className={styles.navMenuItem}>PRODUCTS</li>
                    <li className={styles.navMenuItem}>SUPPORT</li> */}
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu
