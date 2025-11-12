import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [usersData, setUsersData] = useState([]);
  useEffect(()=>{
    getUserData();
  },[]);
  async function getUserData(){
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    //console.log(response.users);
    setUsersData(response.users);
  }
  return (
    <div>
      <h2>Fetch data from API</h2> 
      {
        usersData.map((user)=>(
          <ul className='user-list'>
            <li>
          Name: {user.firstName} {user.lastName}
            </li>
            <li>
          Age: {user.age}
            </li>
          </ul>
        ))
      }
    </div>
  )
}

export default App
