export interface UserInfo {
  firstName: string,
  lastName: string,
  address1: string,
  address2: string,
  city: string,
  state: string,
  country: string,
  zipCode: string,
  phone: string,
  [index: string]: string
}

export interface PaymentInfo {
  nameOnCard: string,
  cardNumber: string,
  expirationMonth: string,
  expirationYear: string,
  securityCode: string,
  email: string,
  profileName: string,
  [index: string]: string
}

export type UserInfoErrors = {
  firstName: boolean,
  lastName: boolean,
  address1: boolean,
  city: boolean,
  state: boolean,
  country: boolean,
  zipCode: boolean,
  phone: boolean,
}

export type PaymentInfoErrors = {
  nameOnCard: boolean,
  cardNumber: boolean,
  expirationMonth: boolean,
  expirationYear: boolean,
  securityCode: boolean,
  email: boolean,
  profileName: boolean,
}

export interface BillingErrors{
  billingDetails: UserInfoErrors,
  shippingDetails: UserInfoErrors,
  paymentDetails: PaymentInfoErrors
}

export const SET_INPUT_FIELD_ERROR = 'SET_INPUT_FIELD_ERROR'
export const CLEAR_INPUT_FIELD_ERROR = 'CLEAR_INPUT_FIELD_ERROR'

interface SetInputFieldErrorAction {
  type: typeof SET_INPUT_FIELD_ERROR,
  payload: BillingErrors,
}

interface ClearInputFieldErrorAction {
  type: typeof CLEAR_INPUT_FIELD_ERROR
}

export type InputFieldErrorActionTypes = SetInputFieldErrorAction | ClearInputFieldErrorAction