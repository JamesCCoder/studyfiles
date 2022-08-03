import React from "react";
import "./FactoryTemplate.css";

const FactoryTemplate = ({name, cost, rate}) => {
    return ( 
        <button>this is {name} factory, the cost is {cost}, and the rate is {rate}</button>
     );
}
 
export default FactoryTemplate;