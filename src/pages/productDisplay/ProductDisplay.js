import React, { useEffect } from "react";
import Header from "../../sections/Header/Header";
import './productDisplay.css'
import ProductCard from "../shop/components/product-card/productCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDisplay(props) {

    const [displayProduct, setDisplayProduct] = React.useState(null)

    let params = useParams();

    useEffect(() => {
        let currentDisplayProduct = props.products.find(product => product.id === params.id)
        console.log(currentDisplayProduct)
        setDisplayProduct(currentDisplayProduct)
    }, [params])


    return (
        <div className="product-display-page">
            <Header itemCount={props.itemCount}></Header>
            {displayProduct &&
                <div className="product-display">
                    
                    <ProductCard
                        style={"display-product"}
                        key={displayProduct.id}
                        id={displayProduct.id}
                        name={displayProduct.name}
                        description={displayProduct.description}
                        price={displayProduct.price}
                        img={displayProduct.img}
                        addItemToCart={props.addItemToCart}
                        showProduct={props.showProduct}>
                    </ProductCard>
                    <Link to="/shop">
                        <div className="back-to-shop">BACK</div>
                    </Link>

                </div>}
        </div>

    )
}

export default ProductDisplay;