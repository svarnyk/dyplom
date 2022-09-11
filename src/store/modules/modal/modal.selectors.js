import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.modal

export const selectModalVariant = createSelector(rootSelector, ({modalVariant}) => modalVariant)

export const selectModalStatus = createSelector(rootSelector, ({modalStatus}) => modalStatus)
