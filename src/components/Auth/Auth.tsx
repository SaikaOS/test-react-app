import React, { FC, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogin, setPassword } from '../../store/authSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import styles from './Auth.module.scss'

export const LOGIN = 'Sayan'
export const PASSWORD = '2003'

const Auth:FC = () => {
  const signup = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
     e.preventDefault()
    if(e.key === 'Enter') {
      signup.login !== LOGIN || signup.password !== PASSWORD ? 
      alert('Incorrect login or password. Please try again') :
      navigate('/posts')
    }
 };

  return (
    <form className={styles.form}>
      <p className={styles.form__title}>Autorization</p>
        <div className={styles.auth}>
        <label className={styles.auth__label}>login</label>
        <input 
        type="text" 
        value={signup.login}
        onChange={e => dispatch(setLogin(e.target.value))}
        className={styles.auth__input}
        />
        </div>
        <div className={styles.auth}>
        <label className={styles.auth__label}>password</label>
        <input 
        type="password" 
        value={signup.password}
        onChange={e => dispatch(setPassword(e.target.value))}
        className={styles.auth__input}
        onKeyUp={handleKeyPress}
        />
        </div>
    </form>
  )
}

export default Auth