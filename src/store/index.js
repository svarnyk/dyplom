import { configureStore } from "@reduxjs/toolkit"
import modalSlice from "./modules/modal/modal.store"
import headerSlice from "./modules/header/header.store"
import userSlice from "./modules/user/user.store";
import videosSlice from "./modules/videosList/videosList.store";
import usersSlice from "./modules/usersList/usersList.store";
import authUserSlice from "./modules/authUser/authUser.store";
import regUserSlice from "./modules/regUser/regUser.store";
import videoSlice from "./videoSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    header: headerSlice,
    user: userSlice,
    users: usersSlice,
    videos: videosSlice,
    authUser: authUserSlice,
    regUser: regUserSlice,
    video: videoSlice,
  },
})
