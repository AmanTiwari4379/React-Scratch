import { Button } from "react-bootstrap";
const name2= 'Tiwari'
function User2({callDisplay, callDisplay2}){
    return(
        <div>
            <Button variant="warning" onClick={callDisplay}>Display First Name</Button>
            <Button onClick={()=>callDisplay2(name2)}>Display Last Name</Button>
        </div>
    )
};
export default User2;