import React from "react";
import Header from "../../sections/Header/Header";
import Products from "./components/products/Products";
import './shop.css'

function Shop(props) {

    return (     
        <div className="page-container">
            <Header itemCount={props.itemCount} />
            <div className="shop-page">
                <Products products={props.products} addCartItems={props.addCartItems}/>
            </div>
        </div>
    )
}

export default Shop;