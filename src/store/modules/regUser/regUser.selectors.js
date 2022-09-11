import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.regUser

export const selectRegStatus = createSelector(rootSelector, ({regStatus})=>regStatus)
export const selectRegError = createSelector(rootSelector, ({error})=>error)
