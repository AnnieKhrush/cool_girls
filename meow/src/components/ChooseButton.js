import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChooseButton(props) {

    return (
        <Link to={'/MakeRecipe'} state={{ listids: props.list_ids }}>
            <button > Созать рецепт </button>
        </Link>
    );
}

export default ChooseButton;