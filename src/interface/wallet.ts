export enum WalletState
{
    WALLET_METAMASK,
    WALLET_TRUST,
    WALLET_BINANCE,

    SUCCESS,

    ERROR_INSTALLED,
    ERROR_REJECT,
    ERROR_CONNECT
}

export abstract class IWallet
{
    protected ChainID: string | undefined;
    protected Address: string | undefined;

    abstract Connect(): Promise<WalletState>;

    abstract IsConnected(): WalletState;

    abstract IsInstalled(): boolean;

    abstract GetAddress(): string | undefined;

    abstract GetChainID(): string | undefined;
}
