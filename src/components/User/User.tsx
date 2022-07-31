import React, { FC } from 'react'
import { useGetUsersQuery } from '../../services/usersApi'
import UserItem from './UserItem'

const User:FC = () => {
    const {data} = useGetUsersQuery()
  return (
    <div>
        {data?.map(user => (
           <UserItem key={user.id} name={user.name} company={user.company}/>
        ))}
    </div>
  )
}

export default User