import React from "react";
import "./Tooltip.css";

const ToolTip = () => {
    return ( 
        <div className="tooltip__overall">
            <p className="tooltip__keyword">Top
            <div className="tooltip__content">
               <p className="tooltip__word">ToolTip text</p>
               <div className="tooltip__arrow"></div>
            </div>
            </p>
        </div>
     );
}
 
export default ToolTip;