import React, { FunctionComponent, useReducer } from 'react'

import ShippingDetails from './details/ShippingDetails'
import { billingReducer, initialState } from './BillingViewReducer'

const BillingView: FunctionComponent = () => {
  const [state, dispatch] = useReducer(billingReducer, initialState)

  return (
    <div>
      {/* <ShippingDetails shippingDetails={shippingDetails} setShippingDetails={setShippingDetails} billingSameAsShipping={billingSameAsShipping} /> */}
    </div>
  )
}

export default BillingView