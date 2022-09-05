import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    userInform: {}
  },
  reducers: {
    passUserData(state, action) {
      state.userData = action.payload;
    },
    passUserInfo(state, action) {
      state.userInform = action.payload;
    }
  }
});
export const { passUserData, passUserInfo } = authUserSlice.actions;
export default authUserSlice.reducer;