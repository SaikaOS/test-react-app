import React, { FC } from 'react'
import styles from './PostItem.module.scss'

export type PostItemType = {
    id?: number;
    title: string;
    body: string;
    name?: any;
    companyName?: string;
    albumId : number | undefined;
    thumbnailUrl: string;
}

const PostItem:FC<PostItemType> = (post) => {   
  return (
    <div className={styles.postItem}>    
    <div className={styles.userWrapper}>
    <img src={post.thumbnailUrl} alt="" />
    <p>AlbumId:{post.albumId}</p>
    <div className={styles.user}>
    <p>Author:{post.name}</p>
    <p>Company:{post.companyName}</p>
    </div>
    </div>
      <div className={styles.post}>
      <p>Title:{post.title}</p>
      <p>{post.body}</p>
      </div>
    </div>
  )
}

export default PostItem