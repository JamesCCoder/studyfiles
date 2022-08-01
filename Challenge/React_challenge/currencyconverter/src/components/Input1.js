import React,{useState} from "react";

const Input1 = ({getValue}) => {
    let [value, setValue] = useState(0);
    return ( <input 
        type="number" 
        value={value} 
        onChange = {(e) => {setValue(e.target.value); getValue(e.target.value)}}
        /> );
}
 
export default Input1;