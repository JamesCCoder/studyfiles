import React,{useState} from "react";
import "./App.css";

const choose = ["num", "upper", "lower", "char"];

const num = [0,1,2,3,4,5,6,7,8,9];
const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const char = ["~","!","#","$","%","^","&","*","(",")","_","+","-","=","[","]"];

const App = () => {
  let [password, setPassWord] = useState("***");
  let n = 20;

  const generateHandler = () =>{
    let res = "";
    for(let i = 0; i<n; i++){
      res += choose[Math.floor(Math.random() * 4)] === "num" ? num[Math.floor(Math.random() * 10)] 
           : choose[Math.floor(Math.random() * 4)] === "upper" ? upper[Math.floor(Math.random() * 26)]
           : choose[Math.floor(Math.random() * 4)] === "lower" ? lower[Math.floor(Math.random() * 26)]
           : char[Math.floor(Math.random() * 16)] 
    }
    setPassWord(res);
    
  }
  return (
  <div>
     <p>
      {password}
     </p>
     <button onClick={generateHandler}>click</button>
  </div>
);
}
 
export default App;