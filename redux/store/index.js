import { combineReducers } from 'redux'
import cocktailReducer from '../reducers'
import { configureStore } from '@reduxjs/toolkit'

const bigReducer = combineReducers({
  cocktail: cocktailReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
