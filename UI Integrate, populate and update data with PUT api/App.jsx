import "./App.css";
import { Routes, Route, NavLink } from "react-router";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
export default function App() {
  return (
    <div>
        <ul className="nav-list" >
            <li>
                <NavLink to='/'>List</NavLink>
            </li>
            <li>
                <NavLink to='/add'>Add User</NavLink>
            </li>
        </ul>
      <h2>Makes Routes and Pages for Add User and User List</h2>
      <h2> UI Integrate Post method API</h2>
      <h2>Populate Data in input fields with API</h2>
      <h2>Update Data with PUT API method</h2>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit/>}/>
      </Routes>
    </div>
  );
}
