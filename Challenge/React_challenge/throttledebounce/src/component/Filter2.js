import React,{useState} from "react";

const LIST = ["a", "b","c", "d","e","f","g", "aa", "dd","fds"];

const Filter2 = () => {
    const [list, setList] = useState(LIST);
    const [value, setValue] = useState("");
    return ( 
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <ul>
            {
                list
                .filter((one) => value ? one.toLowerCase().includes(value.toLowerCase()): one)
                .map((one, i) => {
                    return(
                       <li key={i}>{one}</li>
                    )
                })
            }
            </ul>

        </div>
     );
}
 
export default Filter2;