import React,{useState} from "react";
import "./Popup.css";

const Popup = () => {
    const [index, setIndex] = useState(false);
    const clickHandler = () =>{
        setIndex(pre => !pre);
    }
    return ( 
        <div className="popup__overall" onClick={() => clickHandler()}>popup
            {index && 
            (
            <>
              <div className="popup__content">This is popup</div>
              <div className="popup__tri"></div>  
            </>
            )
          
            }

        </div>
     );
}
 
export default Popup;