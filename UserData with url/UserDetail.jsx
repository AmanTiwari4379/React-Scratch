import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router';
function UserDetail() {
    const userData = useParams();
  return (
    <div>
      <h2>User Detail Page</h2>
      <h2>User Id is :{userData.id}</h2>
      <h2>User Name is :{userData.name} </h2>
      <Link to='/users'>Back to Users</Link>
    </div>
  )
}

export default UserDetail
