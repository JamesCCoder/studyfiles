import React,{useState, useEffect} from "react";
import './App.css';

import Wrapper from "./Components/Wrapper";
import Card from "./Components/Card";

const num = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];

function App() {
  const [cardValue, setCardValue] = useState(num);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [player,setPlayer] = useState(1);
  let [status, setStatus] = useState({
    value1 : undefined,
    value2 : undefined,
  })

  const changeHandler = () =>{
    const newCardValue = [...cardValue];
    for(let i = 1; i<newCardValue.length; i++){
        const random = Math.floor(Math.random() * (i+1));
        [newCardValue[i], newCardValue[random]] = [newCardValue[random], newCardValue[i]];
    }
    setCardValue(newCardValue);
    setStatus({
      ...status,
      value1:undefined,
      value2:undefined,
    })
    setScore1(0);
    setScore2(0);
    setPlayer(1);
  }

  const clickHandler = (e) =>{
     e.preventDefault();
     let val = e.target.innerHTML;

     setStatus({
       ...status,
       value1: val,
       value2: status.value1,
     })
  }

  useEffect(() =>{
    if(status.value1 && status.value2){
      if(player === 1){
        if(status.value1 === status.value2){
         setScore1((pre) => pre + 1);
         setStatus({
           ...status,
           value1: undefined,
           value2: undefined,
         })
        }else{
          setStatus({
           ...status,
           value1: undefined,
           value2: undefined,
         })
         setPlayer(2);
        }
      }else if(player === 2){
        if(status.value1 === status.value2){
         setScore2((pre) => pre + 1);
         setStatus({
           ...status,
           value1: undefined,
           value2: undefined,
         })
        }else{
          setStatus({
           ...status,
           value1: undefined,
           value2: undefined,
         })
         setPlayer(1);
        }
      }

    
  }
  },[status, player])
  
  return (
    <Wrapper>
       {
         cardValue.map((card) =>{
             return (
               <Card value={card} onClick={clickHandler}/>
             )
         })
       }
       <button onClick={changeHandler}>change</button>

       <button>{score1}</button>
       <button>player:{player}</button>
       <button>{score2}</button>
    </Wrapper>
  );
}

export default App;
