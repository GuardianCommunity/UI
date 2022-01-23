abstract class Wallet
{
    abstract Address: string;

    abstract Request(): number;

    abstract Connected(): Promise<boolean>;

    abstract IsInstalled(): boolean;

    abstract Connect(): Promise<void>;

    abstract Disconnect(): void;
}

export default Wallet;
