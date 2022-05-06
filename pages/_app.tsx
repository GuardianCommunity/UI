import '../styles/globals.scss';
import type { AppProps } from 'next/app';

<<<<<<< HEAD
import Nav from '../components/layouts/nav/nav.component';
=======
import Nav from '../components/nav/nav.component';
>>>>>>> 8f65f1c (Navbar)

function MyApp({Component, pageProps}: AppProps)
{
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 8f65f1c (Navbar)
}

export default MyApp;
