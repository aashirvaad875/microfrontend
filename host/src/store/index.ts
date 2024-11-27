// import reducer

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from 'src/services/auth'
import { NODE_ENV } from 'src/utils/constants'
import { GlobalStore } from 'redux-micro-frontend'
import authReducer from './slice/auth-slice'

// Persist configuration for the modes reducer
// const modesPersistConfig = {
//   key: 'modes',
//   storage,
//   transforms: [encryptTransform],
// }

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  // modes: persistReducer(modesPersistConfig, modeReducer),
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [PERSIST],
      // },
    }).concat(authApi.middleware),
})

setupListeners(store.dispatch)
// export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Initialize GlobalStore
const globalStore = GlobalStore.Get()
globalStore.RegisterStore('host-store', store)
globalStore.RegisterGlobalActions('host-store', ['loginSuccess', 'Action-2'])
