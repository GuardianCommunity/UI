import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import classnames from 'classnames';

import styles from '../styles/Home.module.scss'
import Button from "../components/button/button.component";
import Link from "next/link";

const Home: NextPage = () =>
{
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
                <meta content="ie=edge" httpEquiv="X-UA-Compatible" />

                <title>Guardian Community</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <section className={classnames(['container', styles.sectionStart])}>
                    <div className={styles.sectionStartContent}>
                        <h1>Buy & sell <br/> crypto in minutes</h1>
                        <p>Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset exchange.</p>
                        <Button name="Get started now" type="Primary" />
                    </div>

                    <div className={styles.sectionStartBG}>
                        <Image
                            src="/static/cards.png"
                            alt="Guardian Community"
                            layout={'fill'}
                            objectFit={'contain'}
                        />
                    </div>

                    <div className={styles.sectionStartCards}>
                        <div className={styles.sectionStartCard}>
                            <span className={styles.sectionStartCardIcon}>
                                <Image
                                    src="/static/currency/bitcoin.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.sectionStartCardDetails}>
                                <div className={styles.sectionStartCardDetailsInfo}>
                                    <span className={styles.sectionStartCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.sectionStartCardDetailsInfoNegative}>-0.79%</span>
                                </div>

                                <div className={styles.sectionStartCardDetailsPrice}>36,641.20</div>
                                <div className={styles.sectionStartCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.sectionStartCard}>
                            <span className={styles.sectionStartCardIcon}>
                                <Image
                                    src="/static/currency/chainlink.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.sectionStartCardDetails}>
                                <div className={styles.sectionStartCardDetailsInfo}>
                                    <span className={styles.sectionStartCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.sectionStartCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.sectionStartCardDetailsPrice}>36,641.20</div>
                                <div className={styles.sectionStartCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.sectionStartCard}>
                            <span className={styles.sectionStartCardIcon}>
                                <Image
                                    src="/static/currency/monero.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.sectionStartCardDetails}>
                                <div className={styles.sectionStartCardDetailsInfo}>
                                    <span className={styles.sectionStartCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.sectionStartCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.sectionStartCardDetailsPrice}>36,641.20</div>
                                <div className={styles.sectionStartCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                        <div className={styles.sectionStartCard}>
                            <span className={styles.sectionStartCardIcon}>
                                <Image
                                    src="/static/currency/maid.svg"
                                    alt="Guardian Community"
                                    width={40}
                                    height={40}
                                />
                            </span>

                            <div className={styles.sectionStartCardDetails}>
                                <div className={styles.sectionStartCardDetailsInfo}>
                                    <span className={styles.sectionStartCardDetailsInfoSubTitle}>BTC/USDT</span>
                                    <span className={styles.sectionStartCardDetailsInfoPositive}>-0.79%</span>
                                </div>

                                <div className={styles.sectionStartCardDetailsPrice}>36,641.20</div>
                                <div className={styles.sectionStartCardDetailsMoney}>36,641.20</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={classnames(['container', styles.sectionMarket])}>
                    <div className={styles.sectionMarketHead}>
                        <h2>Market trend</h2>
                        <Button name="View more" />
                    </div>

                    <div className={styles.sectionMarketSort}>
                        <button className={styles.sectionMarketSortActive}>All</button>
                        <button>DeFi</button>
                        <button>Innovation</button>
                        <button>POS</button>
                        <button>NFT</button>
                        <button>POW</button>
                        <button>Storage</button>
                    </div>

                    <div className={styles.sectionMarketTable}>
                        <div className={styles.sectionMarketTableRow}>
                            <div className={styles.sectionMarketTableRowCol}>#</div>
                            <div className={styles.sectionMarketTableRowCol}>Name</div>
                            <div className={styles.sectionMarketTableRowCol}>Price</div>
                            <div className={styles.sectionMarketTableRowCol}>24h change</div>
                            <div className={styles.sectionMarketTableRowCol}>Chart</div>
                            <div className={styles.sectionMarketTableRowCol}>Trade</div>
                        </div>

                        <Link href="#">
                            <a className={styles.sectionMarketTableRow}>
                                <div className={styles.sectionMarketTableRowCol}>1</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <div className={styles.sectionMarketTableRowColItem}>
                                        <div className={styles.sectionMarketTableRowColItemIcon}>
                                            <Image
                                                src="/static/currency/bitcoin.svg"
                                                alt="Guardian Community"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className={styles.sectionMarketTableRowColItemDetails}>
                                            <span className={styles.sectionMarketTableRowColItemDetailsSubtitle}>Bitcoin</span>
                                            <span className={styles.sectionMarketTableRowColItemDetailsCurrency}>BTC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classnames([styles.sectionMarketTableRowCol, styles.sectionMarketTableRowColPrice])}>$36,201.34</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <span className={styles.sectionMarketTableRowColPositive}>+1.71%</span>
                                </div>
                                <div className={styles.sectionMarketTableRowCol}>CHART</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <Button name="Trade" />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.sectionMarketTableRow}>
                                <div className={styles.sectionMarketTableRowCol}>2</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <div className={styles.sectionMarketTableRowColItem}>
                                        <div className={styles.sectionMarketTableRowColItemIcon}>
                                            <Image
                                                src="/static/currency/ethereum.svg"
                                                alt="Guardian Community"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className={styles.sectionMarketTableRowColItemDetails}>
                                            <span className={styles.sectionMarketTableRowColItemDetailsSubtitle}>Bitcoin</span>
                                            <span className={styles.sectionMarketTableRowColItemDetailsCurrency}>BTC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classnames([styles.sectionMarketTableRowCol, styles.sectionMarketTableRowColPrice])}>$36,201.34</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <span className={styles.sectionMarketTableRowColNegative}>+1.71%</span>
                                </div>
                                <div className={styles.sectionMarketTableRowCol}>CHART</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <Button name="Trade" />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.sectionMarketTableRow}>
                                <div className={styles.sectionMarketTableRowCol}>3</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <div className={styles.sectionMarketTableRowColItem}>
                                        <div className={styles.sectionMarketTableRowColItemIcon}>
                                            <Image
                                                src="/static/currency/ethereum.svg"
                                                alt="Guardian Community"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className={styles.sectionMarketTableRowColItemDetails}>
                                            <span className={styles.sectionMarketTableRowColItemDetailsSubtitle}>Bitcoin</span>
                                            <span className={styles.sectionMarketTableRowColItemDetailsCurrency}>BTC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classnames([styles.sectionMarketTableRowCol, styles.sectionMarketTableRowColPrice])}>$36,201.34</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <span className={styles.sectionMarketTableRowColNegative}>+1.71%</span>
                                </div>
                                <div className={styles.sectionMarketTableRowCol}>CHART</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <Button name="Trade" />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.sectionMarketTableRow}>
                                <div className={styles.sectionMarketTableRowCol}>4</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <div className={styles.sectionMarketTableRowColItem}>
                                        <div className={styles.sectionMarketTableRowColItemIcon}>
                                            <Image
                                                src="/static/currency/ethereum.svg"
                                                alt="Guardian Community"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className={styles.sectionMarketTableRowColItemDetails}>
                                            <span className={styles.sectionMarketTableRowColItemDetailsSubtitle}>Bitcoin</span>
                                            <span className={styles.sectionMarketTableRowColItemDetailsCurrency}>BTC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classnames([styles.sectionMarketTableRowCol, styles.sectionMarketTableRowColPrice])}>$36,201.34</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <span className={styles.sectionMarketTableRowColNegative}>+1.71%</span>
                                </div>
                                <div className={styles.sectionMarketTableRowCol}>CHART</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <Button name="Trade" />
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className={styles.sectionMarketTableRow}>
                                <div className={styles.sectionMarketTableRowCol}>5</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <div className={styles.sectionMarketTableRowColItem}>
                                        <div className={styles.sectionMarketTableRowColItemIcon}>
                                            <Image
                                                src="/static/currency/ethereum.svg"
                                                alt="Guardian Community"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className={styles.sectionMarketTableRowColItemDetails}>
                                            <span className={styles.sectionMarketTableRowColItemDetailsSubtitle}>Bitcoin</span>
                                            <span className={styles.sectionMarketTableRowColItemDetailsCurrency}>BTC</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={classnames([styles.sectionMarketTableRowCol, styles.sectionMarketTableRowColPrice])}>$36,201.34</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <span className={styles.sectionMarketTableRowColNegative}>+1.71%</span>
                                </div>
                                <div className={styles.sectionMarketTableRowCol}>CHART</div>
                                <div className={styles.sectionMarketTableRowCol}>
                                    <Button name="Trade" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </section>

                <section className={styles.sectionTrader}>
                    <div className="container">
                        <div className={styles.sectionTraderHeading}>
                            <h3>Become a crypto trader in seconds</h3>
                            <p>We have got everything you need to start trading.</p>
                        </div>

                        <div className={styles.sectionTraderCards}>
                            <div className={styles.sectionTraderCardsCard}>
                                <div className={styles.sectionTraderCardsCardIcon}>
                                    <Image
                                        src="/static/education.png"
                                        alt="IQ"
                                        width={160}
                                        height={160}
                                    />
                                </div>

                                <h4>Buy & Sell Crypto</h4>
                                <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
                                <Link href="#">
                                    <Button name="Buy Crypto" link={true} />
                                </Link>
                            </div>
                            <div className={styles.sectionTraderCardsCard}>
                                <div className={styles.sectionTraderCardsCardIcon}>
                                    <Image
                                        src="/static/card-pic.png"
                                        alt="IQ"
                                        width={160}
                                        height={160}
                                    />
                                </div>

                                <h4>Trade Assets</h4>
                                <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
                                <Link href="#">
                                    <Button name="Trade now" link={true} />
                                </Link>
                            </div>
                            <div className={styles.sectionTraderCardsCard}>
                                <div className={styles.sectionTraderCardsCardIcon}>
                                    <Image
                                        src="/static/card-pic-3.png"
                                        alt="IQ"
                                        width={160}
                                        height={160}
                                    />
                                </div>

                                <h4>Learn Crypto</h4>
                                <p>We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.</p>
                                <Link href="#">
                                    <Button name="Learn now" link={true} />
                                </Link>
                            </div>
                        </div>

                        <Button name="Contact US" type="Primary" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;
