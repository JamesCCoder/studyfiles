import React,{useContext} from "react";
import { myContext } from "../../../../React_practice/practice_1/src/App";

const Input2 = () => {
    let {g, setG} = useContext(myContext);

    return ( 
        <input type="number"
        value={g} 
        onChange={(e) => setG(e.target.value)}
        />
     );
}
 
export default Input2;
