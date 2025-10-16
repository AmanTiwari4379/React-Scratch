import useToggle from "./useToggle";
export default function App(){
    const [balue,toggleBalue] = useToggle(true);
    return(
        <div>
        <button onClick={toggleBalue}>Toggle Heading</button>
        <button onClick={()=>toggleBalue(false)}>Toggle Hiding</button>
        <button onClick={()=>toggleBalue(true)}>Show Heading</button>
        {
            balue? <h1>Custom Hooks in React js</h1>:null
        }
        </div>
    )
}