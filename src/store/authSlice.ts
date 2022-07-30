import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Auth = {
    login: string | number;
    password: string | number;
}

const initialState: Auth = {
    login: '',
    password: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action:PayloadAction<string | number>) => {
            state.login = action.payload
        },
        setPassword: (state, action:PayloadAction<string | number>) => {
            state.password = action.payload
        }
    }
})

export const { setLogin, setPassword } = authSlice.actions

export default authSlice.reducer
