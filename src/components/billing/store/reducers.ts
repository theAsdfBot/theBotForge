import { BillingProfile } from '@typesTS/billingTypes'
import { StoreAction } from './types'
import BillingProfileFactory from '../../../factory/BillingProfile'

import {
  UPDATE_BILLING_KEY,
  UPDATE_PAYMENT_KEY,
  UPDATE_SHIPPING_KEY,
  SET_SHIPPING_TO_BILLING,
  SET_INPUT_FIELD_ERRORS_BILLING,
  SET_INPUT_FIELD_ERRORS_SHIPPING,
  SET_INPUT_FIELD_ERRORS_PAYMENT,
  POPULATE_INPUT_FIELD_ERRORS,
  CLEAR_INPUT_FIELD_ERRORS_BILLING,
  CLEAR_INPUT_FIELD_ERRORS_PAYMENT,
  CLEAR_INPUT_FIELD_ERRORS_SHIPPING,
  CLEAR_INPUT_FIELD_ERRORS_ALL,
  POPULATE_BILLING_PROFILE,
  CLEAR_BILLING_PROFILE
} from './actions'

const emptyBillingProfile = BillingProfileFactory()
export const initialBillingStore: BillingProfile = emptyBillingProfile
export const initialInputErrorStore: Partial<BillingProfile> = emptyBillingProfile

export const billingProfileReducer = (state: BillingProfile = initialBillingStore, payload: any): BillingProfile => { // setting to any so bulk actions can be done
  switch (payload.type) {
    case SET_SHIPPING_TO_BILLING:
      return {
        ...state,
        billingSameAsShipping: !state.billingSameAsShipping,
        shipping: {
          ...initialBillingStore.shipping
        }
      }
    case UPDATE_BILLING_KEY:
      return {
        ...state,
        billing: {
          ...state.billing,
          [payload.key]: payload.value
        }
      }
    case UPDATE_SHIPPING_KEY:
      return {
        ...state,
        shipping: {
          ...state.shipping,
          [payload.key]: payload.value
        }
      }
    case UPDATE_PAYMENT_KEY:
      return {
        ...state,
        payment: {
          ...state.payment,
          [payload.key]: payload.value
        }
      }
    case POPULATE_BILLING_PROFILE:
      return {
        ...payload.value
      }
    case CLEAR_BILLING_PROFILE:
      return initialBillingStore
    default:
      return state
  }
}

export const inputFieldErrorsReducer = (state: Partial<BillingProfile> = initialInputErrorStore, payload: any): Partial<BillingProfile> => {
  switch (payload.type) {
    case SET_INPUT_FIELD_ERRORS_BILLING:
      return {
        ...state,
        billing: {
          ...state.billing,
          [payload.key]: payload.value
        }
      }
    case SET_INPUT_FIELD_ERRORS_SHIPPING:
      return {
        ...state,
        shipping: {
          ...state.shipping,
          [payload.key]: payload.value
        }
      }
    case SET_INPUT_FIELD_ERRORS_PAYMENT:
      return {
        ...state,
        payment: {
          ...state.payment,
          [payload.key]: payload.value
        }
      }
    case CLEAR_INPUT_FIELD_ERRORS_BILLING:
      return {
        ...state,
        billing: {
          ...state.billing,
          [payload.key]: ''
        }
      }
    case CLEAR_INPUT_FIELD_ERRORS_SHIPPING:
      return {
        ...state,
        shipping: {
          ...state.shipping,
          [payload.key]: ''
        }
      }
    case CLEAR_INPUT_FIELD_ERRORS_PAYMENT:
      return {
        ...state,
        payment: {
          ...state.payment,
          [payload.key]: ''
        }
      }
    case CLEAR_INPUT_FIELD_ERRORS_ALL:
      return {
        id: initialInputErrorStore.id,
        billing: {
          ...initialInputErrorStore.billing
        },
        shipping: {
          ...initialInputErrorStore.shipping
        },
        payment: {
          ...initialInputErrorStore.payment
        }
      }
    case POPULATE_INPUT_FIELD_ERRORS:
      return {
        ...payload.value
      }
    default:
      return state
  }
}