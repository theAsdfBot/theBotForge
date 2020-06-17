import { BillingProfileActionTypes, BillingProfileState, FETCH_PROFILES, UPDATE_PROFILE, CREATE_PROFILE, DELETE_PROFILE, CHANGE_PROFILE } from './types'
import BillingProfileFactory from '../../factory/BillingProfile'

const initialState: BillingProfileState = {
  profiles: [],
  currentId: ''
}

const billingProfilesReducer = (state = initialState, action: BillingProfileActionTypes): BillingProfileState => {
  switch (action.type) {
    case FETCH_PROFILES:
      if (action.payload.length >= 1) {
        return {
          currentId: action.payload[0].id,
          profiles: action.payload
        }
      } else { // if user doesn't have any billing profiles saved, generate an instance of it for them 
        const emptyBillingProfile = BillingProfileFactory()
        return {
          currentId: emptyBillingProfile.id,
          profiles: [emptyBillingProfile]
        }
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.reduce((newArr, profile) => { // TODO: REFACTOR
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
        profiles: [action.payload, ...state.profiles]
      }
    case DELETE_PROFILE:
      const filteredBillingProfiles = state.profiles.filter(profile => profile.id !== action.id) // if deleted profile was the last one, generate an empty for user
      if (filteredBillingProfiles.length === 0) {
        filteredBillingProfiles.push(BillingProfileFactory())
      }
      return {
        currentId: filteredBillingProfiles[0].id,
        profiles: filteredBillingProfiles
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