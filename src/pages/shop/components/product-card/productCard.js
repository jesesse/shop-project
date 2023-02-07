import React from "react";
import './productCard.css'

function ProductCard(props) {

    const[amount, setQuantity] = React.useState(1)

    function increment(){
        if(amount > 9) return;
        setQuantity(prev => parseInt(prev) + 1)
    }

    function decrement(){
        if(amount === 1) return;
        setQuantity(prev => parseInt(prev) - 1)
    }

    function handleChange(e){
        let value = e.target.value
        if(isNaN(value)) return;
        if(value > 9) value = 10
        setQuantity(parseInt(value))
    }

    return (
        <div className="product-card">
            <img className="product-card--image" src={props.img} alt={props.name}/>
            <div className="product-card--info">
                <p className="product-name">{props.name}</p>
                <p className="product-price">{props.price}</p>
            </div>
            <div className="wrapper">
                <button onClick={decrement}>-</button>
                <input value={amount} onChange={(e) => handleChange(e)}></input>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => props.addCartItems(props.id, amount)}>ADD TO SHOPPING CART</button>
        </div>

    )
}

export default ProductCard;