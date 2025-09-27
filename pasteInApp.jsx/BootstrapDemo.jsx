import { Button } from "react-bootstrap"
import { Alert } from "react-bootstrap";
function App(){
    return(
        <>
          <h1>Add Bootstrap in React js</h1>

          <Alert variant="success">Hello, BT installed</Alert>
          <Button variant="danger">Ok</Button>
          <Button variant="success">Ok</Button>
          <button variant="warnings">Ok</button>  
        </>
    )
}
export default App;