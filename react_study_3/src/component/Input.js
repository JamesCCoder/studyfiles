import React, { useState, useRef,useEffect } from "react";
import "./Input.css";

const Input = (props) => {
  const [valueOne, setValueOne] = useState("");
  const inputSecondHandler = useRef();

  const inputOneHandler = (e) => {
    setValueOne(e.target.value);
  };

  const [valid, setValid] = useState(true);


  useEffect(() => {
    const timing = setTimeout(() => {
      setValid(valueOne.length > 0);
      console.log("try");
    },200);
    return () => {
      clearTimeout(timing);
    }
    
  },[valueOne]);


  const submitData = (e) => {
    e.preventDefault();
    if(valid === false){
      console.log("input wrong");
    }else{
      props.getData(valueOne);
      props.getData(inputSecondHandler.current.value);
    }
    
  };

  return (
    <>
      <div className="overall">
        <form className="form" onSubmit={submitData}>
          <div>
            <label htmlFor="input_1">input_1</label>
            <input id="input_1" onChange={inputOneHandler} value={valueOne} className={valid ? "input_valid" : "input_notvalid"}/>
          </div>
          <div>
            <label htmlFor="input_2">input_2</label>
            <input id="input_2" ref={inputSecondHandler} className={valid ? "input_valid" : "input_notvalid"}/>
          </div>
          <div>
            <button className="button">press it!</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;
