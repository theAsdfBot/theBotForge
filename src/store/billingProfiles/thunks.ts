import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { v4 as uuidv4 } from 'uuid'

import { RootState } from '../index'
import { BillingProfile } from '@typesTS/billingTypes'
import BillingProfileFactory from '../../factory/BillingProfile'
import generateBillingProfiles from '../../mockData/billingProfiles'
import {
  populateProfiles,
  updateProfile,
  createProfile,
  deleteProfile
} from './actions'

export const fetchProfiles = (): ThunkAction<void, RootState, unknown, Action<string>> => { // Action<string> where string is the type of the key:value property of 'type'
  return async dispatch => {
    const payload = generateBillingProfiles()
    if (payload.length === 0) { // if there are no profiles, create one automatically
      dispatch(createBillingProfile())
    } else {
      dispatch(populateProfiles(payload))
    }
  }
}

export const createBillingProfile = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
    // TODO: add new profile to file
    const newProfile = BillingProfileFactory()
    dispatch(createProfile(newProfile))
  }
}

export const updateBillingProfile = (userProfile: BillingProfile): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
    // TODO: update the profiles file
    dispatch(updateProfile(userProfile))
  }
}

export const deleteBillingProfile = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch, getState) => {
    // Run file update 
    dispatch(deleteProfile(id))
    const { billingProfiles } = getState()
    if (billingProfiles.profiles.length === 0) { // if all profiles are gone, create one
      dispatch(createBillingProfile())
    }
  }
}
