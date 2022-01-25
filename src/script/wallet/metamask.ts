import { WalletState, IWallet } from "../../interface/wallet";

export default class extends IWallet
{
    async Connect()
    {
        let Result;

        try
        {
            const ChainID = await window.ethereum.request({ method: "eth_chainId" });
            const Account = await window.ethereum.request({ method: "eth_requestAccounts" });

            this.ChainID = ChainID;
            this.Address = Account[0];

            Result = WalletState.SUCCESS;
        }
        catch (e)
        {
            Result = WalletState.ERROR_REJECT;
        }

        return Result;
    }

    IsConnected()
    {
        if (this.ChainID && this.Address)
            return WalletState.SUCCESS;

        return WalletState.ERROR_CONNECT;
    }

    IsInstalled()
    {
        if (typeof window.ethereum == "undefined")
            return false;

        return window.ethereum.isMetaMask;
    }

    GetAddress()
    {
        return this.Address;
    }

    GetChainID()
    {
        return this.ChainID;
    }
}
