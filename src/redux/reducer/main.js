import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   mode: 'dark',
}

const mainSlice = createSlice({
   name: 'main',
   initialState,
   reducers: {
      changemode: (state, action) => {},
   },
})

export const mainActions = mainSlice.actions
const mainReducer = mainSlice.reducer

export default mainReducer
