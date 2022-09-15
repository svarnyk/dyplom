import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.videos;
export const currentUserSelector = (state) => state.user;

export const selectVideos = createSelector(rootSelector, ({ videosList }) => videosList);
export const selectLoadVideosStatus = createSelector(rootSelector, ({ status }) => status);
export const selectLoadVideosError = createSelector(rootSelector, ({ error }) => error);
export const quantityVideosById = (userId) => createSelector(rootSelector, ({ videosList }) => videosList.filter((video) => video.userId === userId)).length;
export const selectVideosById = createSelector(
  [rootSelector, currentUserSelector],
  (
    { videosList },
    { userInform }
  ) => videosList && videosList.filter((video) => video.userId === userInform.id));
