import React from "react";
import "./Property.css";

const Property = ({color}) => {
    return ( 
        <button className="property" style={{backgroundColor:`${color}`}}></button>
     );
}
 
export default Property;