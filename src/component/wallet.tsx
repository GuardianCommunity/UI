import React from "react";
import ReactDOM from "react-dom";

import { GetString } from "../script/language";
import { Connect } from "../script/wallet";

import "./wallet.css";

class Wallet extends React.Component
{
    ConnectToWallet(ID: number)
    {
        Connect(ID);

        this.Close();
    }

    Close()
    {
        document.getElementById("Wallet")?.remove();
    }

    render()
    {
        return (
            <div className="WalletBox">
                <div className="Header">
                    <span className="Title">{ GetString("Wallet.Header.Title") }</span>
                    <span onClick={ () => this.Close() } className="Close">&#10006;</span>
                </div>
                <div className="Separator" />
                <div className="Grid">
                    <div className="Box" onClick={ () => this.ConnectToWallet(1) }>
                        <img src={ "./img/metamask.svg" } width="100" height="100" alt="MetaMask" />
                        <span>{ GetString("Wallet.Grid.MetaMask") }</span>
                    </div>
                    <div className="Box" onClick={ () => this.ConnectToWallet(2) }>
                        <img src={ "./img/trustwallet.svg" } width="100" height="100" alt="Trust Wallet" />
                        <span>{ GetString("Wallet.Grid.TrustWallet") }</span>
                    </div>
                    <div className="Box" onClick={ () => this.ConnectToWallet(3) }>
                        <img src={ "./img/binancewallet.svg" } width="100" height="100" alt="Binance Wallet" />
                        <span>{ GetString("Wallet.Grid.BinanceWallet") }</span>
                    </div>
                </div>
            </div>);
    }
}

export default () =>
{
    const Result = document.createElement("div");
    Result.setAttribute("id", "Wallet");

    ReactDOM.render(<Wallet />, document.body.appendChild(Result));
}
