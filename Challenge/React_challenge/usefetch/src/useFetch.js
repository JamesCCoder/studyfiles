import React,{useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() =>{
     fetch(url)
     .then((res) => res.json())
     .then((val) => val.results)
     .then((val1) => setData(val1))
     .catch((error) => console.log(error))
    }, [url])
    return [data];
}
 
export default useFetch;