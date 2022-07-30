import React,{useState, useEffect} from "react";
import "./App.css";

import Button from "./Component/Button";

const res = ["fist", "paper", "scissors"];

const App = () => {
  
  const [myChoice, setMyChoice] = useState(null); 
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("test");

  const clickHandler = (value) =>{
      setMyChoice(value);
  }

  const startHandler = () =>{
     setComputerChoice(res[Math.floor(Math.random() * 3)]);
  }

  const resetHandler = () =>{
    setMyChoice(null);
    setComputerChoice(null);
    setResult("test");
  }

  useEffect(() => {
    if(myChoice && computerChoice){
    if(myChoice === "fist"){
        if(computerChoice === "paper"){
          setResult("You lose");
        }else if(computerChoice === "fist"){
          setResult("even!");
        }else if(computerChoice === "scissors"){
          setResult("you win");
        }
     }else if(myChoice === "paper"){
       if(computerChoice === "paper"){
         setResult("even");
       }else if(computerChoice === "fist"){
         setResult("you win");
       }else if(computerChoice === "scissors"){
         setResult("you lose");
       }
     }else if(myChoice === "scissors"){
       if(computerChoice === "scissors"){
         setResult("even")
       }else if(computerChoice === "fist"){
         setResult("you lost")
       }else if(computerChoice === "paper"){
         setResult("you win")
       }
     }
    }
 
  }, [myChoice, computerChoice])

  return ( 
    <>
      {
        res.map((one, i) => {
          return(
            <Button key={i}
                    value={one}
                    onClick={(e) => {clickHandler(e.target.innerHTML)}}
             />
          )
        })
      }
      <div>
         <button style={{width:"100px", height:"100px", marginTop:"100px"}}>{myChoice}</button>
         <button style={{width:"50px", height:"50px", margin:"0 100px"}} onClick={startHandler}>start</button>
         <button style={{width:"50px", height:"50px", margin:"0 50px"}} onClick={resetHandler}>reset</button>
         <button style={{width:"100px", height:"100px"}}>{computerChoice}</button>
         <p>{result}</p>
      </div>
     
    </>
   );
}
 
export default App;