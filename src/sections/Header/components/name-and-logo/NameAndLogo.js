import React from "react";
import skull from './1.svg'
import './nameAndLogo.css'
import { Link } from 'react-router-dom';

function NameAndLogo(props) {

    return (
        <Link className="logo--container" to="/">
            <img className="logo" src={skull} alt="logo" aria-label="logo"></img>            
            <h1 className="header--shop-name">JESSES <span className="occult">OCCULT</span> ITEMS</h1>
        </Link>
    )
}

export default NameAndLogo;
