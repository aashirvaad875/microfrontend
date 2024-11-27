// import reducer

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { bucketApi } from '../services/bucket'
import { authApi } from 'host/services/auth'

// import { NODE_ENV } from "src/utils/constants"
// Persist configuration for the modes reducer
// const modesPersistConfig = {
//   key: 'modes',
//   storage,
//   transforms: [encryptTransform],
// }

const rootReducer = combineReducers({
  [bucketApi.reducerPath]: bucketApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  // modes: persistReducer(modesPersistConfig, modeReducer),
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [PERSIST],
      // },
    }).concat(bucketApi.middleware, authApi.middleware),
})

// export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
