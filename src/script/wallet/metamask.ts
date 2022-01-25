import { Connector } from "../../interface/wallet";

export default class extends Connector
{
    async Configure()
    {
        try
        {
            const ChainID = await window.ethereum.request({ method: "eth_chainId" });
            const Accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

            this.ChainID = ChainID;
            this.Address = Accounts[0];
        }
        catch (e)
        {
            return false;
        }

        return true;
    }

    IsInstalled()
    {
        if (typeof window.ethereum != "undefined" && window.ethereum.isMetaMask)
        {
            window.ethereum.on("accountsChanged", (Accounts: any) =>
            {
                this.Address = Accounts[0];
            });

            window.ethereum.on("chainChanged", (ChainID: any) =>
            {
                this.ChainID = ChainID;
            });

            return true;
        }

        return false;
    }
}
