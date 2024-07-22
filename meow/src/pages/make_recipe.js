import React, { useState, useEffect, Component } from 'react';
import Ingredients from '../components/ingridients';
import ChooseButton from '../components/ChooseButton';
import LabelInput from '../components/input';



export default function MakeRecipePage() {

    const [ingridients, setIngridients] = useState([]);
    const [ingredientids, setIngredientids] = useState([]);
    const [took, setTook] = useState();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');



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
                    dict[i + 1] = false;
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

    function handleChangeName(event) {
        setName(event.target.value);
    }


    function handleChangeDesc(event) {
        setDesc(event.target.value);
    }


    function MyForm() {
        return (
            <form action="/">
                <hr />
                <label>
                    Name: <input name="Name" value={name} type="text" onChange={handleChangeName}/>
                </label>
                <hr />
                <label>
                    Description: <input name="Description" value={desc} type="text" onChange={handleChangeDesc}/>
                </label>
            </form>
        );
    }

    function CreateRec() {
        
        let newRec = {
            name_recipe: name,
            description: desc,
            ingredient_ids: ingredientids
        };
        console.log(newRec);
        fetch('/recipes/create_recipe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(newRec),
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    function handleSubmit(event) {
        event.preventDefault();
        CreateRec();
    }

    return (
        <div className='ingridients'>
            <h1 className='logo'>Создать рецепт!</h1>
            <MyForm />
            {
                ingridients ? ingridients.map((i, index) => {
                    return (
                        <div key={index}>
                            <Ingredients id={i.id} title={i.name_ingredient} />
                            <button value={i.id} onClick={handleClick}>
                                {ingredientids.includes(i.id) ? 'Ингредиент выбран' : 'Выберите ингредиент'}
                            </button>
                        </div>
                    )
                }) : <></>

            }
            <button onClick={handleSubmit}> Создать рецепт!</button>
        </div>
    )
}

