import React from 'react'

export default function From() {
    const handleName = (e)=>{
        console.log(e.target);
        
    }
  return (
    <div>
        <label>Name: 
            <input type="text" placeholder="Enter your name" onClick={handleName}  />
            <br></br>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Submit</button>
        </label>
      
    </div>
  )
}
