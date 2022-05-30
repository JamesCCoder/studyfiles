import React, { useState } from "react";
import "./upcomponent.css";

const UpComponent = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const dataHandler = (e) => {
    e.preventDefault();
    const Data = {
      name: userName,
      age: age,
    };
    props.getData(Data);
  };
  return (
    <div>
      <form className="form" onSubmit={dataHandler}>
        <div>
          <p>Username</p>
          <input type="text" value={userName} onChange={nameHandler} />
        </div>
        <div>
          <p>Age(Years)</p>
          <input type="text" value={age} onChange={ageHandler} />
        </div>
        <button className="button">Add User</button>
      </form>
    </div>
  );
};

export default UpComponent;
