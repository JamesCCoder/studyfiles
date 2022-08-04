import React, { Fragment, useState } from "react";
import "./Accordion.css";

const Accordion = () => {
    const [value, setValue] = useState("+");
    const clickHandler = () =>{
        setValue((pre) => pre === "+" ? "-" : "+");
    }
    return ( 
        <Fragment>
            {/* each line of accordion as folling */}
         <div className="section"> 
            <div className="section__header" onClick={() => clickHandler()}>
                <p>Section 1</p>                   
                <p>{value}</p>
            </div>
            <p style={{display: value === "+" ? "none" : "block", maxHeight: value === "+" ?  0 : "130px"}} className="section__content">hfsdafiuhasduifhafif</p>
         </div>
         <div className="section">
            <div className="section__header" onClick={() => clickHandler()}>
                <p>Section 1</p>
                <p>{value}</p>
            </div>
            <p className="section__content">hfsdafiuhasduifhafif</p>
         </div>
         <div className="section">
            <div className="section__header" onClick={() => clickHandler()}>
                <p>Section 1</p>
                <p>{value}</p>
            </div>
            <p className="section__content">hfsdafiuhasduifhafif</p>
         </div>
        </Fragment>

     );
}
 
export default Accordion;