import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    const [rcount, setRcount] = useState(10);
  return (
    <div>
      <h3>Count: {count}</h3>
      <h3>Reverse Count: {rcount}</h3>
      <button onClick={()=> setCount(count + 1)}>Count</button>
      <button onClick={()=> setRcount(rcount - 1)}>Reverse Count</button> 
    </div>
  )
}

export default App
