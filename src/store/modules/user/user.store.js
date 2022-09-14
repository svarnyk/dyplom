import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      userInform: {}
    },
    reducers:{
      passUserInfo(state, action) {
        state.userInform = action.payload
      }
    }
  }
);

export const {passUserInfo} = userSlice.actions;

export default userSlice.reducer;
