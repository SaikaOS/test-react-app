import React, { FC } from 'react'
import { UserType } from '../../services/usersApi'

const UserItem:FC<UserType> = (user) => {
  return (
    <div key={user.id}>
    <p>Author: {user.name}</p>
    <p>Company: {user.company.name}</p>
</div>
  )
}

export default UserItem