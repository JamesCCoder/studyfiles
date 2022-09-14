import React,{useState, useEffect} from "react";

const VALUE = ["a","b","c","d","e","f","g"];

const App = () => {
  const [value, setValue] = useState(VALUE);

  useEffect(() =>{
    let newValue = [...value];
    for(let i = 1; i<newValue.length; i++){
     let random = Math.floor(Math.random() * (i+1));
     [newValue[i],newValue[random]] = [newValue[random], newValue[i]];
    }
    setValue(newValue);
  },[])
  return ( 
    <div>
      {
        value.map((one) =>{
          return(
            <p>{one}</p>
          )
  
        })
      }
    </div>
   );
}
 
export default App;