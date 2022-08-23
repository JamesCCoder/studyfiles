import React, { PropsWithChildren } from "react";
import "./ButtonBox.css";

const ButtonBox:React.FC<PropsWithChildren> = ({children}) =>{
    return(
        <div className="box">{children}</div>
    )
}

export default ButtonBox;