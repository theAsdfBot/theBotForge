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

export type Store = {
  billing: UserInfo,
  shipping: UserInfo,
  payment: PaymentInfo
}

export interface StoreBaseAction {
  type: string
}

export interface StoreUpdate extends StoreBaseAction {
  key?: string,
  value?: string,
  billingErrors?: UserInfo, // not a fan of this abstraction to handle everything (looks weird)
  shippingErrors?: UserInfo,
  paymentErrors?: PaymentInfo
}

export type StoreAction = StoreUpdate
