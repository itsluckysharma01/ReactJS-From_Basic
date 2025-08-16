import React, { useState, useEffect } from 'react'

const UseEffect = () =>{

  const [clicked, setClicked] = useState();

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div>
      <button onClick={() => setClicked('Hello')}>Hello</button>
      <br></br>
      <button onClick={() => setClicked('Lucky Sharma')}>Lucky Sharma</button><br></br>
      <button onClick={() => setClicked('Bharmouri')}>Bharmouri</button>

      <h1>{clicked}</h1>
    </div>
  );
}
export default UseEffect;