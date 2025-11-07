import { Link, Outlet } from "react-router";
import "./header.css";
import { NavLink } from "react-bootstrap";
function Navbar() {
  return (
<div>
      <div className="header">
        <div>
          <Link className="link">
            <h2>Logo</h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <Link className="link" to="/user/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="link" to="/college">
                College
              </Link>
            </li>
            <li>
              <Link className="link" to="/users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}
export default Navbar;
