import { Button } from "react-bootstrap";
function User() {
    const displayName = (name) => {
        alert(name);
    };  
  return (
    <div>
      <Button variant="success" onClick={()=>displayName("aman")}>Display User</Button>
    </div>
  )
};

export default User;
