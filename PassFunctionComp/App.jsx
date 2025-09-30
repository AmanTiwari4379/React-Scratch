import User from "./User";
import User2 from "./User2";
import User3 from "./User3";

function App(){ 
  const displayName2 = () => {
    alert('Aman');
  }
  const displayName3 = (name2) => {
    alert(name2)
  }
  const displayName4 =(name3)=>{
    alert(name3)
  }
    return(
        <>
          <h1>Function call with props</h1>
          <hr />
          <br />
          <User />  
          <br />
          <User2 callDisplay={displayName2} callDisplay2={displayName3}/>
          <br />
          <User3 callDisplay3={displayName4} name3="Mark Zukerberg" />
        </>
    )
}
export default App;