/* eslint no-param-reassign: "error" */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { closeModal } from "../modal"

export const sendAuthUserData = createAsyncThunk(
  "authUser/sendAuthUserData",
  async function (data, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        "https://wonderful-app-lmk4d.cloud.serverless.com/auth",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      if (!response.ok) {
        const answer = await response.json()
        throw new Error(answer.message)
      }

      const answer = await response.json()
      dispatch(closeModal())
      return answer
    } catch (error) {
      console.log(error.message)
      return rejectWithValue(error.message)
    }
  }
)

const authUserSlice = createSlice({
  name: "authUser",
  initialState: {
    userInform: {},
    userToken: null,
    isAuthorised: false,
    authStatus: null,
    error: null,
    remindPassword: false,
    spinnerState: false,
  },
  reducers: {
    passUserInfo(state, action) {
      state.userInform = action.payload
    },
    unAuthorise(state) {
      state.isAuthorised = false
    },
  },
  extraReducers: {
    [sendAuthUserData.pending]: (state) => {
      state.authStatus = "loading"
      state.isAuthorised = false
      state.error = null
      state.remindPassword = false
      state.spinnerState = true
    },
    [sendAuthUserData.fulfilled]: (state, action) => {
      state.authStatus = "resolved"
      state.userInform = action.payload
      state.userToken = action.payload.authToken
      state.isAuthorised = true
      state.error = null
      state.remindPassword = false
      state.spinnerState = false
    },
    [sendAuthUserData.rejected]: (state, action) => {
      state.authStatus = "rejected"
      state.error = action.payload
      state.isAuthorised = false
      state.remindPassword = true
      state.spinnerState = false
    },
  },
})
export const { passUserData, passUserInfo, passUserToken } =
  authUserSlice.actions
export default authUserSlice.reducer
