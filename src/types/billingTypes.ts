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

export type BillingProfile = {
  id: string,
  billingSameAsShipping: boolean,
  billing: UserInfo,
  shipping: UserInfo,
  payment: PaymentInfo
  [index: string]: string | boolean | UserInfo | PaymentInfo // assuming that '[index: string]' is defining the type of the index and the following are the possible values of that key (need to look up)
}
