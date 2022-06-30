import React,{useState} from "react";

const Child = (props) => {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const {getValue} = props;
    const getValue1 = () =>{
        setValue1(value);
    }
    return ( <>
    <input type="number" value={value} 
    onChange={(e) => setValue(+e.target.value)} 
    />
    <button onClick={() => getValue(value)}>change</button>
    <p>The number is {value}</p>
    <p>The number is {value1}</p>
    <button onClick={()=> getValue1()}>get</button>
    </> );
}
 
export default Child;