import React, { FunctionComponent, useReducer, useState } from 'react'

import BillingDetails from './details/BillingDetails'
import ShippingDetails from './details/ShippingDetails'
import PaymentDetails from './details/PaymentDetails'
import ProfileSelection from './ProfileSelection'
import BillingProfileActionButtons from './BillingProfileActionButtons'
import { 
  initialUserInfo,
  initialPaymentInfo,
  initialErrorState,
  userStateReducer,
  paymentStateReducer,
  inputFieldErrorReducer
} from './BillingReducers'

const BillingView: FunctionComponent = () => {
  const [billingState, setBillingState] = useReducer(userStateReducer, initialUserInfo)
  const [shippingState, setShippingState] = useReducer(userStateReducer, initialUserInfo)
  const [paymentState, setPaymentState] = useReducer(paymentStateReducer, initialPaymentInfo)
  const [errorState, setErrors] = useReducer(inputFieldErrorReducer, initialErrorState)
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

  function onSubmit(){}

  return (
    <div>
      <BillingDetails billingDetails={billingState} setState={setBillingState} />
      <ShippingDetails shippingDetails={shippingState} setState={setShippingState} billingSameAsShipping={billingSameAsShipping} />
      <PaymentDetails paymentDetails={paymentState} setState={setPaymentState} />
      <input type='checkbox' name='shipToBilling' checked={billingSameAsShipping} onChange={toggleBillingMatchShipping} />
      <label>Ship to Billing</label>
      <ProfileSelection />
      <BillingProfileActionButtons />
    </div>
  )
}

export default BillingView
