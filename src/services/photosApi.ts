import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

type PhotoType = {
    id?: number;
    albumid? : number;
    title: string;
    thumbnailUrl: string;
}

export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getPhotos: builder.query<PhotoType[], void>({
            query: () => `/photos`
        })
    })
})

export const {useGetPhotosQuery} = photosApi