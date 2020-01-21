import {
  UserInfo,
  PaymentInfo,
  BillingErrors,
  SET_INPUT_FIELD_ERROR, 
  CLEAR_INPUT_FIELD_ERROR,
  InputFieldErrorActionTypes
} from '../../types/componentTypes/billingTypes'

export const initialUserInfo: UserInfo = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
  phone: '',
}

export const userStateReducer = (state: UserInfo = initialUserInfo, data: Partial<UserInfo>): UserInfo => {
  return { ...state, ...data }
}

export const initialPaymentInfo: PaymentInfo = {
  nameOnCard: '',
  cardNumber: '',
  expirationMonth: '',
  expirationYear: '',
  securityCode: '',
  email: '',
  profileName: ''
}

export const paymentStateReducer = (state: PaymentInfo = initialPaymentInfo, data: Partial<PaymentInfo>): PaymentInfo => {
  return { ...state, ...data }
}

// Types & action creators for errors
export const setInputFieldError = (payload: BillingErrors): InputFieldErrorActionTypes => {
  return {
    type: SET_INPUT_FIELD_ERROR,
    payload
  }
}

export const clearInputFieldError = (): InputFieldErrorActionTypes => {
  return {
    type: CLEAR_INPUT_FIELD_ERROR
  }
}

export const initialErrorState = {
  billingDetails: {
    firstName: false,
    lastName: false,
    address1: false,
    city: false,
    state: false,
    country: false,
    zipCode: false,
    phone: false,
  },
  shippingDetails: {
    firstName: false,
    lastName: false,
    address1: false,
    city: false,
    state: false,
    country: false,
    zipCode: false,
    phone: false,
  }, 
  paymentDetails: {
    nameOnCard: false,
    cardNumber: false,
    expirationMonth: false,
    expirationYear: false,
    securityCode: false,
    email: false,
    profileName: false
  }
}

export const inputFieldErrorReducer = (state: BillingErrors = initialErrorState, action: InputFieldErrorActionTypes): BillingErrors => {
  switch(action.type){
    case SET_INPUT_FIELD_ERROR:
      return { ...action.payload }
    case CLEAR_INPUT_FIELD_ERROR:
      return { ...initialErrorState }
    default:
      return state
  }
}

