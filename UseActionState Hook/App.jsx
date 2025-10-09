import { useActionState } from "react";

function App() {
  const handleSubmit = async(previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');
    await new Promise(res=>setTimeout(res,2000))
    //console.log("handleSubmit called",name,password);
    if(name && password){
        return {message:'Data Submitted'}
    }else{
        return {error: 'Enter proper data'}
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);
  return (
    <div>
      <h3>useActionState Hook in React js</h3>
      <form action={action}>
        <input type="text" placeholder="enter name" name="name" />
        <br />
        <br />
        <input type="password" placeholder="enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>Sumbit Data</button>
      </form>
      <br />
        {
            data?.error && <span style={{color:'red'}}>{data?.error}</span>
        }
        {
            data?.message && <span style={{color:'green'}}>{data?.message}</span>
        }
    </div>
  );
}
export default App;
