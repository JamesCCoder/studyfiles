import React,{useState} from "react";
import "./Click.css";

const Click = () => {
    let [show, setShow] = useState(false);
    const clickHandler = () =>{
       setShow(pre => !pre);
    }
    return ( 
        <div className="click__overall">
            <button className="click__button" onClick={clickHandler}>click</button>
            {
                show &&             
                <div className="click__menus">  
                <p className="click__menu">link1</p>
                <p className="click__menu">link2</p>
                <p className="click__menu">link3</p>
            </div>
            }

        </div>
     );
}
 
export default Click;