import React from 'react'
import B_ContextAPI from './B_ContextAPI';

export default function A_ContextAPI() {

    const greet = "Hello from A_ContextAPI"
  return (
    <div>
      <h1>Context API</h1>
      <B_ContextAPI greet={greet} />
    </div>
  )
}
