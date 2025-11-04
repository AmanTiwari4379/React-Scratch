import { Link, Outlet } from "react-router";
import "./header.css";
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
              <Link className="link" to="/">
                Home
              </Link>
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
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}
export default Navbar;
