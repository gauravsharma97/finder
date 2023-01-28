import { createSlice } from '@reduxjs/toolkit'
const initialState =[]

export const searchSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    setResult: (state, action) => {
      return action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setResult} = searchSlice.actions

export default searchSlice.reducer