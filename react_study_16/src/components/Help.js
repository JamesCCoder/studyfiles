import React from "react";
import "./Help.css";
import {Link} from "react-router-dom";

const Help = () => {
    return <>
        <p>help</p>
        <Link to="/help/new">
            new
        </Link>
        <Link to="/help/old">
            old
        </Link>

    </>
}

export default Help;
