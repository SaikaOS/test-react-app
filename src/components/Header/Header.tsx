import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss'

type HeaderType = {
  username?: string | number;
  isLoggedIn: boolean;
}

const Header:FC<HeaderType> = (user: HeaderType) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  return (
    <header className={styles.header}>
        <img src="src\assets\logo.svg" alt="logo" className={styles.header__logo}/>
        <div className={styles.header__block_logged}>
          <p className={styles.header__block_logged__username}>{user.username}</p>
          {user.isLoggedIn && (
            <Link to='/'>
              <img className={styles.header__logout} src="src\assets\logOut.svg" alt="log-out"/>
            </Link>
          )}
        </div>
    </header>
  )
}

export default Header