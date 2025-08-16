import React, {useState} from 'react'

const incrementor= ()=> {

    const [count, setCount] = useState(0);
    console.log(count)
    console.log(setCount)

const handleClick = () => {
    setCount(count + 1);
}
const neghandleClick = () => {
    setCount(count - 1);
}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={neghandleClick}>-</button>
    </div>
  )
}

export default Incrementor;