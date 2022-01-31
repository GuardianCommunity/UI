import React from "react";
import ReactDOM from "react-dom";

import "./wallet.scss";

import WalletScript from "../script/wallet";

import { GetString } from "../script/language";

import { State as WalletState } from "../interface/wallet";

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
                    <svg width="100" height="100" viewBox="0 0 318.6 318.6"><polygon fill="#E2761B" points="274.1,35.5 174.6,109.4 193,65.8" /><g><polygon fill="#E4761B" points="44.4,35.5 143.1,110.1 125.6,65.8" /><polygon fill="#E4761B" points="238.3,206.8 211.8,247.4 268.5,263 284.8,207.7" /><polygon fill="#E4761B" points="33.9,207.7 50.1,263 106.8,247.4 80.3,206.8" /><polygon fill="#E4761B" points="103.6,138.2 87.8,162.1 144.1,164.6 142.1,104.1" /><polygon fill="#E4761B" points="214.9,138.2 175.9,103.4 174.6,164.6 230.8,162.1" /><polygon fill="#E4761B" points="106.8,247.4 140.6,230.9 111.4,208.1" /><polygon fill="#E4761B" points="177.9,230.9 211.8,247.4 207.1,208.1" /></g><g><polygon fill="#D7C1B3" points="211.8,247.4 177.9,230.9 180.6,253 180.3,262.3" /><polygon fill="#D7C1B3" points="106.8,247.4 138.3,262.3 138.1,253 140.6,230.9" /></g><polygon fill="#233447" points="138.8,193.5 110.6,185.2 130.5,176.1 " /><polygon fill="#233447" points="179.7,193.5 188,176.1 208,185.2 " /><g><polygon fill="#CD6116" points="106.8,247.4 111.6,206.8 80.3,207.7" /><polygon fill="#CD6116" points="207,206.8 211.8,247.4 238.3,207.7" /><polygon fill="#CD6116" points="230.8,162.1 174.6,164.6 179.8,193.5 188.1,176.1 208.1,185.2" /><polygon fill="#CD6116" points="110.6,185.2 130.6,176.1 138.8,193.5 144.1,164.6 87.8,162.1" /></g><g><polygon fill="#E4751F" points="87.8,162.1 111.4,208.1 110.6,185.2" /><polygon fill="#E4751F" points="208.1,185.2 207.1,208.1 230.8,162.1" /><polygon fill="#E4751F" points="144.1,164.6 138.8,193.5 145.4,227.6 146.9,182.7" /><polygon fill="#E4751F" points="174.6,164.6 171.9,182.6 173.1,227.6 179.8,193.5" /></g><polygon fill="#F6851B" points="179.8,193.5 173.1,227.6 177.9,230.9 207.1,208.1 208.1,185.2" /><polygon fill="#F6851B" points="110.6,185.2 111.4,208.1 140.6,230.9 145.4,227.6 138.8,193.5" /><polygon fill="#C0AD9E" points="180.3,262.3 180.6,253 178.1,250.8 140.4,250.8 138.1,253 138.3,262.3 106.8,247.4 117.8,256.4 140.1,271.9 178.4,271.9 200.8,256.4 211.8,247.4" /><polygon fill="#161616" points="177.9,230.9 173.1,227.6 145.4,227.6 140.6,230.9 138.1,253 140.4,250.8 178.1,250.8 180.6,253" /><g><polygon fill="#763D16" points="278.3,114.2 286.8,73.4 274.1,35.5 177.9,106.9 214.9,138.2 267.2,153.5 278.8,140 273.8,136.4 281.8,129.1 275.6,124.3 283.6,118.2" /><polygon fill="#763D16" points="31.8,73.4 40.3,114.2 34.9,118.2 42.9,124.3 36.8,129.1 44.8,136.4 39.8,140 51.3,153.5 103.6,138.2 140.6,106.9 44.4,35.5" /></g><polygon fill="#F6851B" points="267.2,153.5 214.9,138.2 230.8,162.1 207.1,208.1 238.3,207.7 284.8,207.7" /><polygon fill="#F6851B" points="103.6,138.2 51.3,153.5 33.9,207.7 80.3,207.7 111.4,208.1 87.8,162.1" /><polygon fill="#F6851B" points="174.6,164.6 177.9,106.9 193.1,65.8 125.6,65.8 140.6,106.9 144.1,164.6 145.3,182.8 145.4,227.6 173.1,227.6 173.3,182.8" /></svg>
                    <span>{ GetString("Wallet.Grid.MetaMask") }</span>
                </div>
                <div className="Box" onClick={ () => Connect(WalletState.WALLET_TRUST) }>
                    <svg width="100" height="100" viewBox="0 0 40 40"><path fill="#3688EB" d="M19.9959 4.8377L20.7771 3.82105C20.5523 3.64825 20.2766 3.55457 19.9931 3.55457C19.7095 3.55457 19.4339 3.64825 19.209 3.82105L19.9959 4.8377ZM33.425 8.7837H34.7059C34.7081 8.61378 34.6767 8.44509 34.6134 8.28737C34.5502 8.12965 34.4563 7.98603 34.3372 7.8648C34.2181 7.74358 34.0762 7.64714 33.9196 7.58107C33.763 7.515 33.5949 7.4806 33.425 7.47985V8.7837ZM19.9959 36.2161L19.2837 37.2845C19.4936 37.425 19.7405 37.5 19.9931 37.5C20.2457 37.5 20.4925 37.425 20.7024 37.2845L19.9959 36.2161ZM6.57841 8.7837V7.49709C6.40847 7.49783 6.24036 7.53223 6.0838 7.5983C5.92723 7.66437 5.7853 7.76081 5.66621 7.88204C5.54712 8.00326 5.45322 8.14688 5.38995 8.3046C5.32667 8.46232 5.29526 8.63101 5.29754 8.80093L6.57841 8.7837ZM19.2148 5.84861C25.0275 10.3518 31.6846 10.0646 33.4307 10.0646V7.49709C31.6214 7.49709 25.8259 7.72684 20.7943 3.82105L19.2148 5.84861ZM32.1499 8.76073C32.0522 14.7113 31.7995 18.91 31.317 22.0174C30.8345 25.1248 30.1682 26.9399 29.2894 28.238C28.4106 29.5361 27.2848 30.3804 25.6364 31.3626C23.9879 32.3448 21.8799 33.4361 19.2837 35.1535L20.7312 37.2845C23.1895 35.6475 25.2343 34.6021 26.9747 33.5625C28.7284 32.6075 30.2502 31.2779 31.4319 29.6682C32.5806 27.9451 33.3675 25.6475 33.873 22.408C34.3785 19.1685 34.6369 14.809 34.7346 8.80093L32.1499 8.76073ZM20.7312 35.1535C18.1522 33.4304 16.05 32.362 14.413 31.3684C12.776 30.3747 11.6502 29.582 10.7656 28.238C9.8811 26.8939 9.16312 25.1076 8.66915 22.0174C8.17519 18.9273 7.95692 14.7113 7.85928 8.76073L5.29754 8.80093C5.39518 14.809 5.6594 19.18 6.15911 22.408C6.65882 25.636 7.42275 27.9336 8.59448 29.6682C9.77051 31.2788 11.2888 32.6088 13.0402 33.5625C14.7633 34.6021 16.8254 35.6475 19.2837 37.2845L20.7312 35.1535ZM6.57841 10.0646C8.30155 10.0646 14.9644 10.3518 20.7771 5.84861L19.209 3.82105C14.166 7.72684 8.37048 7.49709 6.57266 7.49709L6.57841 10.0646Z" /></svg>
                    <span>{ GetString("Wallet.Grid.TrustWallet") }</span>
                </div>
                <div className="Box" onClick={ () => Connect(WalletState.WALLET_BINANCE) }>
                    <svg width="100" height="100" viewBox="0 0 40 40"><path fill="#F1BA0D" d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z" /></svg>
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