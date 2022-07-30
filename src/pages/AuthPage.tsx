import React, { FC } from 'react'
import Auth from '../components/Auth/Auth'
import Header from '../components/Header/Header'

const AuthPage:FC = () => {
  return (
    <div className='auth-page'>
      <Auth />
    </div>
  )
}

export default AuthPage