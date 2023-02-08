import React from "react";
import './productCard.css'
import { Link } from 'react-router-dom';

function ProductCard(props) {

    const [quantity, setQuantity] = React.useState(1)

    function incrementItem() {
        if (quantity > 9) return;
        setQuantity(prev => parseInt(prev) + 1)
    }

    function decrementItem() {
        if (quantity === 1) return;
        setQuantity(prev => parseInt(prev) - 1)
    }

    function handleChange(e) {
        let value = e.target.value
        if (isNaN(value)) value = 1;
        if (value > 9) value = 10
        setQuantity(parseInt(value))
    }

    return (
        <div className="product-card">
            <Link to={`/product/${props.id}`}>
                <img className="product-card--image" src={props.img} alt={props.name} />
            </Link>
            <div className="product-card--info">
                <p className="product-name">{props.name}</p>
                <p className="product-description">{props.description}</p>
                <p className="product-price">{props.price}</p>
            </div>
            <div className="wrapper">
                <button onClick={decrementItem}>-</button>
                <input value={quantity} onChange={(e) => handleChange(e)}></input>
                <button onClick={incrementItem}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={() => props.addItemToCart(props.id, quantity)}>ADD TO SHOPPING CART</button>
        </div>

    )
}

export default ProductCard;