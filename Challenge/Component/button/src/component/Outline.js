import React,{useState} from "react";
import "./Outline.css";

const buttonInformation = [
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
        content:"Warning",
    },
    { 
        id:4,
        content:"Danger",
    },
    {
        id:5,
        content:"Default"
    },
]

const Outline = () => {
    const [buttons, setButtons] = useState(buttonInformation);
    return ( 
        <div className="outline__overall">
            {
              buttons.map((button) =>{
                  return(
                      <button key={button.id} 
                      data-color = {button.content} 
                      className="outline__button">{button.content}</button>
                  )
              })
            }
        </div>
     );
}
 
export default Outline;