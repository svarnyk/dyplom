/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
      isHeaderOpen: false,
    },
    reducers:{
      activeHeader(state) {
        state.isHeaderOpen = true
      }
    }
  }
)

export const {activeHeader} = headerSlice.actions;

export default headerSlice.reducer;