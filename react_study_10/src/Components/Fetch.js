import React, { useState } from "react";
import "./Fetch.css";

const Fetch = (props) => {
  const { getData } = props;
  const [listData, setListData] = useState([{}]);
  let [N, setN] = useState(1);
  const fetchHandler = async () => {
    const data = await fetch(`https://swapi.dev/api/films/${N}`);
    const data_1 = await data.json();
    setListData((pre) => {
      return [
        ...pre,
        {
          id: Math.random(),
          title: data_1.title,
          content: data_1.opening_crawl,
        },
      ];
    });
    getData(listData);
    console.log(listData);
    setN((pre) => {
      return pre + 1;
    });
  };

  return (
    <div className="fetch_container">
      <button className="fetch_button" onClick={fetchHandler}>
        Fetch Movies
      </button>
    </div>
  );
};

export default Fetch;
