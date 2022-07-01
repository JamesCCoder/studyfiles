import React, { useState, useEffect } from "react";
import "./App.css";

const people = [
  "Shashi Koshy",
  "Dhriti Taneja",
  "Dipa Mishra",
  "Ansh Thakkar",
  "Lakshmi Thaker",
  "Sushila Matthai",
  "Shresth Nigam",
  "Bhavana Biswas",
  "Vasudha Mangat",
  "Priya Saran",
];

function App() {
  let [value, setValue] = useState("");
  let [searchValue, setSearchValue] = useState([]);
  useEffect(() => {
    const result = people.filter((person) => {
      return person.toLowerCase().includes(value.toLowerCase());
    });
    setSearchValue(result);
  }, [value]);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <ul>
        {searchValue.map((one, i) => {
          return <li key={i}>{one}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
