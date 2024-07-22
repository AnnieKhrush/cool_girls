import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function FavRecipes(props) {

    const [recipesfav , setRecipesfav] = useState([]);

    
    
    useEffect(()=> {
        fetch(`recipes/get_favorites`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('data');
            setRecipesfav(data);
            console.log(recipesfav);
        })
    }, [])

    function RecipesStatus() {
        if (recipesfav.length == 0) {
            return (
                <h1 className='logo'>Избранных рецептов не найдено</h1>
            )
        } else {
            return (
                <h1 className='logo'>Ваши избранные рецепты!</h1>
            )
        }
    }

    return (
        <div>
            <RecipesStatus/>
            {
                recipesfav ? recipesfav.map((r, index)=> {
                    return (
                        <Link to={`/${r.id}`} key = {index}>
                            <div state={{ recipe_id: r.id }} className='recipes'>
                                <h1>{r.name_recipe}</h1>
                            </div>
                        </Link>
                    )
                }) : <></>
            }
        </div >

    );

}

export default FavRecipes;