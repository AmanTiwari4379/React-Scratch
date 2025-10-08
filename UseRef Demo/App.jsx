import React from 'react'

function App() {
    const inputRef = useRef(null);
    const inputHandler = ()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color='red'
    }
    const toggleHandler = ()=>{
        if(inputRef.current.style.display!='none'){
            inputRef.current.style.display='none'
        }else{
            inputRef.current.style.display='inline'
        }
    }
  return (
    <>
      <h3>useRef</h3>
      <input type="text" placeholder='Enter your name'/>
      <button onClick={inputHandler}>Focus on Input field</button>
    </>
  )
}

export default App