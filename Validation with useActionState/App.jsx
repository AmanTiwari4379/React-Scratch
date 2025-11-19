import React, { useActionState } from 'react'

function App() {
    const handleLogin=(prevData,formData)=>{
        let name = formData.get('name');
        let password = formData.get('password');
        let regex = /^[A-Z0-9]+$/i;
        if(!name || name.length > 5){
            return{error:'Name should not be empty or exceed more than 5 letters',name,password}
        }
        else if(!password || !regex.test(password)){
            return{error:'Password should be empty or contain other then numbers and letters',name,password}
        }else{
            return{message:'Login Done',name,password}
        }
        //console.log(name,password);
        
    }
    const [data,action,pending] = useActionState(handleLogin);
    console.log(data);
    
  return (
    <div>
        <h2>Validation with useActionState</h2>
        {
            data?.message && <span>{data?.message}</span>
        }
        {
            data?.error && <span>{data?.error}</span>
        }
      <form action={action}>
        <label htmlFor="">Name: </label>
        <input type="text" defaultValue={data?.name} name='name' placeholder='Enter Name' />
        <br /><br />
        <label htmlFor="">Password: </label>
        <input type="password" defaultValue={data?.password} name='password' placeholder='Enter Password' />
        <br /><br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default App
