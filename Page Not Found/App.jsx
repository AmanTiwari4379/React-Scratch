import { Route, Routes, Link } from "react-router";
import Login from "./Login";
import Home from "./Home";
import Pagenotfound from "./Pagenotfound";

function App(){
    return(
        <div>
            <div style={{fontSize:'20px'}}>
                <Link style={{textDecoration:'none'}} to='/'>Home</Link> 
                <Link style={{textDecoration:'none',padding:'10px'}} to='/login'>Login</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/*' element={<Pagenotfound />} />
            </Routes>
        </div>
    )
}
export default App;