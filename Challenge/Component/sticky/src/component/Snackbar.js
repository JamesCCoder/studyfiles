import React,{useState} from "react";
import "./Snackbar.css";

const Snackbar = () => {
    const [show, setShow] = useState(false);
    return ( 
        <div>
            <button onClick={() => setShow(pre => !pre)}>snackbar</button>
             <p className="snackbar"
                style={{visibility : show ? "visible" : "hidden"}}>This is a snickbar</p>
        </div>
     );
}
 
export default Snackbar;