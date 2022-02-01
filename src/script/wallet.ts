import { EventEmitter } from "events";

import MetaMask from "./wallet/metamask";

import { State, Connector } from "./interface/wallet";

class Wallet
{
    private EventMain = new EventEmitter();

    private ConnectionProvider: Connector | undefined;

    constructor()
    {
        if (localStorage.WalletID)
        {
            this.Connect(localStorage.WalletID);
        }
    }

    Connect(ID: State): void
    {
        if (ID == State.WALLET_METAMASK)
        {
            this.ConnectionProvider = new MetaMask(this.EventMain);
        }

        if (this.ConnectionProvider && this.ConnectionProvider.IsInstalled())
        {
            localStorage.WalletID = ID;

            this.ConnectionProvider.Configure();
        }
    }

    Disconnect(): void
    {
        localStorage.WalletID = undefined;

        this.ConnectionProvider = undefined;

        this.EventMain.emit("OnChange");
    }

    OnChange(CB: any): void
    {
        this.EventMain.addListener("OnChange", CB);
    }

    OnChangeRemove(CB: any): void
    {
        this.EventMain.removeListener("OnChange", CB);
    }

    GetChainID(): number | undefined
    {
        return this.ConnectionProvider?.ChainID;
    }

    GetAddress(): string | undefined
    {
        return this.ConnectionProvider?.Address;
    }
}

export default new Wallet();
