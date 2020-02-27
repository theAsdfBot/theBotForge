import React, { FunctionComponent, useReducer, useState } from 'react'

import ProfileSelector from './profileSelector/ProfileSelector'
import PaymentDetails from './details/PaymentDetails'
import UserDetails from './details/UserDetails'
import AppButton from '../common/AppButton'
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
      <div className='flex'>
        <ProfileSelector />
        <UserDetails name='Billing View' userDetails={store.billing} errors={inputErrors.billing} dispatch={dispatch} onChangeActionType={UPDATE_BILLING_KEY} />
        <UserDetails name='Shipping View' userDetails={store.shipping} errors={inputErrors.shipping} dispatch={dispatch} onChangeActionType={UPDATE_SHIPPING_KEY} billingSameAsShipping={billingSameAsShipping} />
        <div className='w-80 mx-6'>
          <PaymentDetails paymentDetails={store.payment} errors={inputErrors.payment} dispatch={dispatch} />
          <div className='flex justify-center mt-6'>
            <AppButton onClick={saveProfile} btnName='Save' classes='btn-gray mr-8 w-20' />
            <AppButton onClick={() => console.log('Delete the currrent profile')} btnName='Delete' classes='btn-gray w-20' />
          </div>
          <div className='flex justify-center mt-4'>
            <AppButton onClick={() => console.log('Reset/Clear profile button goes here')} btnName='Reset' classes='btn-gray mx-0 my-auto w-20' />
          </div>
        </div>
      </div>
      <div className='mt-12 flex justify-center'>
        <AppButton onClick={() => console.log('import profiles')} btnName='Import' classes='btn-gray mr-8 w-20' />
        <AppButton onClick={() => console.log('export profiles')} btnName='Export' classes='btn-gray w-20' />
      </div>
    </div>
  )
}

export default BillingView
