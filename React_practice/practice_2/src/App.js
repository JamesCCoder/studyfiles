import React,{useState, useEffect} from "react";
import "./App.css";

const VALUE = [1,2,3,4,5,6,7,"",9,10,11,8,13,14,15,12];

const App = () => {
   useEffect(() =>{
      let newValue = [...VALUE];
      // for(let i = 1; i<newValue.length; i++){
      //    let random = Math.floor(Math.random()*(i+1));
      //    [newValue[i],newValue[random]] = [newValue[random],newValue[i]];
      // }
      setValue(newValue);
   }, [])
   const [value, setValue] = useState(VALUE);
   let count = 0;
   const [show, setShow] = useState(false);
   const clickHandler = (oneValue, i) =>{
      console.log(typeof oneValue);
      if(typeof oneValue === "number"){
         if(typeof value[i+1] === "string" && i !== 3 && i !== 7 && i !== 11){
            let newValue1 = [...value];
            let temp = newValue1[i];
            newValue1[i] = newValue1[i+1];
            newValue1[i+1] = temp;
            setValue(newValue1);
         }else if(typeof value[i-1] === "string" && i !== 4 && i !== 8 && i !== 12 ){
            let newValue2 = [...value];
            let temp = newValue2[i];
            newValue2[i] = newValue2[i-1];
            newValue2[i-1] = temp;
            setValue(newValue2);
         }else if(typeof value[i+4] === "string"){
            let newValue3 = [...value];
            let temp = newValue3[i];
            newValue3[i] = newValue3[i+4];
            newValue3[i+4] = temp;
            setValue(newValue3);
         }else if(typeof value[i-4] === "string"){
            let newValue4 = [...value];
            let temp = newValue4[i];
            newValue4[i] = newValue4[i-4];
            newValue4[i-4] = temp;
            setValue(newValue4);
         }
      }
   }
   useEffect(() =>{
     for(let i = 0; i<value.length; i++){
        if(value[i] === i + 1){
           count++;
        }else{
           count--;
        }
     }
   //   console.log(count);
     if(count === 14) setShow(true);
   },[count, value])

   useEffect(() =>{
      if(show === true){
         alert("Congratulation! You win the game!");
      }
   },[show])
   return ( 
      <div className="container">
         {
            value.map((oneValue, i) => {
               return (
                  <div className={typeof oneValue === "number" ? "number" : ""}
                       onClick = {() => clickHandler(oneValue, i)}
               
               >{oneValue}</div>
               )
            })
         }
      </div>
    );
}
 
export default App;