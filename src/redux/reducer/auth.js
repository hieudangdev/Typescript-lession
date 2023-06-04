import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoggedIn: false,
   logging: false,
   currentUser: {},
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      //login
      login: (state, action) => {
         state.logging = true
         state.currentUser = action.payload
      },
      loginSuccess: (state) => {
         state.logging = false
         state.isLoggedIn = true
      },
      loginFailed: (state) => {
         state.logging = false
      },
      // regiser
      registerSuccess: (state, action) => {
         state.logging = false
         console.log(action.payload)
      },
      registerFailed: (state) => {
         state.logging = false
      },
      register: (state) => {
         state.logging = false
      },
      //logout
      logout: (state) => {
         state.logging = false
         state.currentUser = undefined
      },
   },
})

export const authActions = authSlice.actions
const authReducer = authSlice.reducer

// selector

export default authReducer
