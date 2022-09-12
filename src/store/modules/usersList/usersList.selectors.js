import { createSelector } from "@reduxjs/toolkit"

export const rootSelector = (state) => state.users

export const selectUsers = createSelector(rootSelector, ({usersList}) => usersList)
export const selectLoadUsersStatus = createSelector(rootSelector, ({status}) => status)
export const selectLoadUsersError = createSelector(rootSelector, ({error}) => error)
export const selectUserBySlug =  createSelector(rootSelector, ({usersList}) => usersList.find())


