import { UserInfo, PaymentInfo } from '../types/billingTypes'

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
export const updateBillingDetails = (payload: UserInfo) => ({})
export const updateShippingDetails = (payload: UserInfo) => ({})
export const updatePaymentDetails = (payload: PaymentInfo) => ({})

// Reducer for BillingView
export const billingReducer = (state: any, action: any) => {  // need to change any typing
  switch (action.type) {
    default:
      return state
  }
}