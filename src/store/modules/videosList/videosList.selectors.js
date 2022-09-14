import { createSelector } from "@reduxjs/toolkit"

export const rootSelector = (state) => state.videos

export const selectVideos = createSelector(rootSelector, ({videosList}) => videosList)
export const selectLoadVideosStatus = createSelector(rootSelector, ({status}) => status)
export const selectLoadVideosError = createSelector(rootSelector, ({error}) => error)
export const selectVideosById = (userId) => createSelector(rootSelector, ({videosList}) => videosList.filter((video)=>video.userId===userId))

