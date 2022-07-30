import React from 'react'
import { useGetUsersQuery } from '../../services/usersApi'

const User = () => {
    const {data} = useGetUsersQuery()
  return (
    <div>
        {data?.map(user => (
            <div key={user.id}>
                <p>Author: {user.name}</p>
                <p>Company: {user.company.name}</p>
            </div>
        ))}
    </div>
  )
}

export default User