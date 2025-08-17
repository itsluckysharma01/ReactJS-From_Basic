import React, { createContext } from 'react'
import B_ContextAPI from './B_ContextAPI';

const GreetContext = createContext();
const Greet2Context = createContext();

export default function A_ContextAPI() {

    const greet = "Hello"
    const greet2 = "Hello"
  return (
    <div>
      <h1>With Context API</h1>
      <GreetContext.Provider value={greet}>
        <GreetContext.Provider value={greet2}>
        <B_ContextAPI />
      </GreetContext.Provider>
        
      </GreetContext.Provider>
    </div>
  )
}

export {GreetContext, Greet2Context};