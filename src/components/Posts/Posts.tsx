import React, { FC, useEffect } from 'react'
import { fetchPhotos, fetchPosts, fetchUsers, getUserId } from '../../store/postsSlice'
import { useAppDispatch, useAppSelector } from '../../store/store'
import PostItem from './PostItem'
import styles from './Posts.module.scss'

const Posts:FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.posts)  

  const userName = state.users.map(user => user.name)  
  const userId = state.users.map(user => user.id)  
  const userCompanyName = state.users.map(user => user.company.name)  
  const photosUrl = state.photos.map(photo => photo.thumbnailUrl)
  
  const getRandomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const idFind = (index:number) => {
    const {payload:id} = dispatch(getUserId(index))
    return id
  }
  
  useEffect(() => {
  dispatch(fetchPosts(getRandomNum(5, 10)))
  dispatch(fetchUsers())
  }, [dispatch])
  return (
    <div className={styles.posts}>
      {state.posts.map((post, index) => (
          <PostItem key={post.id} body={post.body} title={post.title} 
          name={userName[index]} companyName={userCompanyName[index]}
          thumbnailUrl={photosUrl[getRandomNum(1, photosUrl.length)]}
          albumId={userId[index]}
          />
      ))}
    </div>
  )
}

export default Posts