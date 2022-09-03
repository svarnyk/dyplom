/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: "modal",
    initialState: {
      modalVariant: "signUp",
      modalStatus: "hidden",
      },
    reducers: {
      visibleModal(state, payload) {
        state.modalStatus = state.modalStatus.action.payload
        state.modalVariant = state.modalVariant.actions.payload
      },
    }
  }
)

export const {visibleModal} = modalSlice.actions;

export default modalSlice.reducer;
