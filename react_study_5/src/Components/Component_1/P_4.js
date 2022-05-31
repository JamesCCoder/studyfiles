import React,{useState} from "react";
import "./P_4.css";

const P_4 = (props) => {
    const {value, getValue} = props;
    const [number, setNumber] = useState(value);
    const changeHandler = () => {
       setNumber((pre) => {
          return pre + 1;
       })
       getValue(number);
    }
    return ( 
        <div className="innest">
            {value}
            <button onClick = {changeHandler}>press</button>
        </div>
     );
}
 
export default P_4;