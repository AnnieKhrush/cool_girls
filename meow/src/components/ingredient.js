import React, { Component } from 'react' 
import Ingredients from './ingridients'

export default class Ingredient extends Component {
    render() {
        return (
            <main>
                {this.props.ingredient.map(el => (
                    <Ingredients key={el.id} ingredients={el}/>
                ))}
            </main >
        )
    }
}
