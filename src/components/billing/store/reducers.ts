import {
  Store,
  StoreAction
} from '@component_types/billingTypes'

import {
  UPDATE_BILLING_KEY,
  UPDATE_PAYMENT_KEY,
  UPDATE_SHIPPING_KEY,
  SET_SHIPPING_TO_BILLING,
  SET_INPUT_FIELD_ERRORS,
  CLEAR_INPUT_FIELD_ERRORS
} from './actions'

export const initialStore: Store = {
  billing: {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    phone: '',
  },
  shipping: {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    phone: '',
  },
  payment: {
    nameOnCard: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    securityCode: '',
    email: '',
    profileName: '',
  }
}

export const billingProfileReducer = (state: Store = initialStore, payload: StoreAction): Store => {
  switch (payload.type) {
    case SET_SHIPPING_TO_BILLING:
      return {
        ...state,
        shipping: {
          ...state.billing
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
    default:
      return state
  }
}
 
export const inputFieldErrorsReducer = (state: Store = initialStore, payload: StoreAction) => {
  switch(payload.type){
    case SET_INPUT_FIELD_ERRORS:
      return {
        billing: {
          ...payload.billing
        },
        shipping: {
          ...payload.shipping
        }, 
        payment: {
          ...payload.payment
        }
      }
    case CLEAR_INPUT_FIELD_ERRORS:
      return {
        billing: {
          ...initialStore.billing
        },
        shipping: {
          ...initialStore.shipping
        },
        payment: {
          ...initialStore.payment
        }
      }
    default:
        return state
  }
}