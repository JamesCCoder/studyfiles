import React from "react";
import "./EqualWidth.css";

const btnValue = ["Home","Search","Contact","Login"];

const EqualWidth = () => {
    return ( 
        <div className="equal__overall">
            {
                btnValue.map((btn, i) =>{
                    return(
                        <button data-color={btn} className="equal__button" key={i}>{btn}</button>
                    )

                })
            }
        </div>
     );
}
 
export default EqualWidth;