import React, { useState } from "react";
import "./DeleteComponent.css";

const DeleteComponent = (props) => {
  const { content } = props;
  const [value, setValue] = useState(content);

  const handleOnClick = () => {
    const newValue = value.filter((newValue) => _oneValue !== _oneValue);

    setValue((pre) => {});
  };

  return value.map((oneValue) => {
    return (
      <div className="outer" onClick={handleOnClick}>
        <p className="content">{oneValue}</p>;
      </div>
    );
  });
};

export default DeleteComponent;
