import React,{useState} from "react";
import "./Overlay.css";

const info = ["about", "service", "contact"];

const Overlay = () => {
    const [show, setShow] = useState(false);
    return ( 
    <div className="wrapper">
            <div className="overlay__overall" data-show={show}>
            {
                info.map((one) =>{
                    return(
                        <p className="overlay__menu">{one}</p>
                    )
                })
            }
            <button className="overlay__cancel" onClick={() => setShow(false)}></button>
        </div>
        

        <button className="overlay__button" onClick={() => setShow(true)}>click</button>
    </div>

     );
}
 
export default Overlay;