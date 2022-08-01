import React, { FC, useEffect } from 'react'
import { fetchPhotos } from '../../store/postsSlice';
import { useAppDispatch } from '../../store/store';
import styles from './PostItem.module.scss'

export type PostItemType = {
    id?: number | undefined;
    title: string;
    body: string;
    name?: any;
    companyName?: string;
    albumId : any;
    thumbnailUrl: string;
}

const PostItem:FC<PostItemType> = (post) => { 
  const dispatch = useAppDispatch() 
  useEffect(() => {
    dispatch(fetchPhotos(post.albumId))
  }, [dispatch])
  return (
    <div className={styles.postItem}>    
    <div className={styles.userWrapper}>
    <img src={post.thumbnailUrl} alt=""/>
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