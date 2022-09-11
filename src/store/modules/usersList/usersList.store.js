import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function (_,{rejectWithValue}) {
    try {
      const response = await fetch("https://wonderful-app-lmk4d.cloud.serverless.com/user", {method: "GET"})
      if (!response.ok) {
        throw new Error("Server error");
      }
      return response.json()
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
)

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
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
      state.usersList = action.payload
      state.error = null
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload
    },
  },
})

export default usersSlice.reducer