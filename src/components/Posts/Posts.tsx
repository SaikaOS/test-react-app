import React, { FC } from 'react'
import { useGetPostsQuery } from '../../services/postsApi'
import PostItem from './PostItem'
import styles from './Posts.module.scss'

const Posts:FC = () => {
  const getRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  getRandomNum(5, 15)
  const {data} = useGetPostsQuery(5)
  return (
    <div className={styles.posts}>
      {data?.map(post => (
        <PostItem key={post.id} title={post.title} body={post.body}/>
      ))}
    </div>
  )
}

export default Posts