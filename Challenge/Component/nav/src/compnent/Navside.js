import React from "react";
import "./Navside.css";

const infor = ["Home","News","Contact","About"];

const Navside = () => {
    return ( 
        <div className="navside__overall">
            {
                infor.map((one) =>{
                    return(
                        <button className="navside__button">{one}</button>
                    )
                })
            }
        </div>
     );
}
 
export default Navside;