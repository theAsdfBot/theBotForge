import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import billingProfilesReducer from './billingProfiles/reducer'

const reducers = combineReducers({
  billingProfiles: billingProfilesReducer
})

export default createStore(reducers, applyMiddleware(thunk, logger))