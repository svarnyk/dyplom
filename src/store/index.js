import { configureStore } from "@reduxjs/toolkit"
import modalSlice from "./modules/modal/modal.store"
import userSlice from "./modules/user/user.store";
import videosSlice from "./modules/videosList/videosList.store";
import usersSlice from "./modules/usersList/usersList.store";
import authUserSlice from "./modules/authUser/authUser.store";
import regUserSlice from "./modules/regUser/regUser.store";
import videoSlice from "./modules/video/video.store";

export default configureStore({
  reducer: {
    modal: modalSlice,
    user: userSlice,
    users: usersSlice,
    videos: videosSlice,
    authUser: authUserSlice,
    regUser: regUserSlice,
    video: videoSlice,
  },
  // preloadedState: {
  //   user: localStorage.getItem("userLocal")
  //     ? JSON.parse(localStorage.getItem("userLocal"))
  //     : {},
  // },
})
