/* eslint-disable */
import React from "react"
import {configureStore, createSlice} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import PropTypes from "prop-types"
import {action} from "@storybook/addon-actions";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    isHeaderOpen: false,
  },
  reducers: {
    changeHeaderState(state, payload) {
      state.isHeaderOpen = action.payload
    }
  }
})

const modalSlice = createSlice({
    name: "modal",
    initialState: {
      modalVariant: "signUp",
      modalStatus:"hidden",
    },

  }
)

export const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
    modal: modalSlice.reducer,
  },
})

export function Store(props) {
  const {children} = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  /**
   * Content to put inside block.
   * Could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
