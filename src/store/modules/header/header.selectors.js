import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.header

export const selectHeaderStatus = createSelector(rootSelector, ({isHeaderOpen})=>isHeaderOpen)
