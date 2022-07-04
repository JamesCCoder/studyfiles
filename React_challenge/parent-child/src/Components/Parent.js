import React,{useState} from "react";
import Child from "./Child.js";
const Parent = () => {
    const [parentValue, setParentValue] = useState("");
    const [childValue, setChildValue] = useState("");
    const getValue = (one) =>{
      setChildValue(one);
    }
    return ( 
    <div>
        <input type="text" value={parentValue} onChange={(e) => setParentValue(e.target.value)}/>
      <Child parentValue={parentValue} getValue={getValue}/>
      <p>The value from child is :{childValue}</p>
    </div> );
}
 
export default Parent;