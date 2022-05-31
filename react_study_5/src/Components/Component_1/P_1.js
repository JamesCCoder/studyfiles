import React from "react";
import "./P_1.css";

import P_2 from "./P_2";

const P_1 = (props) => {
    const {value, getValue} = props;
    
    return ( 
        <>
        <div className="outer"> 
            <P_2 value = {value} getValue={getValue}/>
        </div>
        </>
     );
}
 
export default P_1;