import React,{useState} from "react";
import {Link} from "react-router-dom";

const Calculation = () => {
    let [number1, setNumber1] = useState(0);
    let [number2, setNumber2] = useState(0);

    return ( 
        <>
           <label for="num_1"> number 1:
               <input id = "num_1" type="text" placeholder="input num1" value={number1}/>
           </label>
           <label for="num_2"> number 2:
               <input id = "num_2" type="text" placeholder="input num2" value={number2}/>
           </label>
           <button>add</button>
           <button>minus</button>
           <button>multiply</button>
           <button>divide</button>
           <label for="res"> res:
               <input id = "res" type="text"/>
           </label>
           <button><Link to = "/2" style={{textDecoration:"none", color:"black"}}>Pre</Link></button>
           <button><Link to = "/4" style={{textDecoration:"none", color:"black"}}>Next</Link></button>
        </>
     );
}
 
export default Calculation;