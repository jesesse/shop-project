import React from "react";
import Header from "../../sections/Header/Header";
import './home.css'
import { Link } from "react-router-dom";

function Home(props) {

    return (
        <div className="page-container">
            <Header itemCount={props.itemCount} />
            <div className="home-container">
                <div className="home-hero">
                    <h1>WELCOME</h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum animi architecto, repudiandae, est commodi minus inventore impedit quasi, voluptas ea aliquam similique cum! Rem nisi amet cum sapiente veritatis officia temporibus similique laborum non aliquam esse aliquid rerum, eaque vel? Natus dolores reiciendis dolorum rem beatae? Qui velit suscipit fugit in commodi! Explicabo, eveniet non consequuntur sunt alias dolor nemo recusandae omnis optio esse ipsum sapiente quaerat quasi, in laborum! Architecto nihil consequuntur tenetur modi ipsum explicabo alias sapiente provident aperiam accusamus veniam voluptate, quis maxime fugiat quaerat expedita inventore ab repellat odio molestiae cupiditate harum. Amet autem facilis, veritatis reprehenderit ratione explicabo fugiat harum saepe vero atque, quam neque mollitia. Vel aspernatur totam, cum aut veniam enim rerum repellendus necessitatibus quia veritatis consequuntur tempora repudiandae laudantium fuga beatae? Tempore, inventore incidunt sed commodi eos enim sit nostrum libero officiis eum ipsa expedita dolorum veritatis dolor placeat id nemo odit.
                    <Link className="enter-shop" to="/shop">
                        <h1>ENTER SHOP</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;