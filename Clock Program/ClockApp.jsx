import { useState } from "react";
import Clock from "./Clock";


function ClockDemo(){
    const [color, setColor] = useState('red');
    return(
        <div>
            <h3>Clock Project</h3>
            <select onChange={(e)=>setColor(e.target.value)}> 
                <option value={"red"}>Red</option>
                <option value={"blue"}>Blue</option>
                <option value={"orange"}>Orange</option>
                <option value={"green"}>Green</option>
            </select>
            <Clock color={color}/>
        </div>
    )
}
export default ClockDemo;