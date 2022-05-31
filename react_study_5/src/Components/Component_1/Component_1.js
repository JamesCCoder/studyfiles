import React,{useState} from "react";
import "./Component_1.css";

import P_1 from "./P_1";

const Component_1 = () => {
    const [value, setValue] = useState(0);
    const [number, setNumber] = useState(0);
    const addHandler = () => {
        setValue((pre) => {
            return pre + 1;
        })
    }

    const getValueHandler = (data) => {
        setNumber(data);
    }

    return ( <>
    <div className="outest">
       <P_1 value = {value} getValue={getValueHandler}/>
       <button className="button" onClick={addHandler}>press</button>
       <p>{number}</p>
    </div>
    </> );
}
 
export default Component_1;