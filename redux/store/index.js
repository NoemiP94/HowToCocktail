import { combineReducers } from 'redux'
import cocktailReducer from '../reducers'
import { configureStore } from '@reduxjs/toolkit'

const bigReducer = combineReducers({
  cocktail: cocktailReducer,
})

const store = configureStore({
  reducer: bigReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export default store
