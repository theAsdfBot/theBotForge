import validator from "validator"

export const isRequired = (text: string): string => {
  return text.length >= 1 ? '' : 'This is required!!'
}

export const validatePhone = (text: string): string => {
  return validator.isMobilePhone(text) ? '' : 'That doesn\'t look like a phone number'
}

export const validateCreditCard = (text: string): string => {
  return validator.isCreditCard(text) ? '' : 'You entered an invalid credit card number'
}

export const validateCCSecurityCode = (text: any): string => { // need to be any for type coercion purposes 
  return text.length <= 4 && text.length >= 3 && !isNaN(text * 1) ? '' : 'Your security code doesn\'t look right'
}

export const validateExpMonth = (text: any): string => {
  return text.length <= 2 && text.length > 0 && !isNaN(text * 1) ? '' : 'The month you entered looks invalid'
}

export const validateExpYear = (text: any): string => {
  return text.length === 4 && !isNaN(text * 1) ? '' : 'The expiration year is invalid'
}

export const validateEmail = (text: string): string => {
  return validator.isEmail(text) ? '' : 'Ops! Looks like there\'s something wrong with your email'
}

export type UserProfileValidationType = {
  firstName: Array<(text: string) => string>,
  lastName: Array<(text: string) => string>,
  address1: Array<(text: string) => string>,
  city: Array<(text: string) => string>,
  state: Array<(text: string) => string>,
  country: Array<(text: string) => string>,
  zipCode: Array<(text: string) => string>,
  phone: Array<(text: string) => string>,
}

export type UserInfoKey = keyof UserProfileValidationType

export type PaymentInfoValidationType = {
  nameOnCard: Array<(text: string) => string>,
  cardNumber: Array<(text: string) => string>,
  expirationMonth: Array<(text: string) => string>,
  expirationYear: Array<(text: string) => string>,
  securityCode: Array<(text: string) => string>,
  email: Array<(text: string) => string>,
  profileName: Array<(text: string) => string>
}

export type PaymentInfoKey = keyof PaymentInfoValidationType

export const userInfoValidation: UserProfileValidationType = {
  firstName: [isRequired],
  lastName: [isRequired],
  address1: [isRequired],
  city: [isRequired], // wont need city or state validation if we use select options
  state: [isRequired],
  country: [isRequired],
  zipCode: [isRequired],
  phone: [isRequired, validatePhone]
}

export const paymentInfoValidation: PaymentInfoValidationType = {
  nameOnCard: [isRequired],
  cardNumber: [isRequired, validateCreditCard],
  expirationMonth: [isRequired, validateExpMonth],
  expirationYear: [isRequired, validateExpYear],
  securityCode: [isRequired, validateCCSecurityCode],
  email: [isRequired, validateEmail],
  profileName: [isRequired]
}
