import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { FETCH_PROFILES, UPDATE_PROFILE, CREATE_PROFILE, DELETE_PROFILE, CHANGE_PROFILE } from './types'
import { BillingProfile } from '@typesTS/billingTypes'
import { RootState } from '../'
import { emitDeleteProfile, emitUpdateProfile } from '../../ipcRenderer/eventEmitters'
import BillingProfileFactory from '../../factory/BillingProfile'

// action creators
export const populateProfiles: ActionCreator<Action> = (payload: BillingProfile[]) => ({
  type: FETCH_PROFILES,
  payload
})

export const updateProfile: ActionCreator<Action> = (payload: BillingProfile) => ({
  type: UPDATE_PROFILE,
  payload
})

export const createProfile: ActionCreator<Action> = () => ({
  type: CREATE_PROFILE,
  payload: BillingProfileFactory()
})

export const deleteProfile: ActionCreator<Action> = (payload: string) => ({
  type: DELETE_PROFILE,
  id: payload
})

export const changeProfile: ActionCreator<Action> = (newId: string) => ({
  type: CHANGE_PROFILE,
  newId
})

// thunks 
export const deleteBillingProfile = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  emitDeleteProfile(id)
  return (dispatch) => { // TODO: add event listener to lsiten for a deleteProfileSuccessEvent and then remove profile front FE? Same for the updateBillingProfile function below (might remove these thunks from billingProfile; doesn't seem to be needed anymore)
    dispatch(deleteProfile(id))
  }
}

export const updateBillingProfile = (payload: BillingProfile): ThunkAction<void, RootState, unknown, Action<string>> => {
  emitUpdateProfile(payload)
  return dispatch => {
    dispatch(updateProfile(payload))
  }
}