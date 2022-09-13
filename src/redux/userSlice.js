import { createSlice } from '@reduxjs/toolkit'
import { useReducer } from 'react'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      name : "ahad",
      email : "fsiddiqui107@gmail.com"
    },
    reducers: {
      update: (state,action) => {
        state.name = action.payload.name
        state.email = action.payload.email
      },
      decremented: state => {
        
      }
    }
  })
  
  export const { update } = userSlice.actions
  export default userSlice.reducer