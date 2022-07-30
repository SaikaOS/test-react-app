import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export type PostType = {
    id?: number;
    title: string;
    body: string;
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/posts'}),
    endpoints: (builder) => ({
        getPosts: builder.query<PostType[], number>({
            query: (limit) => `?_limit=${limit}`
        })
    })
})

export const {useGetPostsQuery} = postsApi