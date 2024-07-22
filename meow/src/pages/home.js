import React, { Component } from 'react';
import Header from "../components/header";
import { Link, HashRouter, Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from "../components/footer";
import Recepies from "../components/recepies";




function Homepage() {
    return (
        <div>
            <Header />
            <Footer />
        </div >

    );

}

export default Homepage;