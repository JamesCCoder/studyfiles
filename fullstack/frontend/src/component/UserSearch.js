import React from "react";
import "./UserSearch.css";

const UserSearch = ({value, onClick}) => {
    return ( 
        <div onClick={onClick}>{value}</div>
     );
}
 
export default UserSearch;