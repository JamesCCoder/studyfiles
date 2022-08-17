import React,{useState} from "react";
import "./App.css";



const App = () => {
  const [show, setShow] = useState(false);
  return ( 
    <div>
       <div className="block" data-show = {show} onClick={() => setShow((pre) => !pre)}></div>
    </div>
   );
}
 
export default App;