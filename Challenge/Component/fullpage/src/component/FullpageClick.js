import React,{useState} from "react";
import './FullpageClick.css';

const info = ["Home", "News", "Contact", "About"];
const content = ["This is home", "we like good news", "keep in touch with others", "any other questions"];

function FullpageClick() {
  const [value, setValue] = useState(
      info.map((oneInfo, i) =>{
        return {id: Math.floor(Math.random()*1000), key:oneInfo, content: content[i]};
      })
  );
  const [index, setIndex] = useState(-1);
  const clickHandler = (index) =>{
      setIndex(index);

  }
  return (
    <div>
       <div className="fullpage__header">
       {
         value.map((oneValue,i) =>{
           return(
                <p 
                style={{backgroundColor: i===index && index === 0 ? "red" 
                                       : i===index && index === 1 ? "green" 
                                       : i===index && index === 2 ? "blue"
                                       : i===index && index === 3 ? "orange"
                                       : "grey"
                                      }}
                className="fullpage__menu" 
                key={oneValue.id} 
                onClick={() => clickHandler(i)}
                >{oneValue.key}</p>
           )
         })
       }
      </div>
      {
        value.map((oneValue,i) =>{
          return(
            i === index &&
             <p 
             className="fullpage__content" 
             key={oneValue.id}
             style={{backgroundColor: i === 0 ? "red" : i === 1 ? "green" : i === 2 ? "blue" : "orange"}}
             >{oneValue.content}</p>
          )
        })
      }
    </div>
  );
}

export default FullpageClick;
