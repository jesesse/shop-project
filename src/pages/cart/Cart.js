import React from "react";
import './cart.css'
import Header from "../../sections/Header/Header";
import CartProductCard from "./components/CartProductCard";

function Cart(props) {

    let productCards = props.cartProducts.map((product) => {
        return (
            <CartProductCard
                key={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                id={product.id}
                quantity={product.quantity}
                deleteCartItem={props.deleteCartItem}
                handleChange={props.handleChange}
                increment={props.increment}
                decrement={props.decrement}>
                    
            </CartProductCard>
        )
    })

    let totalSum = props.cartProducts.reduce((total, product) => {
        return total + (parseInt(product.price.slice(0, -1)) * product.quantity)
    }, 0)

    return (
        <div className="page-container">
            <Header itemCount={props.itemCount} />
            <div className="cart-page">
                <div className="cart-products-grid">
                    {productCards}
                </div>
                <div className="check-out-section">
                    <h1>TOTAL: {totalSum}€</h1>
                    <button>CHECKOUT</button>
                </div>
            </div>
        </div>

    )
}

export default Cart;