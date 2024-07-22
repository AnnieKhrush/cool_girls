import React, { useState, useEffect } from 'react';
import PageButton from '../components/ccomp';
import Ingredients from '../components/ingridients';
//import Ingredients from '../components/ingridients';
//import Recepies from '../components/recepies';
//import img from '../img/butter.jpg';

export default function Search() {
    /*  constructor(props) {
            super(props)
            this.state = {
                ingredient: [
                    {
                        id: 1,
                        title: 'milk',
                        img: 'milk choco.jpg'
                    },
                    {
                        id: 2,
                        title: 'butter',
                        img: 'butter.jpg'
                    },
                    {
                        id: 3,
                        title: 'kefir',
                        img: 'milk.jpg'
                    },
                    {
                        id: 4,
                        title: 'smetana',
                        img: 'sour cream.jpg'
                    },
                    {
                        id: 5,
                        title: 'cottagecheese',
                        img: 'cotcheese.jpg'
                    },
                    {
                        id: 6,
                        title: 'cheese',
                        img: 'cheese.jpg'
                    },
                    {
                        id: 7,
                        title: 'eggs',
                        img: 'egg.jpg'
                    },
                    {
                        id: 8,
                        title: 'potato',
                        img: 'potatofree.jpg'
                    },
                    {
                        id: 9,
                        title: 'carrot',
                        img: 'carrot2.jpg'
                    },
                    {
                        id: 10,
                        title: 'onion',
                        img: 'onion.jpg'
                    },
                    {
                        id: 11,
                        title: 'garlic',
                        img: 'garlic.jpg'
                    },
                    {
                        id: 12,
                        title: 'ykrop',
                        img: 'ykrop.jpg'
                    },
                    {
                        id: 13,
                        title: 'apples',
                        img: 'apple.jpg'
                    },
                    {
                        id: 14,
                        title: 'bananas',
                        img: 'minion.jpg'
                    },
                    {
                        id: 15,
                        title: 'lemon',
                        img: 'lemon2.jpg'
                    }
                ]
            }
        }
    */

    const [ingridients, setIngridients] = useState([]);
    const [ingredientids, setIngredientids] = useState([]);
    const [took, setTook] = useState();


    /*
    useEffect(() => {
        fetch(`//${ingredient.id}`, {
            method: 'GET',
        })
            .then(response => {
                setIngedient(true);
            })
    }, [ingredient.id]);
    */
    useEffect(() => {
        fetch('/recipes/ingredients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setIngridients(data);
            let dict = {};
            for (let i = 0; i < ingridients.length; i++) {
                dict[i+1] = false;
            }
            setTook(dict);
            console.log('init dict', took);

        })
    }, [])


    function handleClick(event) {
        let list = ingredientids;
        let dict_took = took;
        if (list.includes(event.target.value)) {
            event.currentTarget.disabled = false;
            dict_took[event.target.value] = false;
            setTook(dict_took);
            const index = list.indexOf(event.target.value);
            list.splice(index, 1);
            setIngredientids(list);
        } else {
            console.log('set', took);
            event.currentTarget.disabled = true;
            dict_took[event.target.value] = true;
            console.log('dict', dict_took);
            setTook(dict_took);
            console.log('elem', took[event.target.value]);
            list.push(event.target.value);
            setIngredientids(list);
        }
    }


    return (
        <div className='ingridients'>
            {
                ingridients ? ingridients.map((i, index)=> {
                    return (
                        <div key = {index}>
                            <Ingredients id={i.id} title={i.name_ingredient}/>
                            <button value={i.id} onClick={handleClick}>
                                {ingredientids.includes(i.id) ? 'Ингредиент выбран' : 'Выберите ингредиент'}
                            </button>
                        </div>
                    )
                }) : <></>

            }
            <PageButton list_ids={ingredientids}/>
        </div>
    )
}