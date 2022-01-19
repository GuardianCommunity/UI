const Language = JSON.parse(JSON.stringify(require("../../public/locale/" + (localStorage.Language ?? "en-US") + ".json")));

export function SetLanguage(ID: number): void
{
    let Result;

    switch (ID)
    {
        case 1:
        {
            Result = "en-US";
            break;
        }
        case 2:
        {
            Result = "fa-IR";
            break;
        }
        default:
        {
            return;
        }
    }

    if (localStorage.Language == Result)
        return;

    localStorage.Language = Result;

    window.location.reload(); // TODO is this correct way to re-render UI ?
}

export function GetString(Name: string): string
{
    return Language[Name];
}
