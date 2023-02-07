import React from "react";
import './header.css'
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import NavBar from "./components/nav-bar/NavBar";
import NameAndLogo from "./components/name-and-logo/NameAndLogo";

function Header(props) {


    return (
        <div className="header">
            <NameAndLogo/>
            <NavBar />
            <ShoppingCart itemCount={props.itemCount} />
        </div>
    )
}

export default Header;