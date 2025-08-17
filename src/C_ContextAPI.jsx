import React from 'react'
import { GreetContextt} from './A_ContextAPI';



export default function C_ContextAPI() {

    const useCon = useContext(GreetContext);
    console.log(useCon)


  return (
    <h1>Greet : {useCon.greet} Greet2: {useCon.greet2}</h1>
  // Uncomment the below code to use Context API Consumer
  )
}

    //  <GreetContext.Consumer>
    //   {
    //     (val)=>(
    //       <Greet2Context.Consumer>
    //         {
    //           (val2)=> <h1>Greet: {val} Greet2: {val2}</h1>
    //         }
    //       </Greet2Context.Consumer>
    //     )
    //   }
    // </GreetContext.Consumer>