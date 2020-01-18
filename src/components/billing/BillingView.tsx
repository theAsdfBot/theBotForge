import React, { FunctionComponent, useReducer } from 'react'

import { billingReducer, initialState, toggleBillingSameAsShipping } from './BillingViewReducer'
import BillingDetails from './details/BillingDetails'
import ShippingDetails from './details/ShippingDetails'
import PaymentDetails from './details/PaymentDetails'

const BillingView: FunctionComponent = () => {
  const [state, dispatch] = useReducer(billingReducer, initialState)
  const { billingDetails, shippingDetails, paymentDetails, billingSameAsShipping } = state

  const toggleBillingSameAsShippingDetails = (e: any) => dispatch(toggleBillingSameAsShipping())

  return (
    <div>
      <BillingDetails billingDetails={billingDetails} dispatch={dispatch} />
      <ShippingDetails shippingDetails={shippingDetails} dispatch={dispatch} billingSameAsShipping={billingSameAsShipping} />
      <PaymentDetails paymentDetails={paymentDetails} dispatch={dispatch} />
      <input type='checkbox' name='shipToBilling' checked={billingSameAsShipping} onChange={toggleBillingSameAsShippingDetails} />
      <label>Ship to Billing</label>
    </div>
  )
}

export default BillingView