import React, { useState } from "react";
import "./Fetch.css";

const Fetch = (props) => {
  const { getData } = props;
  const [listData, setListData] = useState([{}]);
  let [N, setN] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchHandler = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://swapi.dev/api/films/${N}`);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const data_1 = await response.json();

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
      setN((pre) => {
        return pre + 1;
      });
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="fetch_container">
      <button className="fetch_button" onClick={fetchHandler}>
        {!loading && "Fetch Movies"}
        {loading && "Loading..."}
        {loading && error && `${error}`}
      </button>
    </div>
  );
};

export default Fetch;
