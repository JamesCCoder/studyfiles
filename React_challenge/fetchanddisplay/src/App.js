import React, { useState } from "react";
import "./App.css";

const url = "https://swapi.dev/api/people";

function App() {
  let [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    const result = await jsonData.results;
    setData(result);
  };
  return (
    <div>
      <button onClick={() => getData()}>get</button>
      <ul>
        {data.map((one, id) => {
          return (
            <li key={id}>
              {one.name}
              {one.height}
              {one.mass}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
