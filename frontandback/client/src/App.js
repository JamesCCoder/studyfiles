import React,{useState, useEffect} from "react";
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
        {
          
        }
    </div>
  );
}

export default App;
