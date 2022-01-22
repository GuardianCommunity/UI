import React from "react";
import { NavLink } from "react-router-dom";

import { GetString, SetLanguage } from "../script/language";

import WalletComponent from "../component/wallet";
import Wallet from "../script/wallet";

import "./header.css";

export default () =>
{
    const [ WalletNetwork, SetWalletNetwork ]: any = React.useState(null);
    const [ WalletAddress, SetWalletAddress ]: any = React.useState(null);

    React.useEffect(() =>
    {
        Wallet.Connected().then((Result) =>
        {
            if (Result.Status)
            {
                SetWalletAddress(Result.Address);
                SetWalletNetwork(Result.Network);
            }
        });
    });

    return (
        <>
            <header id="Header">
                <nav className="Menu">
                    <NavLink to="/" className={ ({ isActive }) => (isActive ? "Active" : "") }>{ GetString("Header.Menu.Home") }</NavLink>
                    <NavLink to="/Swap" className={ ({ isActive }) => (isActive ? "Active" : "") }>{ GetString("Header.Menu.Swap") }</NavLink>
                    <NavLink to="/Lend" className={ ({ isActive }) => (isActive ? "Active" : "") }>{ GetString("Header.Menu.Lend") }</NavLink>
                    <NavLink to="/NFT" className={ ({ isActive }) => (isActive ? "Active" : "") }>{ GetString("Header.Menu.NFT") }</NavLink>
                    <span className="SubMenu">
                         •••
                        <div className="Content">
                            <NavLink to="#">{ GetString("Header.Menu.Blog") }</NavLink>
                            <NavLink to="#">{ GetString("Header.Menu.Roadmap") }</NavLink>
                            <NavLink to="#">{ GetString("Header.Menu.Whitepaper") }</NavLink>
                        </div>
                    </span>
                </nav>
                <div className="Option">
                    <div className="Language">
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024"><path d="M446.857143 616q-0.571429 1.714286-7.142857-0.285714T421.714286 609.142857l-11.428572-5.142857q-25.142857-11.428571-49.714285-28-4-2.857143-23.428572-18T315.428571 541.714286q-38.285714 58.857143-76.571428 103.428571-46.285714 54.285714-60 62.857143-2.285714 1.142857-11.142857 2.285714t-10.571429 0q3.428571-2.285714 46.857143-52.571428 12-13.714286 48.857143-65.714286T297.714286 524.571429q9.714286-17.142857 29.142857-56.285715t20.571428-44.285714q-4.571429-0.571429-62.857142 18.857143-4.571429 1.142857-15.714286 4.285714T249.142857 452.571429t-9.714286 2.857142q-1.142857 1.142857-1.142857 6t-0.571428 5.428572q-2.857143 5.714286-17.714286 8.571428-13.142857 4-26.857143 0-10.285714-2.285714-16-12-2.285714-3.428571-2.857143-13.142857 3.428571-1.142857 14-2.857143t16.857143-3.428571q33.142857-9.142857 60-18.285714 57.142857-20 58.285714-20 5.714286-1.142857 24.571429-11.142857t25.142857-12.285715q5.142857-1.714286 12.285714-4.571428t8.285715-3.142857 3.428571 0.285714q1.142857 6.857143-0.571428 18.857143 0 1.142857-7.142858 15.428571T374.285714 439.714286 364.571429 458.857143q-14.285714 28.571429-44 74.857143l36.571428 16q6.857143 3.428571 42.571429 18.285714t38.571428 16q2.285714 0.571429 6 14.571429t2.571429 17.428571zM329.714286 338.285714q1.714286 8.571429-2.285715 16-6.857143 13.142857-28.571428 21.714286-17.142857 6.857143-34.285714 6.857143-14.857143-1.714286-28-14.857143-8-8.571429-10.285715-23.428571l0.571429-1.714286q1.714286 1.714286 11.142857 2.857143t15.142857 0 33.142857-9.142857q20.571429-6.857143 31.428572-8 9.714286 0 12 9.714285z m398.857143 73.714286l36 129.714286-79.428572-24zM95.428571 869.142857l396.571429-132.571428V146.857143L95.428571 280v589.142857z m709.142858-181.142857l58.285714 17.714286-103.428572-375.428572-57.142857-17.714285-123.428571 306.285714 58.285714 17.714286 25.714286-62.857143 120.571428 37.142857zM517.142857 138.285714l327.428572 105.142857V26.285714z m177.714286 756l90.285714 7.428572-30.857143 91.428571-22.857143-37.714286q-74.285714 47.428571-157.714285 61.714286-33.142857 6.857143-52 6.857143h-48q-45.142857 0-114-22.285714T254.857143 953.142857q-4.571429-4-4.571429-9.142857 0-4.571429 2.857143-7.714286t7.428572-3.142857q2.285714 0 10.285714 4.285714t17.428571 9.428572 11.714286 6.285714q41.714286 21.142857 91.142857 35.142857T481.142857 1002.285714q54.285714 0 95.428572-8.285714t89.714285-28.857143q8.571429-4 17.428572-8.857143t19.428571-10.857143 16.285714-9.428571z m256-616.571428v616.571428l-442.285714-140.571428q-8 3.428571-214.285715 72.857143T84 896q-7.428571 0-10.285714-7.428571 0-0.571429-0.571429-1.714286V270.857143q1.714286-5.142857 2.285714-5.714286 2.857143-3.428571 11.428572-6.285714 60.571429-20 85.142857-28.571429V10.857143l318.857143 113.142857q1.142857 0 91.714286-31.428571t180.571428-62T855.428571 0q11.428571 0 11.428572 12v238.857143z" /></svg>
                        <div className="Content">
                            <div onClick={ () => SetLanguage(1) }>{ GetString("Header.Option.Language.English") }</div>
                            <div onClick={ () => SetLanguage(2) }>{ GetString("Header.Option.Language.Persian") }</div>
                        </div>
                    </div>
                    {
                        WalletAddress ?
                            <div className="WalletConnect">
                                <span className="Address" onClick={ () => WalletComponent.Address() }>{ WalletAddress }</span>
                                <span className="Network">{ WalletNetwork ?? GetString("Header.Option.Wallet.Network") }</span>
                            </div>
                            :
                            <div onClick={ () => WalletComponent.Wallet() } className="Wallet">{ GetString("Header.Option.Wallet") }</div>
                    }
                </div>
            </header>
            <div className="HeaderSeparator" />
        </>);
}
