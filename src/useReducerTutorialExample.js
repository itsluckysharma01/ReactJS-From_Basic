import React, { useReducer } from 'react'

const initialState = {
  data: [],
  loading: false,
  error: null
}

function reducer (state, action){
  console.log(state,action);
  // console.log('Reducer called with action:', action);
  switch(action.type){
    case 'FETCH_DATA_START':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'DELETE_DATA':
      return {
        ...state,
        data:state.data.filter((item) => item.id !== action.payload)
      }

    case 'ADD_DATA':
      return {
        ...state,
        data: [...state.data, action.payload]
      }

    default:
      return state;
  }

}



const UseReducerTutorialExample = () => {

const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () =>{
    dispatch({type: 'FETCH_DATA_START'});

    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({type: 'FETCH_DATA_SUCCESS', payload: data});
      
      console.log(data);
    } 

    catch (error) 
    {
      dispatch({type: 'FETCH_DATA_FAILURE', payload: error.message});
    }

  };

  const addData = (newData) =>{
    dispatch({ type: 'ADD_DATA', payload: newData });
  }



const deleteData = (id) => {
  dispatch({ type: 'DELETE_DATA', payload: id });
}


  return (
    <div>
      <h1>useReducer Hook Another Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}

      <ul>
        {state.data.map(item => (
          <li key={item.id}>{item.title}{' '}
          <button onClick={() => deleteData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <form onSubmit={(e) => {

        e.preventDefault();
        const inputValue = e.target.elements[0].value;
        if (inputValue.trim() === "") return;
        addData({
        id: Date.now(),
        title: inputValue
        });
          e.target.reset();
}}>
  <input type="text" placeholder="Add new item" />
  <button type="submit">Add</button>
</form>

      
    </div>
  )
}

export default UseReducerTutorialExample
