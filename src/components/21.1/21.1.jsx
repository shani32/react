import React, { useState, useEffect, useRef } from "react";

export const Editing = () => {
  const [isEdit, setisEdit] = useState(false);
  const Input = () => {
    const inputRef = useRef();
    useEffect(() => {
      inputRef.current.focus();
    });
    return (
      <>
        <span>
          <input ref={inputRef} type="text" />
        </span>
      </>
    );
  };

  return (
    <div>
      <span>
        {isEdit && <Input />}
        <button onClick={() => setisEdit(!isEdit)}>
          {isEdit ? "Save" : "Edit"}
        </button>
      </span>
    </div>
  );
};