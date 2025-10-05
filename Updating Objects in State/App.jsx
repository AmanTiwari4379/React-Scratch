import { useState } from "react";

function App(){
    const [data, setData] = useState({
        name:'Aman',
        address:{
            city:'Delhi',
            country:'India'
        }
    })
    const handleName=(val)=>{
        data.name=val

        setData({...data})
    }
    const handleCity=(city)=>{
        data.address.city = city;
        setData({...data,address:{...data.address}})
    }
    return(
        <div>
            <h2>Updating Objects in State</h2>
            <input type="text" placeholder="update name" onChange={(e)=>handleName(e.target.value)} />
            <input type="text" placeholder="update city" onChange={(e)=>handleCity(e.target.value)} />
            <h2>Name: {data.name}</h2>
            <h2>City: {data.address.city}</h2>
            <h2>Country:{data.address.country}</h2>
        </div>
    )
}
export default App;