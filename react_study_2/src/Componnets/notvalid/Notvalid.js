import React, { useState } from "react";
import "./Notvalid.css";

const Notvalid = (props) => {
  const { val } = props;
  const [va, setVa] = useState(val);

  const changeHandler = () => {
    setVa(true);
    props.getBack(va);
  };

  return (
    <>
      <div className="v_out">
        <p className="v_words">
          Your input is invalid, please input valid name and/or age
        </p>
        <button className="v_button" onClick={changeHandler}>
          OK
        </button>
      </div>
    </>
  );
};

export default Notvalid;
