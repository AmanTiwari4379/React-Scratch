import { useFormStatus } from "react-dom";

function App(){
    const handleSubmit =async ()=>{
        await new Promise (res=>setTimeout(res,2000));
        console.log('Submit')
    }
    function CustomerForm(){
        const {pending} = useFormStatus();
        console.log(pending);
         return(
            <div>
                <input type="text" placeholder="Enter Name" />
                <br /><br />
                <input type="text" placeholder="Enter Password" />
                <br /><br />
                <button disabled={pending}>{pending?'Submitting..':'Submit'}</button>
            </div>
         )
    }
    return(
        <div>
            <h3>useFormStatus Hook in React js 19</h3>
            <form action={handleSubmit}>
                <CustomerForm />
            </form>
        </div>
    )
}
export default App;