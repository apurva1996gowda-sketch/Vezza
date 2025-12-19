import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { login: localStorage.getItem('login')=='true' ? true : false, 
        register: localStorage.getItem('register')=='true'? true: false },
    reducers: {
        loggedIn: (state) => {
            state.login = true
        },
        loggedOut: (state) => {
            state.login = false
        },
        registered: (state) => {
            state.register = true
        },
        notregistered: (state) => {
            state.register = false
        }
    }
})
export const { loggedIn, loggedOut, registered, notregistered } = authSlice.actions
export default authSlice.reducer