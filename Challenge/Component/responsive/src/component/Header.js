import React from "react";
import "./Header.css";

const menuValue = ["Home","News","Contact","About"];

const Header = () => {
    return ( 
        <div className="header">
           {
               menuValue.map((oneMenu, i) =>{
                   return(
                       <p className="menu" 
                       key={i}
                       data-color={oneMenu}
                       >{oneMenu}</p>
                   )
               })
           }
           <div className="icon__menu">
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
           </div>
        </div>
     );
}
 
export default Header;