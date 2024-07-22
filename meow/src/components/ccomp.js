import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PageButton(props) {
    
    return (
        <Link to={'/Show'} state={{ listids: props.list_ids }}>
            <button > Показать рецепты! </button>
        </Link>
    );
}

export default PageButton;