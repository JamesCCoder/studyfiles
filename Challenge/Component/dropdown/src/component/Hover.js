import React from "react";
import "./Hover.css";

const Hover = () => {
    return ( 
        <div className="hover__overall">
            <button className="hover__button">hover here</button>
            <div className="hover__links">
                <p className="hover__link">Link 1</p>
                <p className="hover__link">Link 2</p>
                <p className="hover__link">Link 3</p>
            </div>
        </div>
     );
}
 
export default Hover;