import { useReducer } from "react"

const emptyData = {
        name:'',
        password:'',
        email:'',
        city:'',
        address:''
    }
    const reducer = (data,action)=>{
      //console.log(action);
      return{...data,[action.type]:action.val}
    }

function App() {
   const [state,dispatch] = useReducer(reducer,emptyData);
   //console.log(state);
    
  return (
    <div>
      <h2>useReducer Demo</h2>
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'name'})} placeholder='Enter Name' />
      <br /><br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'password'})} placeholder='Enter Password' />
      <br /><br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'email'})} placeholder='Enter Email' />
      <br /><br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'city'})} placeholder='Enter City' />
      <br /><br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'address'})} placeholder='Enter Address' />
      <br /><br />
      <button onClick={()=>console.log(state)}>Add Details</button>
    </div>
  )
}

export default App
