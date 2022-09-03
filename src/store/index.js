import { configureStore } from "@reduxjs/toolkit"
import modalSlice from "./modalSlice"
import headerSlice from "./headerSlice"
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    modal: modalSlice,
    header: headerSlice,
    user: userSlice,
  },
})
