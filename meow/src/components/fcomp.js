import React, { useEffect, useState } from 'react';


function CheckoutButton(props) {
    const [isTook, setIsTook] = useState(false);
    const [ingredient, setIngedient] = useState();
    const ingedientList = new ingedientList();
    useEffect(() => {
        fetch(`//${ingredient.id}`, {
            method: 'GET',
        })
            .then(response => {
                setIngedient(true);
            })
    }, [ingredient.id]);
    const handleClick = () => {
        setIsTook(true);
        ingedientList.addItem(ingredient.id);
    }

    return (
        <button onClick={handleClick} disabled={isTook}>
            {isTook ? 'Ingredient is taken' : 'Take the ingredient'}
        </button>
    );
}

export default CheckoutButton;