import React from "react";
import './App.css';

import useFetch from "./useFetch";

function App() {
  const [value] = useFetch("https://swapi.dev/api/people");
  return (
    <div>
      <ul>
       {
         value.map((one,i) =>{
           return(
              <li key={i}>
                {one.name}
              </li>
           )
         })
       }
      </ul>

    </div>
  );
}

export default App;
