import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.user

export const selectUser = createSelector(rootSelector, ({userInform})=>userInform)
export const selectUserId = createSelector(rootSelector, ({userInform}) => userInform && userInform.id)
export const selectUserName = createSelector(rootSelector, ({userInform}) => userInform && userInform.userName)
export const selectUserSlug = createSelector(rootSelector, ({userInform}) => userInform && userInform.slug)
export const selectUserPic = createSelector(rootSelector, ({userInform}) => userInform && userInform.userPic)
