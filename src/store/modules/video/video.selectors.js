import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.video

export const selectVideo = createSelector(rootSelector, ({videoInfo})=>videoInfo)
