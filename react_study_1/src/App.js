import React, { useState } from "react";
import "./App.css";

import AddComponent from "./Components/AddComponent/AddComponent";
import DeleteComponent from "./Components/DeleteComponent/DeleteComponent";

function App() {
  const [content, setContent] = useState(["Finish the course!", "12343243243"]);
  const handleGetWords = (words) => {
    setContent([...content, words]);
    console.log(content);
  };
  return (
    <div>
      <AddComponent getWords={handleGetWords} />
      <DeleteComponent content={content} />
    </div>
  );
}

export default App;
