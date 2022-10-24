import React ,{useState} from "react";
import './App.css';


function App(){
    const [value, setValue] = useState("");
    return (
        <div>
           <input placeholder="name" type="text" value={value} onChange={e => setValue(e.target.value)}/>
           <p data-testid="result">{value === "James" ? "James" : "none"} is here</p>
        </div>
    );
}

export default App;
