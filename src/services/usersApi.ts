import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export type UserType = {
    id?: number;
    name: string;
    company: CompanyType;
}

type CompanyType = {
    name: string;
}

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getUsers: builder.query<UserType[], void>({
            query: () => '/users'
        })
    })
})

export const {useGetUsersQuery} = usersApi