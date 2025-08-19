import React, {useReducer} from 'react'

const reducer = (state, action) =>{

  console.log(state,action);
  if(action.type === 'increment') {
    return {count: state.count + 1};
  }
  else if(action.type === 'decrement') { 
    return {count: state.count - 1};
  }
  else{
    throw new Error('Unknown Action type')
  }

};

const App = () => {

    // const [count, setCount] = useState(0);
    // console.log(count)
    // console.log(setCount)

    const [state, dispatch] = useReducer(reducer, {count:0});


    // Reducer (coffee maker) function
    //state (coffee powder )and action(add water)
    // it is pure function
    // 10+10 = 20 with no side effect



const handleClick = () => {
    dispatch({type: 'increment'});
}
const neghandleClick = () => {
    dispatch({type: 'decrement'});
}

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={neghandleClick}>-</button>
    </div>
  )
}

export default App;