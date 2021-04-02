import React from 'react'
import './subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../../reducer';
 function Subtotal(props) {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={
                    (value) =>(
                        <>
                            <p>
                                subtotal ({basket.length} items): <strong> {value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox"/>
                                this order contains a gift
                            </small>

                        </>
                    )
                }
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>processed to checkout</button>
        </div>
    )
}

export default Subtotal;