import React, { useState } from 'react'

function UserAdd() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const createUser=async()=>{
    console.log(name,age,email);
    const url = "http://localhost:3000/users";
    let response = await fetch(url,{
      method: 'Post',
      body: JSON.stringify({name,age,email})
    });
    response = await response.json();
    if(response){
      alert("New User Added");

    }
  }
  return (
    <div style={{textAlign:'center'}}>
      <h3>Add a User</h3>
      <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter name' />
      <br /><br />
      <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder='enter age' />
      <br /><br />
      <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' />
      <br /><br />
      <button onClick={createUser}>Add User</button>
    </div>
  )
}

export default UserAdd
