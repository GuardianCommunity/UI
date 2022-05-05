import styles from './nav.module.scss';
import Link from "next/link";
import Icon from "../icon";
import Button from "../button/button.component";
import classnames from 'classnames';

const Nav = () =>
{
    return (
        <header className={styles.header}>
            <nav className={classnames([styles.nav, 'container'])}>
                <div className={styles.navLogo}>
                    <img
                        src="/static/logo.svg"
                        alt="Guardian Community"
                    />
                    <span>Guardian</span>
                </div>

                <div className={styles.navToggle}>
                    <span className={styles.navToggleLine} />
                    <span className={styles.navToggleLine} />
                    <span className={styles.navToggleLine} />
                </div>

                <div className={styles.navDetails}>
                    <ul className={styles.navDetailsList}>
                        <li className={styles.navDetailsListItem}>
                            <Link href="#">Exchange</Link>
                        </li>
                        <li className={styles.navDetailsListItem}>
                            <div>
                                <span>Buy Crypto</span>
                                <Icon name="arrow-down" />
                            </div>
                        </li>
                        <li className={styles.navDetailsListItem}>
                            <Link href="#">Market</Link>
                        </li>
                        <li className={styles.navDetailsListItem}>
                            <Link href="#">Discover</Link>
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
