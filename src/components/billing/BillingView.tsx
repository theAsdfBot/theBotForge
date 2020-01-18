import React, { FunctionComponent, useReducer } from 'react'

import ShippingDetails from './details/ShippingDetails'
import { billingReducer, initialState, toggleBillingSameAsShipping } from './BillingViewReducer'

const BillingView: FunctionComponent = () => {
  const [state, dispatch] = useReducer(billingReducer, initialState)

  const toggleBillingSameAsShippingDetails = (e: any) => dispatch(toggleBillingSameAsShipping())

  return (
    <div>
      <ShippingDetails shippingDetails={state.shippingDetails} dispatch={dispatch} billingSameAsShipping={state.billingSameAsShipping} />
      <input type='checkbox' name='Ship to Billing' checked={state.billingSameAsShipping} onChange={toggleBillingSameAsShippingDetails} />
    </div>
  )
}

export default BillingView