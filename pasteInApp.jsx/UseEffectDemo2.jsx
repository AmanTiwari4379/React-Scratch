import { useState } from "react";
import Counter from "../UseEffectDemo2Counter";

function UseEffectDemo2(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [display, setDisplay] = useState(true);

    return(
        <div>
            {
                display? <Counter count={count} count2={count2}></Counter>:null
            }
            <button onClick={()=>setCount(count + 1)}>Counter</button>
            <button onClick={()=>setCount2(count2 + 1)}>Counter 2</button>
            <button onClick={()=>setDisplay(!display)}>Display</button>
        </div>
    ) 
}
export default UseEffectDemo2;