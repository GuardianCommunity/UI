import IWallet from "../interface/wallet";


class MetaMask extends IWallet
{
    ChainID: string;
    Address: string;

    constructor()
    {
        super();

        this.ChainID = "";
        this.Address = "";
    }

    async Connected(): Promise<boolean>
    {

        return true;
    }

    Request(): number
    {


        return 0;
    }

    Disconnect(): void
    {

    }

    async Connect(): Promise<void>
    {
        try
        {
            const ChainID = await window.ethereum.request({ method: 'eth_chainId' });
            const Account = await window.ethereum.request({ method: 'eth_requestAccounts' });

            this.ChainID = ChainID;
            this.Address = Account[0];

            console.log("Network: " + ChainID);
            console.log("Address: " + Account[0]);
        }
        catch (e)
        {
            console.log("E: ");
            console.log(e);
        }
    }

    IsInstalled(): boolean
    {
        if (typeof window.ethereum == 'undefined')
            return false;

        return window.ethereum.isMetaMask;
    }
}

async function Request(ID: number): Promise<void>
{
    if (ID == 1)
    {
        const WalletMetaMask = new MetaMask();

        if (WalletMetaMask.IsInstalled())
        {
            await WalletMetaMask.Connect();
        }
    }

}

export default { Request }
