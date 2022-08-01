import React,{useContext} from "react";
import { MyContext } from "../App";

const Parent = ({children}) => {
    let {value} = useContext(MyContext);
    return ( <div>
        {children}
        <p>The value from child is : {value}</p>
        </div> );
}
 
export default Parent;