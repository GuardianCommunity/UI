import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderLayout from './layout/header';
import HomePage from "./page/home";

import "./script/language";
import "./index.css";

function App()
{
    return (
        <React.StrictMode>
            <BrowserRouter>

                <HeaderLayout />

                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/Swap" element={ <HomePage /> } />
                    <Route path="/Lend" element={ <HomePage /> } />
                </Routes>

            </BrowserRouter>
        </React.StrictMode>);
}

ReactDOM.render(<App />, document.getElementById("App"));

declare global
{
    interface Window
    {
        ethereum: any;
    }
}
