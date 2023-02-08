import React from "react";
import './main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import ProductDisplay from "./pages/productDisplay/ProductDisplay";

//ADD ITEM TO CART

function App() {

  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [cartItemCount, setCartItemCount] = React.useState(0);


  React.useEffect(() => {
    fetchProducts();
  }, [])

  React.useEffect(() => {
    let newCount = cartProducts.reduce((total, product) => total + product.quantity, 0);
    setCartItemCount(newCount)
  }, [cartProducts])

  async function fetchProducts() {
    let response = await import('./assets/products/products.json');
    setProducts(response.default)
  }

  function addItemToCart(id, amount) {
    setCartProducts(prevCartProducts => {
      /* 
      If shopping cart already holds the added item, only update the
      quantity of that item (add to the previous quantity)
      */
      if (prevCartProducts.some(product => product.id === id)) {
        let newCartProducts = prevCartProducts.map(product => {
          if (product.id === id) {
            let newQuantity = product.quantity + amount;
            product = {
              ...product,
              quantity: newQuantity
            }
          } return product;
        })
        return newCartProducts;
        /* 
        Else if shopping cart does NOT hold the item, just add the item
        (*amount* as the new quantity property) to the shopping cart
        */
      } else {
        let addedProduct = products.find(product => product.id === id)
        addedProduct = {
          ...addedProduct,
          quantity: amount
        }
        return prevCartProducts.concat(addedProduct)
      }
    })
  }

  /*
  Function to run, when user changes the amount of shopping cart product directly 
  to the input field of that product, in the Cart page.
  */
  function handleCartItemQuantityChange(e, id) {
    let newQuantity = parseInt(e.target.value);
    if (isNaN(newQuantity)) return;
    if (newQuantity > 9) newQuantity = 10

    setCartProducts(prevCartProducts => prevCartProducts.map(product => {
      if (product.id === id) {
        product = {
          ...product,
          quantity: newQuantity
        }
      } return product;
    }))
  }

  function incrementCartItem(id) {
    const product = cartProducts.find(product => product.id === id);
    if (product.quantity > 9) return;
    setCartProducts(prevCartProducts => prevCartProducts.map(product => {
      if (product.id === id) {
        let newQuantity = product.quantity + 1;
        product = {
          ...product,
          quantity: newQuantity
        }
      } return product;
    }))
  }

  function decrementCartItem(id) {
    const product = cartProducts.find(product => product.id === id);
    if (product.quantity < 2) return;
    setCartProducts(prevCartProducts => prevCartProducts.map(product => {
      if (product.id === id) {
        let newQuantity = product.quantity - 1;
        product = {
          ...product,
          quantity: newQuantity
        }
      } return product;
    }))

  }

  function deleteCartItem(id) {
    setCartProducts(prevCartProducts => prevCartProducts.filter(product => product.id !== id))
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=
          {<Home itemCount={cartItemCount}></Home>}>
        </Route>
        <Route path="/shop" element=
          {<Shop
            products={products}
            itemCount={cartItemCount}
            addItemToCart={addItemToCart}>
          </Shop>}>
        </Route>
        <Route path="/contact" element=
          {<Contact itemCount={cartItemCount}></Contact>}>
        </Route>
        <Route path="/cart" element=
          {<Cart
            itemCount={cartItemCount}
            cartProducts={cartProducts}
            deleteCartItem={deleteCartItem}
            handleChange={handleCartItemQuantityChange}
            incrementCartItem={incrementCartItem}
            decrementCartItem={decrementCartItem}>
          </Cart>}>
        </Route>
        <Route path="/product/:id" element=
          {<ProductDisplay
            products={products}
            itemCount={cartItemCount}
            addItemToCart={addItemToCart}>
          </ProductDisplay>}>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
