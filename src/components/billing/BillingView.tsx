import React, { FunctionComponent, useReducer, useState } from 'react'

import {
  UserInfo,
  PaymentInfo,
} from '@component_types/billingTypes'
import BillingDetails from './details/BillingDetails'
import ShippingDetails from './details/ShippingDetails'
import PaymentDetails from './details/PaymentDetails'

const initialUserInfo: UserInfo = {
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

const userStateReducer = (state: UserInfo = initialUserInfo, data: Partial<UserInfo>): UserInfo => {
  return { ...state, ...data }
}

const initialPaymentInfo: PaymentInfo = {
  nameOnCard: '',
  cardNumber: '',
  expirationMonth: '',
  expirationYear: '',
  securityCode: '',
  email: '',
  profileName: ''
}

const paymentStateReducer = (state: PaymentInfo = initialPaymentInfo, data: Partial<PaymentInfo>): PaymentInfo => {
  return { ...state, ...data }
}

const BillingView: FunctionComponent = () => {
  const [billingState, setBillingState] = useReducer(userStateReducer, initialUserInfo)
  const [shippingState, setShippingState] = useReducer(userStateReducer, initialUserInfo)
  const [paymentState, setPaymentState] = useReducer(paymentStateReducer, initialPaymentInfo)
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false)

  function toggleBillingMatchShipping() {
    const previousValue = billingSameAsShipping
    if (previousValue) {
      setShippingState(initialUserInfo)
      setBillingSameAsShipping(false)
    } else {
      setShippingState({ ...billingState })
      setBillingSameAsShipping(true)
    }
  }

  return (
    <div>
      <BillingDetails billingDetails={billingState} setState={setBillingState} />
      <ShippingDetails shippingDetails={shippingState} setState={setShippingState} billingSameAsShipping={billingSameAsShipping} />
      <PaymentDetails paymentDetails={paymentState} setState={setPaymentState} />
      <input type='checkbox' name='shipToBilling' checked={billingSameAsShipping} onChange={toggleBillingMatchShipping} />
      <label>Ship to Billing</label>
    </div>
  )
}

export default BillingView
