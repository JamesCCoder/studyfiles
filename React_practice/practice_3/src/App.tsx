import React,{useState} from "react";
import "./App.css";
import ButtonBox from "./components/ButtonBox";
import Input from "./components/Input";

import Wrapper from "./components/Wrapper";
import Button from "./components/Button";


import { StatusValue } from "./model";

const btnValue = [
  ["C", "%", "+-", "/"],
  [7,8,9,"*"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
]

const App: React.FC = () =>{
   const [status, setStatus] = useState<StatusValue>({
     val:0,
     res:0,
     sign:"",
   }) 

   const resetHandler = () =>{
     setStatus({
       ...status,
       val:0,
       res:0,
       sign:"",
     })
   }
   const percentHandler = () =>{
    
   }
   const invertHandler = () =>{}
   const calcHandler = () =>{}
   const numHandler = () =>{}
   const commaHandler = () =>{}
   const equalHandler = () =>{}
   return(
     <div>
       <Wrapper>
         <Input value={status.val ? status.val : status.res}/>
         <ButtonBox>
            {
              btnValue.flat().map((oneButton, i) => {
                  return(
                    <Button key={i}
                            className={oneButton === "=" ? "equal": ""}
                            value={oneButton}
                            onClick={oneButton === "C" ? resetHandler 
                                    :oneButton === "%" ? percentHandler
                                    :oneButton === "+-" ? invertHandler
                                    :oneButton === "." ? commaHandler
                                    :oneButton === "=" ? equalHandler
                                    :oneButton === "+" || oneButton === "-" || oneButton === "*" || oneButton === "/" ? calcHandler
                                    :numHandler
                                  }
                    />
                  )
              })
            }
         </ButtonBox>
       </Wrapper>
     </div>
   )
}

export default App;