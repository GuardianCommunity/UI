import Image from 'next/image';
import Link from "next/link";
import classNames from 'classnames';

import styles from './nav.module.scss';
import Icon from "../../icon";
import Button from "../../button/button.component";

const Nav = () =>
{
    return (
        <header className={styles.header}>
            <nav className={classNames([styles.nav, 'container'])}>
                <span className={styles.navLogo}>
                    <Image src="/static/logo.svg" alt="Guardian Community" width={50} height={50} />
                    <span>Guardian</span>
                </span>
                <div className={styles.navNav}>
                    <ul className={styles.navList}>
                        <li className={styles.navListItem}>
                            <Link href="#" className={styles.navListLink}>Exchange</Link>
                        </li>
                        <li className={styles.navListItem}>
                            <span>
                                Buy Crypto
                                <Icon name="arrow-down" />
                            </span>
                        </li>
                        <li className={styles.navListItem}>
                            <Link href="#" className={styles.navListLink}>Market</Link>
                        </li>
                        <li className={styles.navListItem}>
                            <Link href="#" className={styles.navListLink}>Discover</Link>
                        </li>
                    </ul>

                    <div className={styles.navSettings}>
                        <div>
                            <button className={styles.navSettingsLng}>
                                EN/USD
                                <Icon name="arrow-down" />
                            </button>
                        </div>

                        <Button name="Sign up" type="Primary" />
                        <Button name="Login" type="Secondary" />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
