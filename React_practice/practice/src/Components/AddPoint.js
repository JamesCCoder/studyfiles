import React from "react";
import "./AddPoint.css";

const AddPoint = ({value}) => {
    return ( 
        <>
        <button className="redButton"></button>
        <p>{value} points</p>
        </>
        
     );
}
 
export default AddPoint;