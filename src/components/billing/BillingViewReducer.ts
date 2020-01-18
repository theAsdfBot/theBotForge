import {
  UserInfo,
  PaymentInfo,
  BillingState,
  BillingActionType,
  UPDATE_BILLING_DETAILS,
  UPDATE_SHIPPING_DETAILS,
  UPDATE_PAYMENT_DETAILS,
  BILLING_SAME_AS_SHIPPING
} from '../types/billingTypes'

export const initialState = {
  billingSameAsShipping: false,
  billingDetails: {
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
  shippingDetails: {
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
  paymentDetails: {
    nameOnCard: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    securityCode: '',
    email: '',
    profileName: ''
  }
}

// Action Creators
export const updateBillingDetails = (payload: UserInfo): BillingActionType => ({
  type: UPDATE_BILLING_DETAILS,
  payload
})

export const updateShippingDetails = (payload: UserInfo): BillingActionType => ({
  type: UPDATE_SHIPPING_DETAILS,
  payload
})

export const updatePaymentDetails = (payload: PaymentInfo): BillingActionType => ({
  type: UPDATE_PAYMENT_DETAILS,
  payload
})

export const toggleBillingSameAsShipping = (): BillingActionType => ({
  type: BILLING_SAME_AS_SHIPPING
})

// Reducer for BillingView
// TODO: figure out the return type for the reducer. using type any now as a crutch
export const billingReducer = (state: BillingState, action: BillingActionType): any => {
  switch (action.type) {
    case UPDATE_BILLING_DETAILS:
      return { ...state, billingDetails: action.payload }
    case UPDATE_SHIPPING_DETAILS:
      return { ...state, shippingDetails: action.payload }
    case UPDATE_PAYMENT_DETAILS:
      return { ...state, paymentDetails: action.payload }
    case BILLING_SAME_AS_SHIPPING:
      const previousValue = state.billingSameAsShipping
      if (previousValue) {
        return {
          ...state, billingSameAsShipping: false, shippingDetails: {
            ...initialState.shippingDetails
          }
        }
      } {
        return { ...state, billingSameAsShipping: true, shippingDetails: { ...state.billingDetails } }
      }
    default:
      return state
  }
}