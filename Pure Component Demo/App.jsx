// This is the illustration of impure components
let count=0;
function App(){
    return(
        <>
        <h2>Keeping Components Pure</h2>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </>
    )
}
const Counter=()=>{
    count= count + 1;
    return <h3>Counter {count}</h3>
}
export default App;