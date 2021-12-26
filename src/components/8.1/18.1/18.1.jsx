import React, { useState } from "react";


export default function Text({ string, length }) {
  const [show, setShow] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const strLength = () => {
    if (show) {
      return string.substring(0, length);
    }
    return string;
  };

  const hideOrShow = () => {
    return show ? "Show More" : "Show Less";
  };

  return (
    <div>
      {strLength()}{" "}
      <a onClick={toggle} href="">
        {hideOrShow()}
      </a>
    </div>
  );
}