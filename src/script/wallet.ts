import { EventEmitter } from "events";

export enum State
{
    WALLET_METAMASK,
    WALLET_TRUST,
    WALLET_BINANCE,

    SUCCESS,

    ERROR_REJECT,
    ERROR_CONNECT,
    ERROR_INSTALLED
}

abstract class Connector
{
    ChainID: string | undefined;
    Address: string | undefined;

    abstract Configure(): Promise<boolean>;

    abstract IsInstalled(): boolean;
}

class MetaMask extends Connector
{
    async Configure()
    {
        try
        {
            const ChainID = await window.ethereum.request({ method: "eth_chainId" });
            const Account = await window.ethereum.request({ method: "eth_requestAccounts" });

            this.ChainID = ChainID;
            this.Address = Account[0];
        }
        catch (e)
        {
            return false;
        }

        return true;
    }

    IsInstalled()
    {
        if (typeof window.ethereum == "undefined")
            return false;

        return window.ethereum.isMetaMask;
    }
}

class Wallet
{
    private ConnectionProvider: Connector | undefined;

    private EventMain = new EventEmitter();

    Request(ID: State): void
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
                    this.EventMain.emit("OnConnect");
            });
        }
    }

    OnConnect(CB: any): void
    {
        this.EventMain.addListener("OnConnect", CB);
    }

    GetChainID(): string | undefined
    {
        return this.ConnectionProvider?.ChainID;
    }

    GetAddress(): string | undefined
    {
        return this.ConnectionProvider?.Address;
    }
}

console.log("Wallet Created");

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
