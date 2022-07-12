import React, { useState } from "react";

const App = () => {
  let [num, setNum] = useState(0);
  return (
    <div>
      <p>The number is:{num}</p>
      <button>add</button>
      <button>minus</button>
    </div>
  );
};
export default App;
