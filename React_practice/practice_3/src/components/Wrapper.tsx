import React, { PropsWithChildren } from "react";
import "./Wrapper.css";


const Wrapper: React.FC<PropsWithChildren> = ({children}) =>{
    return(
        <div className="wrapper">{children}</div>
    )
}

export default Wrapper;