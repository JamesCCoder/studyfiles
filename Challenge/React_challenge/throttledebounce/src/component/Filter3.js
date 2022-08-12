import React,{useState, useEffect} from "react";

const LIST = ["a", "b","c", "d","e","f","g", "aa", "dd","fds"];

const Finter3 = () => {
    const [value, setValue] = useState("");
    const [list, setList] = useState(LIST);
    const [filterList, setFilterList] = useState([]);
    useEffect(() =>{
        const interval = setInterval(() => {
           const result = list.filter((one) =>one.toLowerCase().includes(value.toLowerCase()));
           setFilterList(result);
        }, 1000);
        return () => clearInterval(interval);
    },[list, value])
    return ( 
        <div>
            <input value={value} onChange = {(e) => setValue(e.target.value)}/>
            <ul>
            {
                filterList.map((one, i) => {
                    return(
                        <li key={i}>{one}</li>
                    )
                })
            }
            </ul>

        </div>
     );
}
 
export default Finter3;