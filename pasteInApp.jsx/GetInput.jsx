import { useState } from "react";

function App(){
    const [val, setVal] = useState("Welcome Guys"); 
    return(
        <div>
        <h1>Get Input Field Value</h1>
        <input type="text" value={val} placeholder="Enter Your Name" onChange={(e)=> setVal(e.target.value)}/>
        <h1>{val}</h1>
        <button onClick={()=> setVal("")}>Clear</button>
        </div>
    )
}
export default App;