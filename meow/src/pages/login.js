import React, { useState } from 'react';
import Header from "../components/header";
import { Link, HashRouter, Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from "../components/footer";
import Recepies from "../components/recepies";
import LoginButton from '../components/LoginButton';


function LoginPage( ) {

    return (
       <div>
            <LoginButton />
        </div>
   );
}

export default LoginPage;