let Lang = JSON.parse(JSON.stringify(require("../../public/locale/" + (localStorage.Language ?? "en-US") + ".json")));

export function SetLanguage(ID: number): void
{
    console.log("SetLanguage: " + ID);

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
        // TODO Re-render UI
    }
}

export function GetString(Name: string): string
{
    return Lang[Name];
}
