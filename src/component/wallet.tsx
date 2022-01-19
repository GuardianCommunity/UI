import React from "react";
import ReactDOM from "react-dom";

import { GetString } from "../script/language";

import "./wallet.css";

class Wallet extends React.Component
{
    Close()
    {
        ReactDOM.findDOMNode(this)?.parentElement?.remove();
    }

    render()
    {
        return (
            <div id="Wallet">
                <div className="Header">
                    <span className="Title">{ GetString("Wallet.Header.Title") }</span>
                    <span onClick={ () => this.Close() } className="Close">&#10006;</span>
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
            </div>);
    }
}

export default () =>
{
    ReactDOM.render(<Wallet />, document.body.appendChild(document.createElement("div")));
}
