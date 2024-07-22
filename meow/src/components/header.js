import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link ,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Recepies from './recepies';
//import Recepies from "./recepies";


export default function Header() {


    return (
        <header>
            <div>
                <meta charset="utf-8" />
                <span className='logo'>Котята-поварята</span>
                <ul className='nav'>
                    <a href="/recepies" title="Здесь вы можете найти рецепты!!!!" target="_blank">Ингредиенты</a>
                </ul>
                <ul className='am'>
                    <a href='http://localhost:8000/social-auth/login/google-oauth2/'>Авторизоваться через Google!</a>
                </ul>
                <ul className='nav'>
                    <a href="/favourite" title="Избранное" target="_blank">Избранные рецепты!</a>
                </ul>
                <ul className='nav'>
                    <a href="/makeRecipe" title="Создать рецепт!" target="_blank">Создать рецепт!</a>
                </ul>
            </div>
            
            <div className='presentation'></div>
        </header>
    )
}