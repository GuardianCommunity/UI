import Wallet from "../interface/wallet";


export async function Connect(WalletID: number): Promise<number>
{
    let Result = -1;

    switch (WalletID)
    {
        case 1:
        {
            if (typeof window.ethereum == 'undefined')
            {
                Result = 1;
                break
            }

            const Account = await window.ethereum.request({ method: "eth_requestAccounts" });

            console.log('Account: ');
            console.log(Account[0]);


            break;
        }
    }

    return Result;
}
class MetaMask extends Wallet
{
    Network: string;
    Address: string;

    constructor()
    {
        super();

        this.Network = "";
        this.Address = "";
    }

    async Connected(): Promise<boolean>
    {
        const Account = await window.ethereum.request({ method: "eth_accounts" });

        if (Account.length == 0)
            return false;

        this.Address = Account[0];
        this.Network = window.ethereum.networkVersion;

        return true;
    }

    Disconnect(): void
    {

    }

    Installed(): boolean
    {
        return typeof window.ethereum != 'undefined';
    }

    Request(): number
    {
        window.ethereum.on('accountsChanged', (Account: any) =>
        {
            this.Address = Account[0];
            this.Network = window.ethereum.networkVersion;

        });

        return 0;
    }
}

const WalletMetaMask = new MetaMask();

export async function Connected(): Promise<any>
{
    const Status = await WalletMetaMask.Connected();

    let Address, Network;

    if (Status)
    {
        Address = WalletMetaMask.Address.substring(0, 6) + "•••" + WalletMetaMask.Address.substring(WalletMetaMask.Address.length - 4);

        Address = Address.toUpperCase();
        Address = Address.substring(0, 1) + 'x' + Address.substring(2);

        Network = WalletMetaMask.Network == "516" ? "BSC" : null;
    }

    return { Status: Status, Address: Address, Network: Network };
}

export default { Connected }
