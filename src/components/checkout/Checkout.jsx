import React from 'react'
import Checkoutproduct from '../checkoutproduct/CheckOutProduct';
import { useStateValue } from '../StateProvider';
import Subtotal from '../subtotal/Subtotal';
import './checkout.css';

function Checkout(props) {
    
    const [{basket},dispatch] = useStateValue();
    return (
       <div className="checkout">
           <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/Events/2021/WHM/WHM_Banner_1500x300.jpg" alt=""/>
                <div className="checkout__title">
                    <h2>your shopping basket</h2>
                </div>
                {
                    basket.map((item,index) => <Checkoutproduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        key={index}
                    />)
                }
           </div>
           <div className="checkout__right">
                <Subtotal/>
           </div>
       </div>
    )
}
export default Checkout;