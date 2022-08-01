import React,{useContext} from "react";
import { myContext } from "../../../../React_practice/practice_1/src/App";

const Change = () => {
    let {changeHandler3} = useContext(myContext);
    return ( 
        <button onClick={changeHandler3}>change</button>
     );
}
 
export default Change;