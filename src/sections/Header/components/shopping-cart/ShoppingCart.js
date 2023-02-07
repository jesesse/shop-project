import React from "react";
import shoppingCart from './shopping-cart.svg'
import './shoppingCart.css'
import { Link } from 'react-router-dom';

function ShoppingCart(props) {

    let style;
    if (props.itemCount > 0) style = {
        backgroundColor: 'red'
    }

    return (
        <Link className="shopping-cart--section" to="/cart">
            <div className="shopping-cart--container">
                <img
                    className="shopping-cart-img"
                    src={shoppingCart}
                    alt="shopping-cart">
                </img>
                <div
                    style={style}
                    className="shopping-cart-counter"
                    role="status"
                    aria-label="cart item counter">
                    {props.itemCount}
                </div>
            </div>
        </Link>
    )
}

export default ShoppingCart;