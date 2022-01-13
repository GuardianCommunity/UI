import FileSystem from 'fs';

enum LanguageMap
{
    ENGLISH = 1,
    PERSIAN = 2
}

class Language
{
    private File: any;

    public Set(ID: LanguageMap): void
    {
        let Temp;

        switch (ID)
        {
            case LanguageMap.ENGLISH:
            {
                Temp = 'en-US';
                break;
            }
            case LanguageMap.PERSIAN:
            {
                Temp = 'fa-IR';
                break;
            }
            default:
            {
                return;
            }
        }

        localStorage.setItem('Language', Temp);
    }

    public Get(): string
    {
        return (localStorage.Language) ? localStorage.Language : 'en-US';
    }

    public Parse(): void
    {
        this.File = JSON.parse(FileSystem.readFileSync('./locale/' + this.Get() + '.json', 'utf-8'));
    }

    public String(Name: string): string
    {
        return this.File[Name];
    }
}

export default Language
