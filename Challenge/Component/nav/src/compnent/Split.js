import React from "react";
import "./Split.css";

const infor = ["Home","News","Contact","About","Help"];

const Split = () => {
    return ( 
        <div className="split__ovarall">
            <div className="split__left">
                <button className="left">Home</button>
                <button className="left">News</button>
                <button className="left">Contact</button>
                <button className="left">About</button>
            </div>
            <div className="split__right">
                <button className="right">Help</button>
            </div>
        </div>
     );
}
 
export default Split;