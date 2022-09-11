import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: "modal",
    initialState: {
      modalVariant: "signUp",
      modalStatus: "hidden",
      },
    reducers: {
      closeModal(state) {
        state.modalStatus = "hidden"
      },
      openModal(state, action){
        state.modalStatus = "active"
        state.modalVariant = action.payload
      }
    }
  }
)

export const {closeModal, openModal} = modalSlice.actions;

export default modalSlice.reducer;
