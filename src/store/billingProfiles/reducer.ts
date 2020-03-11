import { BillingProfileActionTypes, BillingProfileState, FETCH_PROFILES, UPDATE_PROFILE, CREATE_PROFILE, DELETE_PROFILE } from './types'

const initialState: BillingProfileState = {
  billingProfiles: [],
  currentIdx: -1
}

const billingProfilesReducer = (state = initialState, action: BillingProfileActionTypes): BillingProfileState => {
  switch (action.type) {
    case FETCH_PROFILES:
      return {
        currentIdx: 0,
        billingProfiles: action.payload
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        billingProfiles: state.billingProfiles.reduce((newArr, profile) => { // TODO: REFACTOR
          if (profile.id === action.payload.id) {
            newArr.push(action.payload)
          } else {
            newArr.push(profile)
          }
          return newArr
        }, [])
      }
    case CREATE_PROFILE:
      return {
        ...state,
        billingProfiles: [action.payload, ...state.billingProfiles]
      }
    case DELETE_PROFILE:
      return {
        ...state,
        billingProfiles: state.billingProfiles.filter(profiles => profiles.id !== action.id)
      }
    default:
      return state
  }
}

export default billingProfilesReducer