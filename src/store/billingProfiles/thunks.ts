import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'

import { RootState } from '../index'
import { BillingProfile } from '@typesTS/billingTypes'
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
    dispatch(populateProfiles(payload))
  }
}

export const createBillingProfile = (newProfile: BillingProfile): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
    // TODO: add new profile to file
    // dispatch(createProfile())
  }
}

export const updateBillingProfile = (userProfile: BillingProfile): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
    // TODO: update the profiles file
    // dispatch(updateProfile())
  }
}

export const deleteBillingProfile = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async dispatch => {
    // TODO: 
    // dispatch(deleteProfile())
  }
}
