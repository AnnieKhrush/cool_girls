import React, { useState, useEffect } from 'react';

import { useLocation, useParams } from 'react-router-dom';

function OneRecepie(props) {

    const params = useParams();
    console.log(params);
    const [recipe , setRecipe] = useState('');
    const [favouriteid, setFavouriteid] = useState([]);
    const [favourite, setFavourite] = useState({});
    
    
    useEffect(()=> {
        fetch(`recipes/recipes/${params.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('data');
            console.log(data);
            setRecipe(data);
        })
    }, [params.id])

    function handleClick(event) {
        let list = favouriteid;
        let dict_fav = favourite;
        console.log(dict_fav);
        if (!list.includes(event.target.value)) {
            event.currentTarget.disabled = true;
            dict_fav[event.target.value] = true;
            setFavourite(dict_fav);
            list.push(event.target.value);
            setFavouriteid(list);
        }
        fetch(`recipes/add_to_favorites/${params.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => { console.log(response); return response.json()})
        .then(data => {
            console.log('data');
            console.log(data);
        })
    }

    return (
        <div>
            <h1 className='logo'>Ваш рецепт:</h1>
            {
                <div className='recipes'>

                   <h1>{recipe.name_recipe}</h1>
                    <p>{recipe.description}</p>
                    <button value={params.id} onClick={handleClick}>
                            {favouriteid.includes(params.id) ? 'Рецепт добавлен в избранное!' : 'Добавить в избранное!'}
                    </button>
                </div>
            }
        </div >

    );

}

export default OneRecepie;