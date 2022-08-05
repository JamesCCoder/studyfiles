import React,{useState} from "react";
import "./Hovernav.css";

const btnValue = ["about","blog","project","contact"];
const infoValue =["about is about", "blog is blog","projects are projects","contact is contact"];

const Hovernav = () => {
    const [value, setValue] = useState(
      btnValue.map((btn, i) =>{
        return {id: Math.floor(Math.random()*1000), key:btn, content:infoValue[i]}
        })
    )

    const [index, setIndex] = useState(-1);
    const clickHandler = (i) =>{
        setIndex(i);
    }
    return ( 
        <div className="hover__overall">
            <div className="hover__left">
                {
                    value.map((one, i) =>{
                        return(
                            <button key={one.id} 
                            className="left__button"
                            data-color={one.key}
                            onClick={() => clickHandler(i)}
                            >{one.key}</button>
                        )
                    })
                }
            </div>
            <div className="hover__right">
                {
                    value.map((one, i) =>{
                        return(
                            index === i && 
                               <p>{one.content}</p>
                            
                         
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Hovernav;