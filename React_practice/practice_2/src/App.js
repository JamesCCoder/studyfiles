import React from "react";
import "./App.css";

const App = () => {
  const changeHandler = () =>{
    console.log("press");
  }
  const deBounce = (myfunc, delay) =>{
    let timer;
    return () => {
       clearTimeout(timer);
       timer = setTimeout(myfunc, delay);
    }
  }
  const throttle = (myFunc, delay) =>{
     let timer;
     return () =>{
       if(!timer){
           myFunc();
           timer = setTimeout(() => timer = false, delay);
       }
     }
  }  

       

  
  return ( 
    <div>
       <input onChange = {deBounce(changeHandler, 500)}/>
       <input onChange = {throttle(changeHandler, 2000)}/>
    </div>
   );
}
 
export default App;