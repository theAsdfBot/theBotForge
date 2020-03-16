import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'

import { RootState } from '../index'
import { BillingProfile } from '@typesTS/billingTypes'
import generateBillingProfiles from '../../mockData/billingProfiles'
import {
  createProfile,
  populateProfiles
} from './actions'

export const fetchProfiles = (): ThunkAction<void, RootState, unknown, Action<string>> => { // Action<string> where string is the type of the key:value property of 'type'
  return async dispatch => {
    let payload: BillingProfile[] = []
    let dataStr = localStorage.getItem('billingProfiles')

    if (!dataStr) { // TODO: change way to setup initial data set
      localStorage.setItem('billingProfiles', JSON.stringify(generateBillingProfiles()))
      dataStr = localStorage.getItem('billingProfiles') // decrytion logic goes here
      payload = JSON.parse(dataStr)
    } else if (dataStr) {
      payload = JSON.parse(dataStr)
    }

    if (payload.length === 0) { // if there are no profiles, create one automatically
      dispatch(createProfile())
    } else {
      dispatch(populateProfiles(payload))
    }
  }
}

// Probably don't need anymore. We call the profileAction just to have a temp profile in memory and if user saves it then we call updateBillingProfileThunk
// export const createBillingProfile = (): ThunkAction<void, RootState, unknown, Action<string>> => { 
//   return async dispatch => {
//     // TODO: add new profile to file
//     const newProfile = BillingProfileFactory()
//     dispatch(createProfile(newProfile))
//   }
// }

export const updateBillingProfile = (userProfile: BillingProfile): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch, getState) => {
    const { billingProfiles } = getState()
    const updatedProfiles = billingProfiles.profiles.map((profile: BillingProfile) => {
      if (profile.id === userProfile.id) return userProfile
      return profile
    })
    console.log(updatedProfiles)
    localStorage.setItem('billingProfiles', JSON.stringify(updatedProfiles))  // encrypt here
    dispatch(populateProfiles(updatedProfiles))
  }
}

export const deleteBillingProfile = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch, getState) => {
    // Run file update 
    const { billingProfiles } = getState()
    const filteredProfiles = billingProfiles.profiles.filter((profile: BillingProfile) => {
      return profile.id !== id
    })
    localStorage.setItem('billingProfiles', JSON.stringify(filteredProfiles)) // encrypt here
    dispatch(populateProfiles(filteredProfiles))

    if (billingProfiles.profiles.length === 1) { // the one we deleted prior was the last one
      dispatch(createProfile())
    }
  }
}
