import React, { FC } from 'react'
import { PostType } from '../../services/postsApi'
import styles from './PostItem.module.scss'

const PostItem:FC<PostType> = (post: PostType) => {
  return (
    <div className={styles.postItem}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem