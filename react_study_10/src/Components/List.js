import React, { useContext } from "react";
import "./List.css";

import Card from "./UI/Card";

import { MyContext } from "../App";

const List = () => {
  const data = useContext(MyContext);

  return data.map((oneData) => {
    const { id, title, content } = oneData;
    return (
      <Card className="list" key={id}>
        <p className="caption">{title}</p>
        <p className="content">{content}</p>
      </Card>
    );
  });
};

export default List;
