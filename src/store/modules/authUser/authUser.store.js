import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { closeModal } from "../modal";

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
      console.log(answer.authToken);
      dispatch(passUserInfo(answer))
      dispatch(passUserToken(answer.authToken))
      dispatch(closeModal())
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
    userToken: null,
    isAuthorised: false,
    authStatus: null,
    error: null,
    remindPassword: false,
    spinnerState: false,
  },
  reducers: {
    passUserData(state, action) {
      state.userData = action.payload;
    },
    passUserInfo(state, action) {
      state.userInform = action.payload;
    },
    passUserToken(state, action) {
      state.userToken = action.payload;
    },
  },
  extraReducers: {
    [sendAuthUserData.pending]: (state) =>{
      state.authStatus = "loading"
      state.isAuthorised = false
      state.error = null
      state.remindPassword = false
      state.spinnerState = true
    },
    [sendAuthUserData.fulfilled]: (state) =>{
      state.authStatus = "resolved"
      state.isAuthorised = true
      state.error = null
      state.remindPassword = false
      state.spinnerState = false
    },
    [sendAuthUserData.rejected]: (state,action) =>{
      state.authStatus = "rejected"
      state.error = action.payload
      state.isAuthorised = false
      state.remindPassword = true
      state.spinnerState = false
    },
  }
});
export const { passUserData, passUserInfo, passUserToken } = authUserSlice.actions;
export default authUserSlice.reducer;
