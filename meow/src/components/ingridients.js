import React from 'react';
import carrot from '../img/carrot.jpg';
import garlic from '../img/garlic.jpg';
import egg from '../img/egg.jpg';
import butter from '../img/butter.jpg';
import cheese from '../img/cheese.jpg';
import sour_cream from '../img/sour_cream.jpg';
import butter1 from '../img/butter1.jpg';
import milk from '../img/milk.jpg';
//import CheckoutButton from './fcomp';

export default function Ingredients(props) {

    function IngredientImage(props) {
        switch (props.id) {
            case (3):
                return (<div className="image"><img src={carrot}/></div>)
            case (4):
		return (<div className="image"><img src={garlic}/></div>)
                break;
            case (9):
	return (<div className="image"><img src={egg}/></div>)
                break;
	    //case (4):
	//return (<div className="image"><img src={butter}/></div>)
                //break;
	    case (5):
	return (<div className="image"><img src={cheese}/></div>)
                break;
	    case (6):
	return (<div className="image"><img src={sour_cream}/></div>)
                break;
	    case (7):
	return (<div className="image"><img src={butter1}/></div>)
                break;
	    case (8):
	return (<div className="image"><img src={milk}/></div>)
                break;
        }}
    return (
        <div className='ingridients'>
            <h1>{props.title}</h1>
            <IngredientImage id={props.id}/>
        </div>
    )
}