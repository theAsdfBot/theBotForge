import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import billingProfilesReducer from './billingProfiles/reducer'

const mainReducer = combineReducers({
  billingProfiles: billingProfilesReducer
})

export type RootState = ReturnType<typeof mainReducer> // typing the RootState because thunks requires the state type

export default createStore(mainReducer, applyMiddleware(thunk, logger))