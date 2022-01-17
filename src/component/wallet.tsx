import React from "react";

import { IsRTL, GetString } from "../script/language";

import "./wallet.css";

if (IsRTL())
{
    require("./wallet-rtl.css");
}

export default () =>
{
    const [ Visible, SetVisibility ] = React.useState(true);

    const Close = () =>
    {
        SetVisibility(false);
    }

    const Open = () =>
    {
        SetVisibility(true);
    }

    return (
        <>
            { Visible && (
                <div id="Wallet">

                    <div className="Header">

                        <span className="Title">{ GetString("Wallet.Header.Title") }</span>
                        <span className="Close" onClick={ () => Close() }>&#10006;</span>

                    </div>

                    <div className="Separator" />

                    <div className="Grid">

                        <div className="Box">

                            <img src={ "./img/metamask.svg" } width="100" height="100" alt="MetaMask" />
                            <span>MetaMask</span>

                        </div>

                        <div className="Box">

                            <img src={ "./img/trustwallet.svg" } width="100" height="100" alt="Trust Wallet" />
                            <span>Trust Wallet</span>

                        </div>

                        <div className="Box">

                            <img src={ "./img/binancewallet.svg" } width="100" height="100" alt="Binance Wallet" />
                            <span>Binance Wallet</span>

                        </div>

                    </div>

                </div>) }
        </>)
}
