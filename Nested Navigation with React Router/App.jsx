import College from "./College";
import Navbar from "./NavBar";
import { Routes, Route } from "react-router";
import Student from "./Student";
import Departments from "./Departments";
import CollegeDetails from "./CollegeDetails";
function App(){
    return(
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<h2>Home</h2>}/>
                <Route path='/login' element={<h2>Login</h2>}/>
                <Route path='/college' element={<College/>}>
                <Route path='student' element={<Student/>}/>
                <Route path='department' element={<Departments/>}/>
                <Route path='detail' element={<CollegeDetails/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default App;