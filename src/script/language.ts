const Lang = JSON.parse(JSON.stringify(require("../../public/locale/" + (localStorage.Language ?? "en-US") + ".json")));

export function IsRTL(): boolean
{
    return localStorage.Language == "fa-IR";
}

export function SetLanguage(ID: number): void
{
    let Temp;

    switch (ID)
    {
        case 1:
        {
            Temp = "en-US";
            break;
        }
        case 2:
        {
            Temp = "fa-IR";
            break;
        }
        default:
        {
            return;
        }
    }

    if (localStorage.Language != Temp)
    {
        localStorage.Language = Temp;

        window.location.reload();
    }
}

export function GetString(Name: string): string
{
    return Lang[Name];
}
