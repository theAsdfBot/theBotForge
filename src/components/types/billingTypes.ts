export const UPDATE_BILLING_DETAILS = 'UPDATE_BILLING_DETAILS'
export const UPDATE_SHIPPING_DETAILS = 'UPDATE_SHIPPING_DETAILS'
export const UPDATE_PAYMENT_DETAILS = 'UPDATE_PAYMENT_DETAILS'

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
  expirationMonth: number,
  expirationYear: number,
  securityCode: number,
  email: string,
  profileName: string
}

export type BillingActionType = UPDATE_BILLING_DETAILS | UPDATE_SHIPPING_DETAILS | UPDATE_PAYMENT_DETAILS