import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './page/home';

function App()
{
    return (
        <>
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        </>);
}

ReactDOM.render(<App />, document.getElementById('App'));
