import College from "./College";
import Navbar from "./NavBar";
import { Routes, Route } from "react-router";
import Student from "./Student";
import Departments from "./Departments";
import CollegeDetails from "./CollegeDetails";
function App(){
    return(
        <>
            {/* <Navbar /> */}
            <Routes>
            <Route element={<Navbar/>}>
            <Route path='/' element={<h2>Home Page</h2>}/>
            <Route path="user">
               <Route path='/user/login' element={<h2>Login Page</h2>}/>
            </Route>
            </Route>
                <Route path='/college' element={<College/>}>
                <Route index element={<Student/>}/>
                <Route path='department' element={<Departments/>}/>
                <Route path='detail' element={<CollegeDetails/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default App;