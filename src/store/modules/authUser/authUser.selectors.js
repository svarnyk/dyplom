import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.authUser

export const selectAuthUser = createSelector(rootSelector, ({userInform})=>userInform)
export const selectAuthUserName = createSelector(rootSelector, ({userInform})=>userInform && userInform.userName)
export const selectAuthUserId = createSelector(rootSelector, ({userInform})=>userInform && userInform.id)
export const selectAuthUserPic = createSelector(rootSelector, ({userInform})=>userInform && userInform.userPic)
export const selectAuthUserSlug = createSelector(rootSelector, ({userInform})=>userInform && userInform.slug)
export const selectAuthUserToken = createSelector(rootSelector, ({userInform})=>userInform && userInform.authToken)
export const selectAuthStatus = createSelector(rootSelector, ({authStatus})=>authStatus)
export const selectAuthError = createSelector(rootSelector, ({error})=>error)
export const selectRemindPassword = createSelector(rootSelector, ({remindPassword})=>remindPassword)
export const selectSpinnerState = createSelector(rootSelector, ({spinnerState})=>spinnerState)
