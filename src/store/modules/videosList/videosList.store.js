import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async function (_,{rejectWithValue}) {
    try {
      const response = await fetch("https://wonderful-app-lmk4d.cloud.serverless.com/video", {method: "GET"})
      if (!response.ok) {
        throw new Error("Server error")
      }
      return response.json()
    } catch (error) {
      rejectWithValue(error.message)
    }
  }
)

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videosList: [],
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
      state.videosList = action.payload
      state.error = null
    },
    [fetchVideos.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload
    },
  },
})

export default videosSlice.reducer
