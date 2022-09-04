import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async function () {
    const response = await fetch("https://wonderful-app-lmk4d.cloud.serverless.com/video")

    const data = response.json()

    return data
  }
)

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    content: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchVideos.pending]: (state) => {
      state.status = "loading"
      state.error = null
    },
    [fetchVideos.fulfilled]: (state, action) => {
      state.status = "resolved"
      state.content = action.payload
      state.error = null
    },
  },
})

export default videosSlice.reducer
