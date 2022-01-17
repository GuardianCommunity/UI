import { IsRTL, GetString } from "../script/language";

import "./wallet.css";

if (IsRTL())
{
    require("./wallet-rtl.css");
}

export default () =>
{
    return (
        <div id="Wallet">

            <div className="Header">

                <span className="Title" >{ GetString("Wallet.Header.Title") }</span>
                <span className="Close">&#10006;</span>

            </div>

            <div className="Separator" />

            <div className="Header">
                <span>Connect Wallet</span>
                <span>&#10006;</span>

            </div>

        </div>)
}
