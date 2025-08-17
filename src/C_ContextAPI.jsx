import React from 'react'
import { GreetContext, Greet2Context } from './A_ContextAPI';

export default function C_ContextAPI() {



  return (
    <GreetContext.Consumer>
      {
        (val)=>(
          <Greet2Context.Consumer>
            {
              (val2)=> <h1>Greet: {val} Greet2: {val2}</h1>
            }
          </Greet2Context.Consumer>
        )
      }
    </GreetContext.Consumer>
  )
}
 