import './cartProductCard.css'
import React from 'react';

function CartProductCard(props) {


    return (
        <div key={props.id} className="cart-product-card">
            <img className="cart-product-card--img" src={props.img} alt={props.name + ' image'}></img>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={() => props.decrement(props.id)}>-</button>
            <input value={props.quantity} onChange={(e) => props.handleChange(e, props.id)}></input>
            <button onClick={() => props.increment(props.id)}>+</button>
            <button onClick={() => props.deleteCartItem(props.id)}>delete</button>
        </div>

    )
}

export default CartProductCard;