import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { closeModal } from "../modal";

export const sendRegUserData = createAsyncThunk(
  "regUser/sendRegUserData",
  async function(data, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("https://wonderful-app-lmk4d.cloud.serverless.com/register", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Server error");
      }
      dispatch(closeModal())
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
)
const regUserSlice = createSlice({
  name: "regUser",
  initialState: {
    regStatus: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [sendRegUserData.pending]: (state) =>{
      state.regStatus = "loading"
      state.error = null
    },
    [sendRegUserData.fulfilled]: (state) =>{
      state.regStatus = "resolved"
      state.error = null
    },
    [sendRegUserData.rejected]: (state,action) =>{
      state.regStatus = "rejected"
      state.error = action.payload
    },
  }
});
export default regUserSlice.reducer;
