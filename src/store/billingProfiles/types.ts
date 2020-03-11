import { BillingProfile } from '@typesTS/component/billingTypes'

// action types
export const FETCH_PROFILES = 'FETCH_PROFILES'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const CREATE_PROFILE = 'CREATE_PROFILE'
export const DELETE_PROFILE = 'DELETE_PROFILE'

interface FetchBillingProfileActionTypes {
  type: typeof FETCH_PROFILES,
  payload: BillingProfile[]
}

interface UpdateProfileActionType { // signature for both updateProfile & createProfile
  type: typeof UPDATE_PROFILE | typeof CREATE_PROFILE,
  payload: BillingProfile
}

interface DeleteProfileActionType {
  type: typeof DELETE_PROFILE,
  id: string
}

export type BillingProfileActionTypes = FetchBillingProfileActionTypes | UpdateProfileActionType | DeleteProfileActionType

export type BillingProfileState = {
  billingProfiles: BillingProfile[],
  currentIdx: number
}