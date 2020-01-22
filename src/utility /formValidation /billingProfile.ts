import validator from "validator"

export const isRequired = (fieldName: string, text: string): string => {
  return text.length >= 1 ? '' : `Ops! Looks like you didn't enter your ${fieldName}`
}

export const validatePhone = (text: string): string => {
  return validator.isMobilePhone(text) ? '' : 'That doesn\'t look like a phone number'
}

export const validateCreditCard = (text: string): string => {
  return validator.isCreditCard(text) ? '' : 'You entered an invalid credit card number'
}

export const validateCCSecurityCode = (text: any): string => { // need to be any for type coercion purposes 
  return text.length <= 4 && text.length >= 3 && typeof (text * 1) === 'number' ? '' : 'Your security code doesn\'t look right'
}

export const validateExpMonth = (text: any): string => {
  return text.length <= 2 && text.length > 0 && typeof (text * 1) === 'number' ? '' : 'The month you entered looks invalid'
}

export const validateExpYear = (text: any): string => {
  return text.length === 4 && typeof (text * 1) === 'number' ? '' : 'The expiration year is invalid'
}

export const validateEmail = (text: string): string => {
  return validator.isEmail(text) ? '' : 'Ops! Looks like there\'s something wrong with your email'
}

export const userInfoValidation = {
  firstName: [isRequired],
  lastName: [isRequired],
  address1: [isRequired],
  city: [isRequired], // wont need city or state validation if we use select options
  state: [isRequired],
  country: [isRequired],
  zipCode: [isRequired],
  phone: [isRequired, validatePhone]
}

export const paymentInfoValidation = {
  nameOnCard: [isRequired],
  cardNumber: [isRequired, validateCreditCard],
  expirationMonth: [isRequired, validateExpMonth],
  expirationYear: [isRequired, validateExpYear],
  securityCode: [isRequired, validateCCSecurityCode],
  email: [isRequired, validateEmail],
  profileName: [isRequired]
}