import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class IQDocument extends Document
{
    static async getInitialProps(ctx: DocumentContext)
    {
        return await Document.getInitialProps(ctx);
    }

    render(): JSX.Element
    {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default IQDocument;
