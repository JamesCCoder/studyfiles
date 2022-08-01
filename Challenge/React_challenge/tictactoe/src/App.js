import React,{useState, useEffect, useCallback} from "react";
import "./App.css";

import Wrapper from "./Component/Wrapper";
import Block from "./Component/Block";

const blockValue = ["","","","","","","","",""];


const App = () => {
    const [player, setPlayer] = useState(1);
    const [blockNum, setBlockNum] = useState(blockValue);
    const [result, setResult] = useState("no result");

    const clickHandler = (index) =>{
        if(player === 1){
            let newBlockNum1 = [...blockNum];
            newBlockNum1[index] = "X";
            setBlockNum(newBlockNum1);
            setPlayer(2);
        }else if(player === 2){
            let newBlockNum2 = [...blockNum];
            newBlockNum2[index] = "O";
            setBlockNum(newBlockNum2);
            setPlayer(1);
        }
    }

    const resetHandler = () =>{
        setPlayer(1);
        setBlockNum(blockValue);
    }

    const checkWin = useCallback((a, b, c) =>{
        if( blockNum[a] && blockNum[b] && blockNum[c] && blockNum[a] === blockNum[b] && blockNum[b] === blockNum[c]){
            if(player === 1){
                setResult("player2 win");
                setBlockNum(blockValue);
                setPlayer(1);
            }else if(player === 2){
                setResult("player1 win");
                setPlayer(1);
                setBlockNum(blockValue);
            }
        }else{
            return;
        }
    },[blockNum, player])

    useEffect(() => {
       checkWin(0,1,2);
       checkWin(3,4,5);
       checkWin(6,7,8);
       checkWin(0,4,8);
       checkWin(2,4,6);
       checkWin(0,3,6);
       checkWin(1,4,7);
       checkWin(2,5,8);
    }, [checkWin])



    return (
    <Wrapper>
       {
           blockNum.map((block, i) => {
               return (
                   <Block key={i} value={block} onClick = {() => clickHandler(i)}/>
               )
           })
       }
       <button onClick={resetHandler}>reset</button>
       <button>player:{player}</button>
       <button>{result}</button>
    </Wrapper>
    );
}
 
export default App;