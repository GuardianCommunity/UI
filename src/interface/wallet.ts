abstract class Wallet
{
    abstract Address: string;

    abstract Request(): number;

    abstract Connected(): Promise<boolean>;

    abstract Installed(): boolean;

    abstract Disconnect(): void;
}

export default Wallet;
