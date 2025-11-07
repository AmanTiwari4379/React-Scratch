import React from 'react'
import { Link } from 'react-router'
function UserList() {
    const users=[
        {
            id: 1,
            name: 'Aman'
        },
        {
            id: 2,
            name: 'Amar'
        },
        {
            id: 4,
            name: 'Arjun'
        },
        {
            id: 5,
            name: 'Abhimanyu'
        }
    ]
    return (
    <div>
      <h2>Users List Page</h2>
      {
        users.map((item)=>(
            <div>
                <h4><Link to={'/users/'+item.id+'/'+item.name}>{item.name}</Link></h4>
            </div>
        ))
      }
    </div>
  )
}

export default UserList
