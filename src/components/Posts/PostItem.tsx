import React, { FC } from 'react'
import { PostType } from '../../services/postsApi'
import styles from './PostItem.module.scss'

export type PostItemType = {
    id?: number | undefined;
    title: string;
    body: string;
    name?: any;
    companyName?: string;
}

const PostItem:FC<PostItemType> = (post) => {
  return (
    <div className={styles.postItem}>    
    <p>Author:{post.name}</p>
    <p>Company:{post.companyName}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem