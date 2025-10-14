import { useId } from "react";

function App(){
  

    return(
        <div>
          <UserForm />
          <UserForm2 />
        </div>
    )
}

function UserForm(){
    const name = useId();
    const password = useId();
    const skills = useId();

    return(
        <div>
            <form action="">
            <label htmlFor={name}>Enter User Name</label>
            <input type='text' id={name} placeholder="enter name" />
            <label htmlFor={password}>Enter User Password</label>
            <input type='text' id={name} placeholder="enter password" />
            <label htmlFor={skills}>Enter User Skills</label>
            <input type='text' id={skills} placeholder="enter skills" />
           </form>
        </div>
    )
}
function UserForm2(){
    const user = useId();

    return(
        <div>
            <form action="">
            <label htmlFor={user+"name"}>Enter User Name</label>
            <input type='text' id={user+"name"} placeholder="enter name" />
            <label htmlFor={user+"password"}>Enter User Password</label>
            <input type='text' id={user+"password"} placeholder="enter password" />
            <label htmlFor={user+"skills"}>Enter User Skills</label>
            <input type='text' id={user+"skills"} placeholder="enter skills" />
           </form>
        </div>
    )
}
export default App; 