import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const sendVideoData = createAsyncThunk(
  "video/sendVideoData",
  async function(data, { rejectWithValue, dispatch, getState}) {
    try {
      const response = await fetch("https://wonderful-app-lmk4d.cloud.serverless.com/video", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // "authorization": ,
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Server error");
      }
      // dispatch(closeModal());
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoInfo: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [sendVideoData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [sendVideoData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.videoInfo = action.payload;
      state.error = null;
    },
    [sendVideoData.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    }
  }
});

export default videoSlice.reducer;