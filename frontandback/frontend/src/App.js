import React,{useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState(""); 
  const submitHandler = () =>{
    const registered = {
      username:userName,
      password:passWord,
    }
    axios.post("http://localhost:9091/signup", registered);
    setUserName("");
    setPassWord("");
  }
  return (
    <div>
       <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
       <input type="text" value={passWord} onChange={e => setPassWord(e.target.value)}/>
       <button onClick={submitHandler}>submit</button>
    </div>
  );
}

export default App;
