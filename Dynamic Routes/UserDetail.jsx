import React from 'react'
import { useParams } from 'react-router'

function UserDetail() {
    const userData = useParams();
  return (
    <div>
      <h2>User Detail Page</h2>
      <h2>User id is :{userData.id}</h2>
      <Link to='/users'>Back to Users</Link>
    </div>
  )
}

export default UserDetail
