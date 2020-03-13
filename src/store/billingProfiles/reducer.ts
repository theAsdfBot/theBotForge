import { BillingProfileActionTypes, BillingProfileState, FETCH_PROFILES, UPDATE_PROFILE, CREATE_PROFILE, DELETE_PROFILE, CHANGE_PROFILE } from './types'

const initialState: BillingProfileState = {
  billingProfiles: [],
  currentId: ''
}

const billingProfilesReducer = (state = initialState, action: BillingProfileActionTypes): BillingProfileState => {
  switch (action.type) {
    case FETCH_PROFILES:
      return {
        currentId: action.payload.length > 0 ? action.payload[0].id : '',
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
        currentId: action.payload.id, // it'll default to the newly created profile
        billingProfiles: [action.payload, ...state.billingProfiles]
      }
    case DELETE_PROFILE:
      const filteredBillingProfiles = state.billingProfiles.filter(profiles => profiles.id !== action.id)
      return {
        currentId: filteredBillingProfiles.length > 0 ? filteredBillingProfiles[filteredBillingProfiles.length - 1].id : '',
        billingProfiles: filteredBillingProfiles
      }
    case CHANGE_PROFILE:
      return {
        ...state,
        currentId: action.newId
      }
    default:
      return state
  }
}

export default billingProfilesReducer