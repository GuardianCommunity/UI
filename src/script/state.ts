const StateMap: any = [];

function Set(Name: string, Value: any): void
{
    StateMap[Name] = Value;
}

function Get(Name: string): any
{
    return StateMap[Name];
}

export default { Set, Get };
