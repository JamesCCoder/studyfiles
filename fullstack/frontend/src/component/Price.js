import React from "react";
const Price = ({value, onClick}) => {
    return ( 
        <div onClick={onClick}>{value}</div>
     );
}
 
export default Price;