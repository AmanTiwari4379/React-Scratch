import { useTransition } from "react";

function App(){
    const [pending, startTransition] = useTransition();
    const handleButton=()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,5000))
        })
        //setPending(true)
    }
    return(
        <div>
            <h3>useTransition Hook in React js 19</h3>
            <br />
            {
                pending?
                <img style={{width:'100px', height:'40px'}} src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt="loading_img" />
                : <h3>Nothing is pending.</h3>
            }
            <br />
            <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    )
}
export default App;