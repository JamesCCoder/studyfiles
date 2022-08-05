import React,{useState} from "react";
import "./Prenext.css";

const value = ["previous", "next"];

const Prenext = () => {

    const [buttons, setButtons] = useState(value.map((oneValue) =>{
        return {content: oneValue, key: Math.floor(Math.random()*1000)}
    }));
    return ( 
        <div>
            {
                buttons.map((oneButton) =>{
                    return(
                        <button key={oneButton.key} className="prenext" data-color={oneButton.content}>{oneButton.content}</button>
                    )
                })
            }
        </div>
     );
}
 
export default Prenext;