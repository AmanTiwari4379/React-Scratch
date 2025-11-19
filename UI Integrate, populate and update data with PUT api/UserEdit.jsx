import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

function UserEdit() {
    const {id}= useParams();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const url = "http://localhost:3000/users/"+id;
    const navigate = useNavigate();

    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async()=>{
        let response = await fetch(url);
        response = await response.json();

        setName(response.name);
        setAge(response.age);
        setEmail(response.email);
    }
    const updateUserData=async()=>{
        //console.log(name,age,email);
        let response = await fetch(url,{
            method:'Put',
            body:JSON.stringify({name,age,email})
        })
        response = await response.json();
        console.log(response);
        if(response){
          alert("User data updated");
          navigate('/')
        }
        
    }
  return (
    <div style={{textAlign:'center'}}>
      <h3>Edit User Details</h3>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name' />
      <br /><br />
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='enter age' />
      <br /><br />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' />
      <br /><br />
      <button onClick={updateUserData}>Update User</button>
    </div>
  )
}

export default UserEdit
