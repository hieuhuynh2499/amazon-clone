import React from 'react'
import './checkoutproduct.css';
import {FaStar} from "react-icons/fa";
import { useStateValue } from '../StateProvider';
function Checkoutproduct({id,image,title,price,rating}) {

    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }

    return (
        <div className="Checkoutproduct">
            <img className="Checkoutproduct__image" src={image} alt=""/>
            <div className="Checkoutproduct__info">
                <p className="Checkoutproduct__title">{title}</p>
                <p className="Checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="Checkoutproduct__rating">
                    
                {
                    Array(rating).fill().map((_,i)=>( <p><FaStar/></p>))
                }                    
                </div>
                <button onClick={removeFromBasket}>remove from the basket</button>
            </div>
        </div>
    )
}
export default Checkoutproduct;