import React from "react";
import "./Product.css";

import {Link} from "react-router-dom";

const Product = () => {
    return (
        <div>
            <Link to="/">back to home</Link>
            <ul>
                <li>
                    <Link to="/product/p1">
                        aaaaa
                    </Link>

                </li>
                <li>
                    <Link to="/product/p2">bbbbb</Link>
                </li>

                <li>
                    <Link to="/product/p3">ccccc</Link>
                </li>

            </ul>
        </div>
    );;
}

export default Product;
