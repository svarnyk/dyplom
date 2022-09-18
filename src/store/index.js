import {
  configureStore,
  combineReducers
} from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import modalSlice from "./modules/modal/modal.store"
import userSlice from "./modules/user/user.store"
import videosSlice from "./modules/videosList/videosList.store"
import usersSlice from "./modules/usersList/usersList.store"
import authUserSlice from "./modules/authUser/authUser.store"
import regUserSlice from "./modules/regUser/regUser.store"
import videoSlice from "./modules/video/video.store"

const rootReducer = combineReducers({
  modal: modalSlice,
  user: userSlice,
  users: usersSlice,
  videos: videosSlice,
  authUser: authUserSlice,
  regUser: regUserSlice,
  video: videoSlice,
})

const persistConfig = {
  key: "root",
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

export const persistor = persistStore(store)

export default store


const persistConfig = {
  key: "root",
  storage: storage,
  whitelist:["authUser"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

export const persistor = persistStore(store)

export default store

