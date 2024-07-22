import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Redirect(props) {

    return (
        <div>
            <h1 className='logo'>Вы авторизованы!</h1>
            {
                <Link to={'/'}>
                    <button className='google'> На главную </button>
                </Link> 

            }
        </div >

    );

}

export default Redirect;