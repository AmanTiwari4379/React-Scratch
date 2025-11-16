import { useEffect, useState } from "react";
import './App.css'
export default function App(){
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        getUserData();
    },[])
    const getUserData=async()=>{
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response);
        setLoading(false);
    }
    return(
        <div>
            <h2>Integrate Json Server API and Loader</h2>
            <ul className="user-list user-list-head">
                        <li>Name</li>
                        <li>Age</li>
                        <li>Email</li>
                    </ul>
            {
                !loading?
                userData.map((user)=>(
                    <ul key={user.name} className="user-list">
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.email}</li>
                    </ul>
                ))
                : <h2>Loading...</h2>
            }
        </div>
    )
}