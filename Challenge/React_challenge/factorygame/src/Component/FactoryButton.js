import React from "react";
import "./FactoryButton.css";

const FactoryButton = ({name, cost, rate, onClick}) => {
    return ( 
        <div>
            <button onClick={onClick}>Make {name} factory,(cost {cost} points!), rate: {rate}</button>
        </div>
        
     );
}
 
export default FactoryButton;