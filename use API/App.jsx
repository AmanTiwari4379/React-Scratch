import React, { Suspense, use } from 'react'

const fetchData =()=>fetch('https://dummyjson.com/users').then((response)=>response.json());

const userResource = fetchData();
function App() {
  return (
    <div>
        <h2>use API in React js</h2>
        <Suspense fallback={<h3>Loading...</h3>}>   
            <Users userResource={userResource}/>
        </Suspense>
    </div>
  )
}

const Users =({userResource})=>{
    const userData = use(userResource);
    console.log(userData.users);
    
    return(
        <div>
        <h2>User List</h2>
        {
            userData?.users?.map((user,index)=>(
            <h2 key={index}>{user.firstName}</h2>    
            ))
        }
        </div>
    )
}

export default App
