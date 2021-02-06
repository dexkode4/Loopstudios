import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import styles from './Footer.module.scss';
import { LogoIcon, FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon } from '../../assets/svg';
import { MenuLinks } from '../NavMenu';

function Footer() {
    return (
        <div className={styles.footer}>
            <LogoIcon />
            <nav className={styles.footerMenu}>
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
                            >
                                {title.toLowerCase()}
                            </LinkScroll>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.footerSocial}>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <PinterestIcon/>
                        <InstagramIcon/>
            </div>
        </div>
    )
}

export default Footer
