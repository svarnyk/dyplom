import { createSelector } from "@reduxjs/toolkit"

export const rootSelector = (state) => state.users

export const selectUsers = createSelector(rootSelector, ({usersList}) => usersList)
export const selectLoadUsersStatus = createSelector(rootSelector, ({status}) => status)
export const selectLoadUsersError = createSelector(rootSelector, ({error}) => error)
export const selectUserBySlug = (userSlug) =>  createSelector(rootSelector, ({usersList}) => usersList && usersList.find((user)=>user.slug===userSlug))
export const sortUsersByUserName = createSelector(rootSelector, ({sortUsersListByName})=>sortUsersListByName)
// export const sortUsersByUserName = createSelector(rootSelector, ({usersList})=>usersList && usersList.sort((a,b)=>a.userName<b.userName?-1:1))


