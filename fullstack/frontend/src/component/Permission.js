import React from "react";
import "./Permission.css";

const Permission = ({value, onClick}) => {
    return ( 
        <div className="permission" onClick={onClick}>{value}</div>
     );
}
 
export default Permission;