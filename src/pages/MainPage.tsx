import React, { FC } from 'react'
import Header from '../components/Header/Header'
import Posts from '../components/Posts/Posts'
import { useAppSelector } from '../store/store'

const MainPage:FC = () => {
  const signup = useAppSelector(state => state.auth)
  return (
    <div className='App'>
      <Header username={signup.login} isLoggedIn={true}/>
      <Posts/>
    </div>
  )
}

export default MainPage