import { NavLink } from 'react-router'
import { Outlet } from 'react-router'
import { Link } from 'react-router';
function College() {
  return (
    <div className='college' style={{textAlign:'center'}}>
      <h2>College</h2>
      <div>
      <Link to='/'>Go to Home Page</Link>
      </div>
      <NavLink className='link' to="">Student</NavLink>
      <NavLink className='link' to='department'>Department</NavLink>
      <NavLink className='link' to='detail'>College Details</NavLink>
      <Outlet/>
    </div>
  )
}
export default College;