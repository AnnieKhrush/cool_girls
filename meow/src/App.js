import './App.css';
import React, { Component } from 'react';
import Header from "./components/header";
import {Routes, BrowserRouter as Router, Route  } from 'react-router-dom';
import Homepage from './pages/home';
import Search from './pages/search';
import RecepiesPage from './pages/recepiespg';
import LoginPage from './pages/login';
import OneRecepie from './pages/one_recipe';
import FavRecipes from './pages/favourites'
import MakeRecipePage from './pages/make_recipe';
import Redirect from './pages/redirect'



class App extends React.Component {
    

    render() {
        return (
            <div className="wrapper">
                <Router>
                    <Routes>
                        <Route path='/recepies' element={<Search />} />
                        <Route path='/:id' element={<OneRecepie />} />
                        <Route path='/' element={<Homepage />} />
                        <Route path='/Show' element={<RecepiesPage />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/auth' element={<Redirect />} />
                        <Route path='/favourite' element={<FavRecipes />} />
                        <Route path='/makeRecipe' element={<MakeRecipePage />} />
                    </Routes>
                </Router>
            </div >

        );
    }
}

export default App;
