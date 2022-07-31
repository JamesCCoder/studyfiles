import React,{useContext} from "react";
import { myContext } from "../App";

const Change = () => {
    let {changeHandler3} = useContext(myContext);
    return ( 
        <button onClick={changeHandler3}>change</button>
     );
}
 
export default Change;