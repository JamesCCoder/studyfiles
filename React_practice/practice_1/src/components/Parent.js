import React,{useContext} from "react";
import { myContext } from "../App";

const Parent = ({children}) => {
    let {value} = useContext(myContext);
    return ( <>
       {children}
       <p>The value from child is : {value}</p>
    </> );
}
 
export default Parent;