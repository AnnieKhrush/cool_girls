import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChooseButton(props) {

    return (
        <Link to={'/MakeRecipe'} state={{ listids: props.list_ids }}>
            <button > ������ ������ </button>
        </Link>
    );
}

export default ChooseButton;