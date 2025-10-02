import { useEffect } from "react";

const UseEffectDemo2Counter=({count, count2})=>{
    const handleCounter=()=>{
        console.log("handleCounter called");
    }
   // handleCounter();// it calls multiple times
    const handleCounter2=()=>{
        console.log("handleCounter2 called");
    }
    
   useEffect(()=>{
        handleCounter();// count will continue and call function one time
        //handleCounter2();
    },[]);
     useEffect(()=>{
         handleCounter2();
     },[count2]);
    return(
        <div>
            <h3>Counter Value {count}</h3>
            <h3>Counter Value {count2}</h3>
        </div>
    )
};
export default UseEffectDemo2Counter;