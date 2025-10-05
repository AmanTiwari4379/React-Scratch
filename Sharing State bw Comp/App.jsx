import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import { useState } from "react";

function App(){
    const [user, setUser] = useState('')
    return(
        <div>
            <h2>Lifting State Up / Sharing State Between Components</h2>
            <AddUser setUser={setUser} />
            <DisplayUser user={user} />
        </div>
    )
}
export default App;