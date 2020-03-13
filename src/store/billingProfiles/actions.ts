import { Action, ActionCreator } from 'redux'
import { FETCH_PROFILES, UPDATE_PROFILE, CREATE_PROFILE, DELETE_PROFILE, CHANGE_PROFILE } from './types'
import { BillingProfile } from '@typesTS/billingTypes'

// action creators
export const populateProfiles: ActionCreator<Action> = (payload: BillingProfile[]) => ({
  type: FETCH_PROFILES,
  payload
})

export const updateProfile: ActionCreator<Action> = (payload: BillingProfile) => ({
  type: UPDATE_PROFILE,
  payload
})

export const createProfile: ActionCreator<Action> = (payload: BillingProfile) => ({
  type: CREATE_PROFILE,
  payload
})

export const deleteProfile: ActionCreator<Action> = (payload: string) => ({
  type: DELETE_PROFILE,
  id: payload
})

export const changeProfile: ActionCreator<Action> = (newId: string) => ({
  type: CHANGE_PROFILE,
  newId
})