import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

const DataComponent = () => {
  console.log("Render");
  const [data, setData] = React.useState("initial value");
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    console.log("useEffect");
    const source = axios.CancelToken.source();
    const source2 = axios.CancelToken.source();
    const getData = async () => {
      const result = await axios.get(
        "https://api.chucknorris.io/jokes/random",
        {
          cancelToken: source.token
        }
      );
      console.log("Data returned");
      setData(result.data.value);
    };

    const getData2 = async () => {
      const result2 = await axios.get(
        "https://api.chucknorris.io/jokes/random",
        {
          cancelToken: source2.token
        }
      );
    };

    getData();

    return () => {
      console.log("Cleanup");
      source.cancel("AAAAA");
      source2.cancel("AAAAA");
    };
  }, [text]);

  return <>
    <div>{data}</div>
    <input value={text} onChange={(e) => setText(e.target.value)}></input>
  </>;
};

export default function App() {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsShown(!isShown)}>Toggle Component</button>
      {isShown && <DataComponent />}

    </div>
  );
}
