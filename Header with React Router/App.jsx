import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Login from "./Login";
function App(){
    return(
        <>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            
        </>
    )
}
export default App;