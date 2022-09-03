/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      userInform: {
        "id": "someId",
        "slug": "Chester",
        "userPic": "https://faunistics.com/wp-content/uploads/2019/02/1-4-735x628.jpg",
        "userName": "Chester",
        "token": "someToken"
      }
    },
    reducers:{
      getUserInfo(state, action) {
        state.userInform = action.payload
      }
    }
  }
);

export const {getUserInfo} = userSlice.actions;

export default userSlice.reducer;