import React, { FunctionComponent, useReducer, useState } from 'react'
import BillingDetails from './details/BillingDetails'
import ShippingDetails from './details/ShippingDetails'
import PaymentDetails from './details/PaymentDetails'
import {
  initialStore,
  reducer
} from './store/reducers'
import {
  SET_SHIPPING_TO_BILLING
} from "./store/actions";

const BillingView: FunctionComponent = () => {
  const [ store, dispatch ] = useReducer(reducer, initialStore)
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false)

  function toggleBillingMatchShipping() {
    const previousValue = billingSameAsShipping
    if (previousValue) {      
      setBillingSameAsShipping(false)
    } else {
      dispatch({
        type: SET_SHIPPING_TO_BILLING
      })
      setBillingSameAsShipping(true)
    }
  }

  return (
    <div>
      <BillingDetails billingDetails={store.billing} dispatch={dispatch} />
      <ShippingDetails shippingDetails={store.shipping} dispatch={dispatch} billingSameAsShipping={billingSameAsShipping} />
      <PaymentDetails paymentDetails={store.payment} dispatch={dispatch} />
      <input type='checkbox' name='shipToBilling' checked={billingSameAsShipping} onChange={toggleBillingMatchShipping} />
      <label>Ship to Billing</label>
    </div>
  )
}

export default BillingView
