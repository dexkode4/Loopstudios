import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { CloseIcon, LogoIcon } from '../../assets/svg';
import styles from './NavMenu.module.scss';
import { INavMenu } from '../../interface';
import cx from 'classnames';



export const MenuLinks = [
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
                } className={cx(isOpen && styles.rotate, styles.closeIcon)} />
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
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu
