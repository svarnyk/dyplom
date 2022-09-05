import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { closeModal } from "./modalSlice";
import { activeHeader } from "./headerSlice";

export const sendAuthUserData = createAsyncThunk(
  "authUser/sendAuthUserData",
  async function(data, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch("https://wonderful-app-lmk4d.cloud.serverless.com/auth", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error("Your Password is incorrect. Please, try again");
      }

      const answer = await response.json();
      console.log(answer);
      dispatch(passUserInfo(answer))
      dispatch(closeModal())
      dispatch(activeHeader())
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const authUserSlice = createSlice({
  name: "authUser",
  initialState: {
    userData: {},
    userInform: {},
    authStatus: null,
    error: null,
    remindPassword: false
  },
  reducers: {
    passUserData(state, action) {
      state.userData = action.payload;
    },
    passUserInfo(state, action) {
      state.userInform = action.payload;
    }
  },
  extraReducers: {
    [sendAuthUserData.pending]: (state) =>{
      state.authStatus = "loading"
      state.error = null
      state.remindPassword = false
    },
    [sendAuthUserData.fulfilled]: (state) =>{
      state.authStatus = "resolved"
      state.error = null
      state.remindPassword = false
    },
    [sendAuthUserData.rejected]: (state,action) =>{
      state.authStatus = "rejected"
      state.error = action.payload
      state.remindPassword = true
    },
  }
});
export const { passUserData, passUserInfo } = authUserSlice.actions;
export default authUserSlice.reducer;