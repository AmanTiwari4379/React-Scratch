import { useState } from "react"

function App(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return(
        <div>
            <h2>Controller Component</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <br /><br />
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email id" />
            <br /><br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            <br /><br />
            <button>Sumbit</button>

            <button onClick={()=>{setEmail(''); setName(''); setPassword('')}}>Clear</button>

            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
        </div>
    )
}
export default App;