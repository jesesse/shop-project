import React from "react";
import ProductCard from "../product-card/productCard";
import './products.css'

function Products(props) {

    let categories = []
    props.products.forEach((product) => {
        if (!categories.includes(product.category)) categories.push(product.category)
    })

    return (
        <div className="products">
            {categories.map(category => {
                return (
                    <div className="category-container" key={category}>
                        <h1>{category}</h1>
                        <div key={category} className="product-list">
                            {props.products.map(product => {
                                if (product.category === category) return (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        img={product.img}
                                        addItemToCart={props.addItemToCart}
                                        showProduct={props.showProduct}
                                    ></ProductCard>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;