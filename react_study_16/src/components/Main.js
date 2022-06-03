import React from "react";
import "./Main.css";

import {Link, NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <p>
                <NavLink to="/" activeClassName="active">
                    Main
                </NavLink>

            </p>
            <p>
                <Link to="/product">Product</Link>
            </p>
            <p>
                <Link to="/help">Help</Link>
            </p>

            <p>
                <Link to="/about">About</Link>
            </p>

            <p>
                <Link to="/cart">Cart</Link>
            </p>


        </div>
    );;
}
export default Main;
