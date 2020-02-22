import React, { FunctionComponent, useReducer, useState } from 'react'

import ProfileSelector from './profileSelector/ProfileSelector'
import PaymentDetails from './details/PaymentDetails'
import UserDetails from './details/UserDetails'
import {
  initialStore,
  billingProfileReducer,
  inputFieldErrorsReducer
} from './store/reducers'
import {
  SET_SHIPPING_TO_BILLING,
  SET_INPUT_FIELD_ERRORS_BILLING,
  SET_INPUT_FIELD_ERRORS_PAYMENT,
  SET_INPUT_FIELD_ERRORS_SHIPPING,
  CLEAR_INPUT_FIELD_ERRORS_ALL,
  UPDATE_BILLING_KEY,
  UPDATE_SHIPPING_KEY
} from "./store/actions"
import {
  userInfoValidation,
  paymentInfoValidation,
  UserInfoKey,
  PaymentInfoKey
} from './utils'

const BillingView: FunctionComponent = () => {
  const [store, dispatch] = useReducer(billingProfileReducer, initialStore)
  const [inputErrors, dispatchErrors] = useReducer(inputFieldErrorsReducer, initialStore)
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

  function saveProfile() {
    const userInfoValidationKeys = Object.keys(userInfoValidation)
    const paymentInfoValidationKeys = Object.keys(paymentInfoValidation)
    let areThereErrors = false

    // Shipping Details
    if (billingSameAsShipping === false) {
      userInfoValidationKeys.map((key: UserInfoKey) => { // look through every key to get test through all the functions
        const validationFncs = userInfoValidation[key]
        const inputVal = store.shipping[key]
        console.log(key, inputVal)
        let error = ''
        for (const fnc of validationFncs) {
          error = fnc(inputVal)
          // if it fails the is required validation, it break and dont run the rest until there's an input there
          if (error.length > 0) break
        }
        if (error.length > 0) areThereErrors = true
        dispatchErrors({ type: SET_INPUT_FIELD_ERRORS_SHIPPING, key, value: error })
      })
    }

    // Billing Details
    userInfoValidationKeys.map((key: UserInfoKey) => {
      const validationFncs = userInfoValidation[key]
      const inputVal = store.billing[key]
      console.log(key, inputVal)
      let error = ''
      for (const fnc of validationFncs) {
        error = fnc(inputVal)
        if (error.length > 0) break
      }
      if (error.length > 0) areThereErrors = true
      dispatchErrors({ type: SET_INPUT_FIELD_ERRORS_BILLING, key, value: error })
    })

    // Payment Details
    paymentInfoValidationKeys.map((key: PaymentInfoKey) => {
      const validationFncs = paymentInfoValidation[key]
      const inputVal = store.payment[key]
      console.log(key, inputVal)
      let error = ''
      for (const fnc of validationFncs) {
        error = fnc(inputVal)
        if (error.length > 0) break
      }
      if (error.length > 0) areThereErrors = true
      dispatchErrors({ type: SET_INPUT_FIELD_ERRORS_PAYMENT, key, value: error })
    })

    // If there's no errors, save profile
    if (areThereErrors === false) {
      dispatchErrors({ type: CLEAR_INPUT_FIELD_ERRORS_ALL })
      // save profile
    }
  }

  return (
    <div className='mt-8'>
      <div className='flex flex-row'>
        <ProfileSelector />
        <UserDetails name='Billing View' userDetails={store.billing} errors={inputErrors.billing} dispatch={dispatch} onChangeActionType={UPDATE_BILLING_KEY} />
        <UserDetails name='Shipping View' userDetails={store.shipping} errors={inputErrors.shipping} dispatch={dispatch} onChangeActionType={UPDATE_SHIPPING_KEY} billingSameAsShipping={billingSameAsShipping} />
        <div className='w-1/3'>
          <PaymentDetails paymentDetails={store.payment} errors={inputErrors.payment} dispatch={dispatch} />
          <button onClick={saveProfile}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default BillingView
