import React,{useState} from "react";
import './App.css';

function App() {
  const [sign, setSign] = useState("+");
  const changeHandler = () =>{
     setSign(
       sign === "+" ? "-" : "+"
     )
  }
  return (
    <div>
       <header className="head">
         <p>head</p>
         <p onClick={() => changeHandler()}>{sign}</p>
       </header>
       <body className="content" style={{top: sign === "+" ? "100px": 0}}>
         <p>fdsahfoasfhsioafhsofhsofhsodifhsofihsdof</p>
       </body>
    </div>
  );
}

export default App;
