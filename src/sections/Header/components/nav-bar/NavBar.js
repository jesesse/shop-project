import React from "react";
import './navBar.css'
import { Link } from 'react-router-dom';

function NavBar(props) {

    return (

        <div className="nav-bar">
            <Link className="nav-bar-link" to="/" aria-label="nav-bar-link">HOME</Link>
            <Link className="nav-bar-link" to="/shop" aria-label="nav-bar-link">SHOP</Link>
            <Link className="nav-bar-link" to="/contact" aria-label="nav-bar-link">CONTACT</Link>
        </div>
    )
}

export default NavBar;