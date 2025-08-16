import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [users, setUsers]= useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error))
    }, [])


  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
            users.map(user => {
            return <li key={user.id}>
                <a href={user.html_url}>{user.login}</a></li>
            })
        }

      </ul>
    </div>
  )
}

export default Fetch
