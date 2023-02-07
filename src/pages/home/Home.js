import React from "react";
import Header from "../../sections/Header/Header";

function Home(props){

    return(
        <div className="page-container">
            <Header itemCount={props.itemCount} />
        </div>
    )
}

export default Home;