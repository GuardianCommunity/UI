import { Connector } from "../../interface/wallet";

export default class extends Connector
{
    private Emitter: any;

    constructor(Emitter: any)
    {
        super();

        this.Emitter = Emitter;
    }

    async Configure()
    {
        try
        {
            const ChainID = await window.ethereum.request({ method: "eth_chainId" });
            const Accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

            this.ChainID = ChainID;
            this.Address = Accounts[0];

            this.Emitter.emit("OnChange");
        }
        catch (e)
        {

        }
    }

    IsInstalled()
    {
        if (window.ethereum && window.ethereum.isMetaMask)
        {
            window.ethereum.on("accountsChanged", (Accounts: any) =>
            {
                this.Address = Accounts[0];

                this.Emitter.emit("OnChange");
            });

            window.ethereum.on("chainChanged", (ChainID: any) =>
            {
                this.ChainID = ChainID;

                this.Emitter.emit("OnChange");
            });

            return true;
        }

        return false;
    }
}
