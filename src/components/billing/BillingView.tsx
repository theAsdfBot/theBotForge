import React, { FunctionComponent, useReducer, ChangeEvent } from 'react'

import { billingReducer, initialState, toggleBillingSameAsShipping } from './BillingViewReducer'
import BillingDetails from './details/BillingDetails'
import ShippingDetails from './details/ShippingDetails'
import PaymentDetails from './details/PaymentDetails'

const BillingView: FunctionComponent = () => {
  const [billingState, billingDispatch] = useReducer(billingReducer, initialState)
  const { billingDetails, shippingDetails, paymentDetails, billingSameAsShipping } = billingState

  const toggleBillingSameAsShippingDetails = (e: ChangeEvent): void => billingDispatch(toggleBillingSameAsShipping())

  return (
    <div>
      <BillingDetails billingDetails={billingDetails} dispatch={billingDispatch} />
      <ShippingDetails shippingDetails={shippingDetails} dispatch={billingDispatch} billingSameAsShipping={billingSameAsShipping} />
      <PaymentDetails paymentDetails={paymentDetails} dispatch={billingDispatch} />
      <input type='checkbox' name='shipToBilling' checked={billingSameAsShipping} onChange={toggleBillingSameAsShippingDetails} />
      <label>Ship to Billing</label>
    </div>
  )
}

export default BillingView