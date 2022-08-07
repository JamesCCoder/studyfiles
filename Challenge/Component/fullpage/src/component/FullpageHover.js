import React,{useState} from "react";
import "./FullpageHover.css";

const info = ["Home", "News", "Contact", "About"];
const content = ["This is home", "This is news", "This is contact", "This is about"];

const FullpageHover = () => {
    const [value, setValue] = useState(
        info.map((oneInfo, i) =>{
            return {id:Math.floor(Math.random()*1000), key:oneInfo, content: content[i], select:false}
        })
    )
    const [index, setIndex] = useState(-1);
    const mouseOver = (i) =>{
       setIndex(i);
    }

    const mouseOut = () =>{
       setIndex(-1);
    }
    return ( 
       <div>
           <div className="hover__header">
               {
                   value.map((oneValue, i) =>{
                       return(
                           <p key={i}
                           style={{}} 
                           className="hover__menu" 
                           data-color={oneValue.key}
                           onMouseOver={() => mouseOver(i)} 
                           onMouseOut={() => mouseOut()}>{oneValue.key}</p>
                       )
                   })
               }
           </div>
           {
                value.map((oneValue, i) =>{
                    return(
                        index === i &&
                        <p 
                        style={{backgroundColor: i === 0 ? "red" : i === 1 ? "green" : i === 2 ? "blue" : "orange"}}
                        className="hover__content" 
                        key={i}>{oneValue.content}</p>
                    )
                })
           }
       </div>
     );
}
 
export default FullpageHover;