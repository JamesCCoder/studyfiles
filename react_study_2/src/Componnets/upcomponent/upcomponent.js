import React, { useState } from "react";
import "./upcomponent.css";

const UpComponent = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const dataHandler = (e) => {
    e.preventDefault();
    if (userName.length === 0 || age.length === 0) {
      setIsValid(false);
    } else {
      const Data = {
        name: userName,
        age: age,
      };

      props.getData(Data);
      setIsValid(true);
    }
    props.getValid(isValid);
  };
  return (
    <div>
      <form className="form" onSubmit={dataHandler}>
        <div>
          <p>Username</p>
          <input
            type="text"
            className={isValid ? "input_valid" : "input_notvalid"}
            value={userName}
            onChange={nameHandler}
          />
        </div>
        <div>
          <p>Age(Years)</p>
          <input
            type="text"
            className={isValid ? "input_valid" : "input_notvalid"}
            value={age}
            onChange={ageHandler}
          />
        </div>
        <button className="button">Add User</button>
      </form>
    </div>
  );
};

export default UpComponent;
