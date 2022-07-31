import React,{useContext} from "react";
import { myContext } from "../App";

const Output2 = () => {
    let {h} = useContext(myContext);
    return ( 
        <input type="number" value={h}/>
     );
}
 
export default Output2;