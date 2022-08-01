import React,{useState} from "react";
import "./App.css";

import Input from "./components/Input";
import Output from "./components/Output";

import Input1 from "./components/Input1";
import Output1 from "./components/Output1";

import Input2 from "./components/Input2";
import Output2 from "./components/Output2";
import Change from "./components/Change";

const convertRate = 6;

export const myContext = React.createContext();

const App = () => {
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);

    let [c, setC] = useState(0);
    let [d, setD] = useState(0);

    let [e1, setE1] = useState(0);
    let [f, setF] = useState(0);

    let [g, setG] = useState(0);
    let [h, setH] = useState(0);

    const changeHandler = () =>{
        setB(a * convertRate);
    }

    const changeHandler1 = () =>{
        setD(c * convertRate);
    }

    const getValue = (value) =>{
        setE1(value);
    }

    const changeHandler2 = () =>{
        setF(e1 * convertRate);
    }

    const changeHandler3 = () =>{
        setH(g * convertRate);
    }

    return ( 
        <div>
            <div>
              <input type="number" value={a} onChange ={(e) => setA(e.target.value)}/>
              <span>
                  <button onClick={changeHandler}>change</button>
              </span>
              <input type="number" value={b}/>
            </div>
            <div>
              <Input type="number" value={c} onChange={(e) => setC(e.target.value)}/>
                 <span>
                     <button onClick={changeHandler1}>change</button>
                 </span>
              <Output type="number" value={d}/>
            </div>
            <div>
                <Input1 getValue={getValue}/>
                 <span>
                     <button onClick={changeHandler2}>change</button>
                 </span>
                 <Output1 f={f}/>
            </div>
            <div>
                <myContext.Provider value={{g, h, changeHandler3, setG}}>
                   <Input2 />
                    <span>
                        <Change />
                    </span>
                    <Output2 />
                </myContext.Provider>
            </div>

        </div>

     );
}
 
export default App;