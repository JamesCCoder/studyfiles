import React,{useState} from "react";
import './App.css';

const info = [
  "I have not failed. I've just found 10,000 ways that won't work.",
  "I love you the more in that I believe you had liked me for my own sake and for nothing else",
  "But man is not made for defeat. A man can be destroyed but not defeated."
]

function App() {
  const [index, setIndex] = useState(0);
  const plusHandler = () =>{
      if(index < 2){
        setIndex(pre => pre + 1);
        return;
      }
      setIndex(0);
  }

  const minusHandler = () =>{
     if(index >0){
       setIndex(pre => pre - 1);
       return;
     }
     setIndex(2);
  }

  return (
    <div className="overall">
        <div className="up">
          <p className="signal" onClick={() => minusHandler()}>-</p>
          {
            info.map((oneInfo, i) =>{
              return(
                index === i && 
                <p key={i} className="content">{oneInfo}</p>
              )
            })
          }
          <p className="signal" onClick={() => plusHandler()}>+</p>
        </div>
        <div className="down">
            <div className="circle" onClick={() => setIndex(0)}></div>
            <div className="circle" onClick={() => setIndex(1)}></div>
            <div className="circle" onClick={() => setIndex(2)}></div>
        </div>
    </div>
  );
}

export default App;
