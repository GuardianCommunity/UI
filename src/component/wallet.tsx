import React from "react";
import ReactDOM from "react-dom";

import "./wallet.scss";

import SvgScript from "../script/svg";
import WalletScript from "../script/wallet";

import { GetString } from "../script/language";

import { State as WalletState } from "../script/interface/wallet";

function ComponentDisconnect()
{
    const Explore = () =>
    {
        let Result;

        if (WalletScript.GetChainID() == 56)
            Result = "https://bscscan.com/address/" + WalletScript.GetAddress();

        return Result;
    };

    const Disconnect = () =>
    {
        WalletScript.Disconnect();

        Close();
    };

    const Close = () =>
    {
        const WalletComponent = document.getElementById("Wallet");

        if (WalletComponent)
        {
            ReactDOM.unmountComponentAtNode(WalletComponent);

            WalletComponent.remove();
        }
    };

    return (
        <div className="WalletBox">
            <div className="Header">
                <span className="Title">{ GetString("Wallet.Header.Address") }</span>
                <span onClick={ () => Close() } className="Close">&#10006;</span>
            </div>
            <div className="Separator" />
            <div className="Address">{ WalletScript.GetAddress() }</div>
            <div className="Box">
                <span><a target="_blank" href={ Explore() }>{ GetString("Wallet.Explore") }</a></span>
                <span onClick={ () => Disconnect() } className="Disconnect">{ GetString("Wallet.Disconnect") }</span>
            </div>
        </div>);
}

function Disconnect()
{
    const Result = document.createElement("div");
    Result.setAttribute("id", "Wallet");

    ReactDOM.render(<ComponentDisconnect />, document.body.appendChild(Result));
}

function ComponentConnect()
{
    const Connect = (ID: WalletState) =>
    {
        WalletScript.Connect(ID);

        Close();
    };

    const Close = () =>
    {
        const WalletComponent = document.getElementById("Wallet");

        if (WalletComponent)
        {
            ReactDOM.unmountComponentAtNode(WalletComponent);

            WalletComponent.remove();
        }
    };

    return (
        <div className="WalletBox">
            <div className="Header">
                <span className="Title">{ GetString("Wallet.Header.Connect") }</span>
                <span onClick={ () => Close() } className="Close">&#10006;</span>
            </div>
            <div className="Separator" />
            <div className="Grid">
                <div className="Box" onClick={ () => Connect(WalletState.WALLET_METAMASK) }>
                    { SvgScript.WalletMetaMask(100, 100) }
                    <span>{ GetString("Wallet.Grid.MetaMask") }</span>
                </div>
                <div className="Box" onClick={ () => Connect(WalletState.WALLET_TRUST) }>
                    { SvgScript.WalletTrust(100, 100) }
                    <span>{ GetString("Wallet.Grid.TrustWallet") }</span>
                </div>
                <div className="Box" onClick={ () => Connect(WalletState.WALLET_BINANCE) }>
                    { SvgScript.WalletBinance(100, 100) }
                    <span>{ GetString("Wallet.Grid.BinanceWallet") }</span>
                </div>
            </div>
        </div>);
}

function Connect()
{
    const Result = document.createElement("div");
    Result.setAttribute("id", "Wallet");

    ReactDOM.render(<ComponentConnect />, document.body.appendChild(Result));
}

export default { Connect, Disconnect }
