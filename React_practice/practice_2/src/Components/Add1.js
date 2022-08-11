import React,{useState} from "react";

const Add1 = () => {
    const [value,setValue] = useState(0);
    return ( 
        <div>
            <p>{value}</p>
            <button onClick={() => setValue(pre => pre + 1)}>add</button>
        </div>
     );
}
 
export default Add1;