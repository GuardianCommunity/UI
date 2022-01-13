let Lang: string;

function GetLanguage(): string
{
    Lang = (localStorage.Language) ? localStorage.Language : 'en-US';

    return Lang;
}

function SetLanguage(ID: number): void
{
    let Temp = 'en-US';

    switch (ID)
    {
        case 1:
        {
            Temp = 'fa-IR';
            break;
        }
    }

    Lang = Temp;
    localStorage.setItem('Language', Temp);
}

export default GetLanguage
