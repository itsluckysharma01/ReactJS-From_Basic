// useEffect
// uselayoutEffect
import React, { useState, useEffect, useLayoutEffect } from "react";

const Uselayoutexample = () => {
  useEffect(() => {
    console.log("useEffect Part");
  }, []);

  useLayoutEffect(() => {
    //disply first then useEffect
    console.log("useLayoutEffect Part");
  }, []);

  return (
    <div>
      <h1>useEffect vs useLayoutEffect</h1>
      <p>Check the console to see the order of execution.</p>
    </div>
  );
};

export default Uselayoutexample;
