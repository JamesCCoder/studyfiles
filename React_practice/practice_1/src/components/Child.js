import React,{useState, useContext} from "react";
import { myContext } from "../App";

const Child = () =>{
    let [value, setValue] = useState("");
    let {getValue} = useContext(myContext);
    return <>
       <input type ="text" value={value} onChange={(e) => {setValue(e.target.value);getValue(e.target.value)}}/>
     </>
    
   
    
}

export default Child;