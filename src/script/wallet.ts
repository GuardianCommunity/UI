import { EventEmitter } from "events";

import MetaMask from "./wallet/metamask";

import { State, Connector } from "../interface/wallet";

class Wallet
{
    private EventMain = new EventEmitter();

    private ConnectionProvider: Connector | undefined;

    Connect(ID: State): void
    {
        if (ID == State.WALLET_METAMASK)
        {
            this.ConnectionProvider = new MetaMask();
        }

        if (this.ConnectionProvider && this.ConnectionProvider.IsInstalled())
        {
            this.ConnectionProvider.Configure().then(Result =>
            {
                if (Result)
                    this.EventMain.emit("OnChange");
            });
        }
    }

    Disconnect(): void
    {
        this.ConnectionProvider = undefined;
        this.EventMain.emit("OnChange");
    }

    OnChange(CB: any): void
    {
        this.EventMain.addListener("OnChange", CB);
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

/*





export

let WalletMain: IWallet;

export function WalletConnect(ID: WalletState): IWallet | undefined
{
    if (ID == WalletState.WALLET_METAMASK)
    {
        WalletMain = new MetaMask();

        return WalletMain;
    }
}

export function On(Name: string, CB: any)
{
    if (!WalletMain)
        return;

    WalletMain.On(Name, CB);
}
*/
