import React from 'react';

import "./product.css";
import {FaStar} from "react-icons/fa";
import { useStateValue } from '../StateProvider';

function Product({id,price,title,image,rating}) {
    const [{basket},dispatch] = useStateValue();
    console.log(basket);
    const addToBasket = () =>{
        // dispatch item into the data layer 
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating

            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p > {title}</p>
                <p className="product__price">  
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product_rating">

                {
                    Array(rating).fill().map((_,i)=>( <p><FaStar/></p>))
                }
               
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>add to basket</button>
        </div>
    )
}

export default Product;