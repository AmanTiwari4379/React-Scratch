import { useState } from "react";

function App(){
const [users, setUsers] = useState([]);
const [user, setUser] = useState('');
const handleAddUsers=()=>{
    setUsers([...users,user])
}
    const total = users.length;
    const last = users[users.length-1];
    const unique = [...new Set(users)].length
    return(
        <div>
            <h3>Total User : {total}</h3>
            <h3>Last User : {last}</h3>
            <h3>Unique Name : {unique}</h3>
            <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder="Enter user names" />
            <button onClick={handleAddUsers}>Add User</button>
            {
                users.map((item,index)=>(
                    <h3 key={index}>{item}</h3>
                ))
            }
        </div>
    )
}
export default App;