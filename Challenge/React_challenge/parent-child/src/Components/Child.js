import React,{useState} from "react";

const Child = ({parentValue, getValue}) => {
    let [childValue, setChildValue] = useState("");
    return ( <>
    <p>The value from parent is: {parentValue}</p>
    <input type="text" value={childValue} onChange={(e) => {setChildValue(e.target.value); getValue(e.target.value)}}/>
    </> );
}
 
export default Child;