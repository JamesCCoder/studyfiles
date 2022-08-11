import React,{useState, useEffect} from "react";

const LIST = ["a", "b","c", "d","e","f","g", "aa", "dd","fds"];

const Filter1 = () => {
  const [list] = useState(LIST);
  const [value, setValue] = useState("");
  const [filterList, setFilterList] = useState(list);
  const changeHandler = (e) =>{
      setValue(e.target.value);
  }
  useEffect(() => {
    let result = list.filter((one) => value ? one.toLowerCase().includes(value.toLowerCase()) : one);
    setFilterList(result);
  },[list,value])
  return (
    <div>
      <input value={value} onChange={changeHandler}/>
       <ul>
         {
           filterList
           .map((one, i) =>{
              return (
                <li key={i}>{one}</li>
              )
           })
         }
       </ul>
    </div>
  );
}
 
export default Filter1;