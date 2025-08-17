import React from 'react'
import C_ContextAPI from './C_ContextAPI';


export default function B_ContextAPI(props) {

  return (
    <div>
      <C_ContextAPI greet={props.greet} />
    </div>
  )
}
