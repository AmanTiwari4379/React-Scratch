import Prop from "../Prop";
import Prop2 from "../Prop2";

function PropDemo(){
    let userData = {
        name: "Aman Tiwari",
        age: "23",
        email: "taman4379@gmail.com",
    }
    return(
        <div>
            <h1>Props in React Js</h1>
            <Prop myname="Aman Tiwari" myage={23} user={userData}/>
          
            <Prop2 myfavplace="New York" />
        </div>
    )
}
export default PropDemo;