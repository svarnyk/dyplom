import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function () {
    const response = await fetch("https://wonderful-app-lmk4d.cloud.serverless.com/user")

    const data = response.json()

    return data
  }
)

const usersSlice = createSlice({
  name: "users",
  initialState: {
    content: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading"
      state.error = null
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "resolved"
      state.content = action.payload
      state.error = null
    },
  },
})

export default usersSlice.reducer
