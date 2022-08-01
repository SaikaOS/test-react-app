import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PhotoType, PostType, UserType } from "../types";

export const fetchPosts = createAsyncThunk<PostType[], number, {rejectValue: string}>(
    'post/fetchPosts',
    async function (limit, {rejectWithValue}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        if(!response.ok) {
            return rejectWithValue("Error!")
        }
        const data = await response.json()
        return data
    }
)

export const fetchUsers = createAsyncThunk<UserType[], undefined, {rejectValue: string}>(
    'post/fetchUsers',
    async function (_, {rejectWithValue}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if(!response.ok) {
            return rejectWithValue("Error!")
        }
        const data = await response.json()
        return data
    }
)

export const fetchPhotos = createAsyncThunk<PhotoType[], undefined, {rejectValue: string}>(
    'post/fetchPhotos',
    async function (_, {rejectWithValue}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
        if(!response.ok) {
            return rejectWithValue("Error!")
        }
        const data = await response.json()
        return data
    }
)

type Posts = {
    posts: PostType[];
    error: string | null;
    loading: boolean;
    users: UserType[];
    photos: PhotoType[];
}

const initialState:Posts = {
   posts: [],
   photos: [],
   users: [],
   error: null,
   loading: false,
}

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
          }),
          builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
          }),
          builder.addCase(fetchPhotos.fulfilled, (state, action) => {
            state.photos = action.payload
          })
    }
})

export default postsSlice.reducer 