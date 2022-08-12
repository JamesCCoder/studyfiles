import {useEffect, useState} from "react";

const useDebounce = (list, filterValue, delay) => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        let interval = setInterval(() => {
           let res = list.filter((one) => one.toLowerCase().includes(filterValue.toLowerCase()));
           setData(res);
        }, delay);
        return () => clearInterval(interval);
    }, [filterValue,delay, list])
    return [data];
}
 
export default useDebounce;