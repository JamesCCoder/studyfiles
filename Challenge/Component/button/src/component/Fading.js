import React,{useState} from "react";
import "./Fading.css";

const information = [
    {
        id:1,
        content:"Success",
    },
    {
        id:2,
        content:"Info",
    },
    {
        id:3,
        content:"Danger",
    },
]

const Fading = () => {
    const [buttons, setButtons] = useState(information);
    const [index, setIndex] = useState(-1);
    const mouseOver = (index) =>{
       setIndex(index);
    }
    const mouseOut = () =>{
       setIndex(-1);
    }
    return (
        <div className="fading__overall">
          {
              buttons.map((button, i) =>{
                  return(
                      <button key={button.id} 
                      className="fading__button"
                      data-color={button.content}
                      onMouseOver={() => mouseOver(i)}
                      onMouseOut={() =>mouseOut()}
                      >{button.content}</button>
                  )
              })
          }
          {
              buttons.map((button,i) =>{
                  return(
                      i === index && 
                      <p key={i}>{button.content}</p>
                  )
              })
          }
        </div>
    );
}
 
export default Fading;