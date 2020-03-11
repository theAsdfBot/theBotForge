import { Action, ActionCreator, Dispatch } from 'redux'
import { BillingProfile } from '@typesTS/component/billingTypes'
import generateBillingProfiles from '../../mockData/billingProfiles'


// action types
const FETCH_PROFILES = 'FETCH_PROFILES'
const SAVE_PROFILES = 'SAVE_PROFILES'

// action creators
const fetchProfiles: ActionCreator<Action> = (payload: BillingProfile[]) => ({
  type: FETCH_PROFILES,
  payload
})

// thunks 

// reducer
type BillingProfileState = {
  billingProfiles: BillingProfile[],
  currentIdx: number
}

const initialState: BillingProfileState = {
  billingProfiles: [],
  currentIdx: -1
}

const billingProfilesReducer = (state = initialState, action: any): BillingProfileState => {
  switch (action.type) {
    case FETCH_PROFILES:
      return action.payload
    case SAVE_PROFILES:
      return action.payload // middleware will save the changes and send back updated profiles
    default:
      return state
  }
}

export default billingProfilesReducer