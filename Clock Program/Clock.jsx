import { useState } from "react"
import { useEffect } from "react";
const Clock = ({color})=>{
    const [time, setTime] = useState();
    useEffect(()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    },[])
    return(
        <div>
            <h3 style={{color: color, backgroundColor: '#000', width: '120px', padding: '10px', borderRadius: '10px'}}>{time}</h3>
        </div>
    )
}
export default Clock