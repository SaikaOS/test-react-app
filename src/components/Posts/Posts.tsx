import React, { FC, useEffect } from 'react'
import { fetchPosts, fetchUsers } from '../../store/postsSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import PostItem from './PostItem'
import styles from './Posts.module.scss'

const Posts:FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.posts)  

  const userName = state.users.map(user => user.name)  
  const userCompanyName = state.users.map(user => user.company.name)  

  const getRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  useEffect(() => {
  dispatch(fetchPosts(getRandomNum(5, 15)))
  dispatch(fetchUsers())
  }, [dispatch])
  return (
    <div className={styles.posts}>
      {state.posts.map((post, index) => (
          <PostItem key={post.id} body={post.body} title={post.title} 
          name={userName[index]} companyName={userCompanyName[index]}/>
      ))}
    </div>
  )
}

export default Posts