import React,{useCallback} from "react";
import "./App.css";
import lodash from "lodash";



const App = () => {
   const clickHandler = () =>{
       console.log("click");
   }
   const debounceFn = useCallback(lodash.debounce(clickHandler, 1000),[]);
   const throttleFn = useCallback(lodash.throttle(clickHandler, 1000),[]);

   const myDebounce = (myFunc, delay) =>{
       let timer;
       return () =>{
          clearTimeout(timer);
          timer  = setTimeout(myFunc, delay);
       }
   }
   const myThrottle = (myFunc, delay) =>{
       let timer =false;
       return () =>{
          if(timer === false){
             myFunc();
             timer = setTimeout(() => timer = false, delay);
          }
       }
   }

   return ( 
      <div>
         <input onChange = {debounceFn}/>
         <input onChange = {throttleFn}/>
         <input onChange = {myDebounce(clickHandler, 1000)}/>
         <input onChange = {myThrottle(clickHandler, 1000)}/>
      </div>
    );
}
 
export default App;