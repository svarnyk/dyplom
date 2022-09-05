import { configureStore } from "@reduxjs/toolkit"
import modalSlice from "./modalSlice"
import headerSlice from "./headerSlice"
import userSlice from "./userSlice";
import videosSlice from "./videosSlice";
import usersSlice from "./usersSlice";
import authUserSlice from "./authUserSlice";
import regUserSlice from "./regUserSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    header: headerSlice,
    user: userSlice,
    users: usersSlice,
    videos: videosSlice,
    authUser: authUserSlice,
    regUser: regUserSlice,
  },
})
