import React, { useState, useEffect } from "react";
import axios from "axios";

export const Cancel = () => {
  const [isData, setIsData] = useState(false);

  const Data = () => {
    const [joke, setJoke] = useState([]);

    useEffect(() => {
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      const getData = async () => {
        const data = await axios
          .get("https://api.chucknorris.io/jokes/random", {
            cancelToken: source.token,
          })
          .catch((err) => {
            console.log(err);
          });
        setJoke(data);
      };
      getData();

      return () => {
        source.cancel();
      };
    }, []);
    return <div>{joke.value}</div>;
  };

  return (
    <div>
      <button onClick={() => setIsData(!isData)}>
        {!isData ? "Fetch" : "Enable"}
      </button>
      {isData && <Data />}
    </div>
  );
};