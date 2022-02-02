import React from "react";

import { NavLink } from "react-router-dom";

import "./header.scss";

import SvgScript from "../script/svg";
import WalletScript from "../script/wallet";
import WalletComponent from "../component/wallet";

import { GetString, SetLanguage } from "../script/language";

export default () =>
{
    const [ WalletChainID, SetWalletChainID ]: any = React.useState(undefined);
    const [ WalletAddress, SetWalletAddress ]: any = React.useState(undefined);

    React.useEffect(() =>
    {
        WalletScript.OnChange(UpdateCallBack);

        return () =>
        {
            WalletScript.OnChangeRemove(UpdateCallBack);
        };
    });

    const UpdateCallBack = () =>
    {
        SetWalletAddress(WalletScript.GetAddress());
        SetWalletChainID(WalletScript.GetChainID());
    };

    const GetNetwork = () =>
    {
        if (WalletChainID == 56)
            return "BSC";

        return GetString("Header.Option.Wallet.Network");
    };

    const GetAddress = () =>
    {
        let Address = WalletAddress.substring(0, 6) + "•••" + WalletAddress.substring(WalletAddress.length - 4);

        Address = Address.toUpperCase();
        Address = Address.substring(0, 1) + "x" + Address.substring(2);

        return Address;
    };

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
                            <NavLink to="/Roadmap">{ GetString("Header.Menu.Roadmap") }</NavLink>
                            <NavLink to="#">{ GetString("Header.Menu.Whitepaper") }</NavLink>
                        </div>
                    </span>
                </nav>
                <div className="Option">
                    <div className="Language">
                        { SvgScript.HeaderLanguage(24, 24) }
                        <div className="Content">
                            <div onClick={ () => SetLanguage(1) }>{ GetString("Header.Option.Language.English") }</div>
                            <div onClick={ () => SetLanguage(2) }>{ GetString("Header.Option.Language.Persian") }</div>
                        </div>
                    </div>
                    {
                        WalletAddress ?
                            <div className="WalletConnect">
                                <span className="Address" onClick={ () => WalletComponent.Disconnect() }>{ GetAddress() }</span>
                                <span className="Network">{ GetNetwork() }</span>
                            </div>
                            :
                            <div onClick={ () => WalletComponent.Connect() } className="Wallet">{ GetString("Header.Option.Wallet") }</div>
                    }
                </div>
            </header>
            <div className="HeaderSeparator" />
        </>);
}
