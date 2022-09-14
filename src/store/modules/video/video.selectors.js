import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.video

export const selectVideo = createSelector(rootSelector, ({videoInfo})=>videoInfo)
export const selectLoadVideoStatus = createSelector(rootSelector, ({status})=>status)
export const selectVideoImageStatus = createSelector(rootSelector, ({videoImageStatus})=>videoImageStatus)