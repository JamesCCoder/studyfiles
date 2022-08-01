import React,{useState} from "react";
import "./App.css";

const App = () => {
    const [sign, setSign] = useState("+");
    const [visible, setVisible] = useState(true);
    const changeHandler = () =>{
        sign === "-" ? setSign("+") : setSign("-");
        setVisible((pre) => !pre);
    }
    return ( 
        <>
        <div>
         <div className="head">
            <p>head</p>
            <p onClick={() => changeHandler()}>{sign}</p>
         </div>
         <div className="content" style={{top: visible ? "50px": 0}}>
             <p>fdhsfisdhfisdhfidusfhdisufhdsuifhdsiufhdsfiudsh</p>
             <p>fdhsfisdhfisdhfidusfhdisufhdsuifhdsiufhdsfiudsh</p>
         </div>
        </div>

        </>

     );
}
 
export default App;