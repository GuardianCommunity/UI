export enum State
{
    WALLET_METAMASK,
    WALLET_TRUST,
    WALLET_BINANCE
}

export abstract class Connector
{
    ChainID: number | undefined;
    Address: string | undefined;

    abstract Configure(): void;

    abstract IsInstalled(): boolean;
}
