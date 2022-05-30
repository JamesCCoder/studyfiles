import React from "react";
import "./downoverall.css";

import DownComponent from "./downcomponent";

const DownOverall = (props) => {
  const { Data } = props;
  return (
    <div className="overall">
      <div className="content">
        <DownComponent Data={Data} />
      </div>
    </div>
  );
};

export default DownOverall;
