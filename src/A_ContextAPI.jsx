import React, { createContext } from 'react'
import B_ContextAPI from './B_ContextAPI';

const GreetContext = createContext();
const Greet2Context = createContext();

export default function A_ContextAPI() {

    const greet = "Hello"
    const greet2 = "World";
  return (
    <div>
      <GreetContext.Provider value={{greet,greet2}}>
      </GreetContext.Provider>
    </div>
  )
}

export {GreetContext, Greet2Context};