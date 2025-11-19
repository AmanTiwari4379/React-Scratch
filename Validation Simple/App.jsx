import React, { useState } from 'react'
import './App.css'
function App() {
    const [name,setName] = useState('');
    const [nameErr,setNameErr] = useState();
    const [password,setPassword] = useState('');
    const [passErr,setPassErr] = useState();

    const handleName=(e)=>{
        console.log(e.target.value);
        if(e.target.value.length>5){
            setNameErr('Only 5 letters allowed');
        }else{
            setNameErr('');
        }
    }

    const handlePassword=(e)=>{
        console.log(e.target.value);
        let regex = /^[A-Z0-9]+$/i;
        if(regex.test(e.target.value)){
            setPassErr('');
        }else{
            setPassErr('Only letters and numbers are allowed');
        }
    }

  return (
    <div>
    <h2>Simple Validation in React.js</h2>
    <br /><br />
      <input className={nameErr? 'error' : ''} type="text" onChange={handleName} placeholder='enter name' />
      <span>{nameErr && nameErr}</span>
      <br /><br />
      <input className={passErr? 'error' : ''} type="password" placeholder='enter password' />
      <span>{passErr && passErr}</span>
      <br /><br />
      <button disabled={nameErr || passErr}>Login</button>
    </div>
  )
}

export default App
