import React, { useRef } from "react";
import Child from "./Child";

// useImparativeHandle Hook

const Parent = () => {
  const childRef = useRef(null);
  function handleOpenModel(val) {
    childRef.current.openModel(val);
  }
  return (
    <div>
      <p>This is Parent</p>
      <Child ref={childRef} />
      <button onClick={() => handleOpenModel(true)}>Open Model</button>
    </div>
  );
};

export default Parent;
