import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import billingProfilesReducer from './billingProfiles/reducer'
import loadingReducer from './loading/reducer'

const mainReducer = combineReducers({
  billingProfiles: billingProfilesReducer,
  loading: loadingReducer
})

export type RootState = ReturnType<typeof mainReducer> // typing the RootState because thunks requires the state type

export default createStore(mainReducer, applyMiddleware(thunk, logger))