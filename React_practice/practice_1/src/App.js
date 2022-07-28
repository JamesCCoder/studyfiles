import React,{useState} from "react";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Input from "./components/Input";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValue = [
  ["C", "+/-", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="]
]

const App = () => {
  let [status, setStatus] = useState({
    val: 0,
    res: 0,
    sign:""
  })

  const resetHandler = () =>{
    setStatus({
      ...status,
      val:0,
      res:0,
      sign:"",
    })
  }
  const invertHandler = () =>{
    setStatus({
      ...status,
      val: status.val ? status.val * (-1) : 0,
      res: status.res ? status.res * (-1) : 0,
      sign: "",
    })
  }
  const percentHandler = () =>{
    let val = status.val ? parseFloat(status.val) : 0;
    let res = status.res ? parseFloat(status.res) : 0;
    setStatus({
      ...status,
      val: (val /= Math.pow(100 ,1)),
      res: (val /= Math.pow(100 ,1)),
      sign: "",
    })
    
  }
  const calcHandler = (e) =>{
    e.preventDefault();
    let value = e.target.innerHTML;
    setStatus({
      ...status,
      val:0,
      res: status.val && !status.res ? status.val : status.res,
      sign:value,
    })

  }
  const numHandler = (e) =>{
    e.preventDefault();
    let value = e.target.innerHTML;

    setStatus({
      ...status,
      val: status.val === 0 && value === "0" ?  "0" 
         : status.val % 1 === 0 ? Number(status.val + value)
         : status.val + value,
      res: status.sign ? status.res : 0, 
    })
  }
  const dotHandler = (e) =>{
     e.preventDefault();
     let value = e.target.innerHTML;

     setStatus({
       ...status,
       val: status.val.toString().includes(".") ? status.val : status.val + value,
     })
  }
  const equalHandler = () =>{
    
  }

  return ( 
  <Wrapper>
    <Input value = {status.val ? status.val : status.res}/>
    <ButtonBox>
        {
          btnValue.flat().map((btn) =>{
            return(
              <Button value={btn}
                      className={btn === "0" ? "zero" : ""}
                      onClick={
                        btn === "C" ? resetHandler
                      : btn === "+/-" ? invertHandler
                      : btn === "%" ? percentHandler
                      : btn === "." ? dotHandler
                      : btn === "=" ? equalHandler
                      : btn === "+" || btn === "-" || btn === "*" || btn === "/" ? calcHandler
                      : numHandler
                      }
              />
            )
          })
        }
    </ButtonBox>
  </Wrapper> 
  );
}
 
export default App;
