import { useRef } from "react";
import UserInput from "./UserInput";

function App(){
    const inputRef = useRef(null);
    const updateInput=()=>{
        inputRef.current.value=1000;
        inputRef.current.focus();
        inputRef.current.style.color="red" 
    }
    return(
        <>
            <h3>Forward Ref</h3>
            {/* <input type="text" ref={inputRef} /> */}
            <UserInput ref={inputRef}/>
            <button onClick={updateInput}>Update Input field</button>
        </>
    )
};
export default App;