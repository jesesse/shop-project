import React from "react";
import Header from "../../sections/Header/Header";

function Contact(props){

    return(
        <div className="page-container">
            <Header itemCount={props.itemCount} />
        </div>
    )
}

export default Contact;