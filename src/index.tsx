import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './page/home';

function App()
{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('App'));
