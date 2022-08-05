import React,{useState} from "react";
import "./Notification.css";

const Notification = () => {
    const [value, setValue] = useState(0);
    const clickHandler = () =>{
        setValue((pre) => pre + 1);
    }
    return ( 
        <div className="overall">
            <button className="button" onClick = {() => clickHandler()}>Inbox
              {value > 0 &&
               <div className="badge">{value}</div>
              }
            </button>
            
        </div>
     );
}
 
export default Notification;