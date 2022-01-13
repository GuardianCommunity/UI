import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/layouts/header/header.component';

import Home from './pages/home/home.Component';

function App()
{
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={ <Home /> } />
            </Routes>
        </>
    );
}

export default App;
