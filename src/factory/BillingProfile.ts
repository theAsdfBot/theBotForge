import { BillingProfile } from '@typesTS/billingTypes'

const template = {
  id: '',
  billingSameAsShipping: false,
  billing: {
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
  shipping: {
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
  payment: {
    nameOnCard: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    securityCode: '',
    email: '',
    profileName: '',
  }
}

const BillingProfileFactory = (): BillingProfile => {
  return { // will definitely use lodash's deepCopy later on if we do bring in the library
    ...template,
    billing: {
      ...template.billing
    },
    shipping: {
      ...template.shipping
    },
    payment: {
      ...template.payment
    }
  }
}

export default BillingProfileFactory