export const UPDATE_BILLING_DETAILS = 'UPDATE_BILLING_DETAILS'
export const UPDATE_SHIPPING_DETAILS = 'UPDATE_SHIPPING_DETAILS'
export const UPDATE_PAYMENT_DETAILS = 'UPDATE_PAYMENT_DETAILS'
export const BILLING_SAME_AS_SHIPPING = 'BILLING_SAME_AS_SHIPPING'

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
}

export interface PaymentInfo {
  nameOnCard: string,
  cardNumber: string,
  expirationMonth: string,
  expirationYear: string,
  securityCode: string,
  email: string,
  profileName: string
}

// initial state type
export interface BillingState {
  billingSameAsShipping: boolean,
  billingDetails: UserInfo,
  shippingDetails: UserInfo,
  paymentDetails: PaymentInfo
}

// types for action
export interface UpdateBillingDetailsAction {
  type: typeof UPDATE_BILLING_DETAILS,
  payload: UserInfo
}

export interface UpdateShippingDetailsAction {
  type: typeof UPDATE_SHIPPING_DETAILS,
  payload: UserInfo
}

export interface BillingDetailsSameAsShipping {
  type: typeof BILLING_SAME_AS_SHIPPING,
}

export interface UpdatePaymentDetailsAction {
  type: typeof UPDATE_PAYMENT_DETAILS,
  payload: PaymentInfo
}

export type BillingActionType = UpdateBillingDetailsAction | UpdateShippingDetailsAction | UpdatePaymentDetailsAction | BillingDetailsSameAsShipping