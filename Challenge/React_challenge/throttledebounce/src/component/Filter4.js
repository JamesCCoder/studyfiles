import React,{useState} from "react";

import useDebounce from "./useDebounce";

const LIST = ["a", "b","c", "d","e","f","g", "aa", "dd","fds"];

const Filter4 = () => {
    const [value, setValue] = useState("");
    const [list] = useState(LIST);
    const [filterList] = useDebounce(list, value, 500);
    
    return ( 
        <div>
            <input value= {value} onChange={(e)=> setValue(e.target.value)}/>
            <ul>
            {
                filterList.map((one, i) =>{
                    return(
                        <li key={i}>{one}</li>
                    )
                })
            }
            </ul>

        </div>
     );
}
 
export default Filter4;