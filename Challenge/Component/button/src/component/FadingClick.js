import React,{useState} from "react";
import "./FadingClick.css";

const btnValue = [
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

const FadingClick = () => {
    const [buttons, setButtons] = useState(
        btnValue.map((one)=>{
            return {id: one.id, content: one.content, show:false}
        })
    )
    const [index, setIndex] = useState(-1);
    const clickHandler = (index) =>{
        setIndex(index);
 
    }
    return ( 
       <div className="fadingclick__overall">
       {
          buttons.map((button, i) =>{
               return(
                   <button className="fadingclick__button" 
                   key={i}
                   style={{backgroundColor: i === index && i === 0 ? "lightgreen"
                                          : i === index && i === 1 ? "lightblue"
                                          : i === index && i === 2 ? "pink"
                                          : ""
                                        }}
                   data-color={button.content}
                   onClick = {() => clickHandler(i)}
                   >{button.content}
                   </button>
               )
          })
       }
       {
           buttons.map((button, i) =>{
               return(
                   i === index && 
                   <p>{button.content}</p>
               )
           })
       }

       </div> 
       );
}
 
export default FadingClick;