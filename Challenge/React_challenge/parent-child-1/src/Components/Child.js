import React,{useState, useContext} from "react";
import { MyContext } from "../App";

const Child = () => {
    let [childValue, setChildValue] = useState("");
    const {getValue} = useContext(MyContext);
    return ( 
    <div>
        <input type="text" value={childValue} onChange={(e) => {setChildValue(e.target.value); getValue(e.target.value)}}/>
    </div> 
    );
}
 
export default Child;