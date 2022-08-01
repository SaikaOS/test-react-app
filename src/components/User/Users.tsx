import React, { FC } from 'react'
import { useAppSelector } from '../../store/store'
import UserItem from './UserItem'

const Users:FC = () => {
    const data = useAppSelector(state => state.posts)
  return (
    <div>
        {data.users.map(user => (
           <UserItem key={user.id} name={user.name} company={user.company}/>
        ))}
    </div>
  )
}

export default Users