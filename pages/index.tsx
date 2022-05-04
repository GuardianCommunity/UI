import type { NextPage } from 'next';
import Head from 'next/head';
import Image from "next/image";

import Main from "../components/layouts/main/main.component";

import styles from '../styles/Home.module.scss';
import Button from "../components/button/button.component";

const Home: NextPage = () =>
{
    return (
        <>
            <Head>
                <title>Guardian Community</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Main>
                <section className={styles.home}>
                    <div className={styles.homeHeaderLeft}>
                        <h1>
                            Buy & sell <br />
                            crypto in minutes
                        </h1>
                        <p>
                            Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset exchange.
                        </p>
                        <Button name="Get started now" type="Primary" />
                    </div>
                    <span className={styles.homeHeaderRight}>
                        <Image
                            src="/static/images/content/cards.png"
                            alt="Guardian Community"
                            width={913}
                            height={924}
                            objectFit="none"
                        />
                    </span>

                    <div className={styles.homeCards}>
                        <div className={styles.homeCard}>
                            <span className={styles.homeCardIcon}>
                                <Image
                                    src="/static/images/content/currency/bitcoin.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.homeCardDetails}>
                                <div className={styles.homeCardDetailsInfo}>
                                    <span className={styles.homeCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.homeCardDetailsInfoNegative}>-0.79%</span>
                                </div>

                                <div className={styles.homeCardDetailsPrice}>36,641.20</div>
                                <div className={styles.homeCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.homeCard}>
                            <span className={styles.homeCardIcon}>
                                <Image
                                    src="/static/images/content/currency/chainlink.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.homeCardDetails}>
                                <div className={styles.homeCardDetailsInfo}>
                                    <span className={styles.homeCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.homeCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.homeCardDetailsPrice}>36,641.20</div>
                                <div className={styles.homeCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.homeCard}>
                            <span className={styles.homeCardIcon}>
                                <Image
                                    src="/static/images/content/currency/monero.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.homeCardDetails}>
                                <div className={styles.homeCardDetailsInfo}>
                                    <span className={styles.homeCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.homeCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.homeCardDetailsPrice}>36,641.20</div>
                                <div className={styles.homeCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.homeCard}>
                            <span className={styles.homeCardIcon}>
                                <Image
                                    src="/static/images/content/currency/maid.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.homeCardDetails}>
                                <div className={styles.homeCardDetailsInfo}>
                                    <span className={styles.homeCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.homeCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.homeCardDetailsPrice}>36,641.20</div>
                                <div className={styles.homeCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    )
}

export default Home;
