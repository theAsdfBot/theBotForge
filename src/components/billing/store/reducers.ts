import {
  Store,
  StoreAction
} from '@component_types/billingTypes'

import {
  UPDATE_BILLING_KEY,
  UPDATE_PAYMENT_KEY,
  UPDATE_SHIPPING_KEY,
  SET_SHIPPING_TO_BILLING
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

export const reducer = (state: Store = initialStore, payload: StoreAction): Store => {
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
