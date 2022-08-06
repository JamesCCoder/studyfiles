import React from "react";
import "./Center.css";


const Center = () => {
    return ( 
        <div className="center__overall">
            <div>
                <button className="center__button">News</button>
                <button  className="center__button">Contact</button>
            </div>
            <div>
                <button className="center__button">Home</button>
            </div>
            <div>
                <button className="center__button">Search</button>
                <button className="center__button">About</button>
            </div>
        </div>
     );
}
 
export default Center;