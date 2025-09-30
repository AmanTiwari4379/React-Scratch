import { Button } from "react-bootstrap";
function User3({callDisplay3,name3}) {
    return(
        <div>
            <Button variant="danger" onClick={()=>callDisplay3(name3)}>Display Name</Button>
        </div>
    )
}
export default User3;