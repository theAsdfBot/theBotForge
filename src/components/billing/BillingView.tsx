import React, { FunctionComponent, useReducer } from 'react'

import { billingReducer, initialState, toggleBillingSameAsShipping } from './BillingViewReducer'
import BillingDetails from './details/BillingDetails'
import ShippingDetails from './details/ShippingDetails'
import PaymentDetails from './details/PaymentDetails'

const BillingView: FunctionComponent = () => {
  const [state, dispatch] = useReducer(billingReducer, initialState)

  const toggleBillingSameAsShippingDetails = (e: any) => dispatch(toggleBillingSameAsShipping())

  return (
    <div>
      <BillingDetails billingDetails={state.billingDetails} dispatch={dispatch} />
      <ShippingDetails shippingDetails={state.shippingDetails} dispatch={dispatch} billingSameAsShipping={state.billingSameAsShipping} />
      <PaymentDetails paymentDetails={state.paymentDetails} dispatch={dispatch} />
      <input type='checkbox' name='shipToBilling' checked={state.billingSameAsShipping} onChange={toggleBillingSameAsShippingDetails} />
      <label>Ship to Billing</label>
    </div>
  )
}

export default BillingView