import React, { useState, useEffect } from 'react'

const UseEffect = () =>{

const [clicked, setClicked] = useState();
const [count, setCount] = useState(0);


  useEffect(()=>{
    // alert('we are in new state')
    console.log('we are in new state')
  },[clicked,count]);


  return (
    <div>
      <button onClick={() => setClicked('Hello')}>Hello</button>
      <br></br>
      <hr></hr>
      <button onClick={() => setClicked('Lucky Sharma')}>Lucky Sharma</button><br></br>
      <hr></hr>
      <button onClick={() => setClicked('Bharmouri')}>Bharmouri</button>
      <hr></hr>
      
      <h1>{clicked}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1>{count}</h1>
      
    </div>
  );
}
export default UseEffect;