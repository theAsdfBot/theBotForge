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
  [index:string]: string
}

export interface UserInfoUpdate {
  firstName?: string,
  lastName?: string,
  address1?: string,
  address2?: string,
  city?: string,
  state?: string,
  country?: string,
  zipCode?: string,
  phone?: string,
  [index:string]: string
}

export interface PaymentInfo {
  nameOnCard: string,
  cardNumber: string,
  expirationMonth: string,
  expirationYear: string,
  securityCode: string,
  email: string,
  profileName: string,
  [index:string]: string
}

export interface PaymentInfoUpdate {
  nameOnCard?: string,
  cardNumber?: string,
  expirationMonth?: string,
  expirationYear?: string,
  securityCode?: string,
  email?: string,
  profileName?: string,
  [index:string]: string
}

// initial state type
export interface BillingState {
  billingSameAsShipping: boolean,
  billingDetails: UserInfo,
  shippingDetails: UserInfo,
  paymentDetails: PaymentInfo
}
