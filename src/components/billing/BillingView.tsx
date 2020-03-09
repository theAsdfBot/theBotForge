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
  CLEAR_INPUT_FIELD_ERRORS_ALL,
  CLEAR_BILLING_PROFILE,
  UPDATE_BILLING_KEY,
  UPDATE_SHIPPING_KEY,
  POPULATE_INPUT_FIELD_ERRORS
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
  console.log(billingSameAsShipping)

  function saveProfile() {
    const userInfoValidationKeys = Object.keys(userInfoValidation)
    const paymentInfoValidationKeys = Object.keys(paymentInfoValidation)
    let areThereErrors = false
    const errorObj = {
      billing: { ...initialStore.billing },
      shipping: { ...initialStore.shipping },
      payment: { ...initialStore.payment }
    }

    // Shipping Profile
    if (billingSameAsShipping === false) {
      userInfoValidationKeys.map((key: UserInfoKey) => {
        const validationFncs = userInfoValidation[key]
        const inputVal = store.shipping[key]
        console.log(key, inputVal)
        let error = ''
        for (const fnc of validationFncs) {
          error = fnc(inputVal)
          // if it fails the is required validation, it break and dont run the rest until there's an input there
          if (error.length > 0) break
        }
        if (error.length > 0) {
          errorObj.shipping[key] = error
          areThereErrors = true
        }
      })
    }

    // Billing Profile
    userInfoValidationKeys.map((key: UserInfoKey) => {
      const validationFncs = userInfoValidation[key]
      const inputVal = store.billing[key]
      console.log(key, inputVal)
      let error = ''
      for (const fnc of validationFncs) {
        error = fnc(inputVal)
        if (error.length > 0) break
      }
      if (error.length > 0) {
        errorObj.billing[key] = error
        areThereErrors = true
      }
    })

    paymentInfoValidationKeys.map((key: PaymentInfoKey) => {
      const validationFncs = paymentInfoValidation[key]
      const inputVal = store.payment[key]
      console.log(key, inputVal)
      let error = ''
      for (const fnc of validationFncs) {
        error = fnc(inputVal)
        if (error.length > 0) break
      }
      if (error.length > 0) {
        errorObj.payment[key] = error
        areThereErrors = true
      }
    })
    console.log(errorObj)
    console.log(areThereErrors)
    // If there's no errors, save profile
    if (areThereErrors === false) {
      dispatchErrors({ type: CLEAR_INPUT_FIELD_ERRORS_ALL })
      // save profile
    } else {
      dispatchErrors({ type: POPULATE_INPUT_FIELD_ERRORS, value: errorObj })
    }
  }

  const resetProfile = () => {
    dispatch({ type: CLEAR_BILLING_PROFILE })
    dispatchErrors({ type: CLEAR_INPUT_FIELD_ERRORS_ALL })
  }

  return (
    <div className='mt-8'>
      <div className='flex'>
        <ProfileSelector />
        <UserDetails name='Billing View' userDetails={store.billing} errors={inputErrors.billing} dispatch={dispatch} onChangeActionType={UPDATE_BILLING_KEY} />
        <div>
          <UserDetails name='Shipping View' userDetails={store.shipping} errors={inputErrors.shipping} dispatch={dispatch} onChangeActionType={UPDATE_SHIPPING_KEY} billingSameAsShipping={billingSameAsShipping} />
          <div>
            <input className='ml-8 mr-1' type='checkbox' name='Same as Billing Address' onChange={toggleBillingMatchShipping} />
            <label className='text-white'>Same as Billing Address</label>
          </div>
        </div>
        <div className='w-80 mx-6'>
          <PaymentDetails paymentDetails={store.payment} errors={inputErrors.payment} dispatch={dispatch} />
          <div className='flex justify-center mt-6'>
            <AppButton onClick={saveProfile} btnName='Save' classes='btn-gray mr-8 w-20' />
            <AppButton onClick={() => console.log('Delete the currrent profile')} btnName='Delete' classes='btn-gray w-20' />
          </div>
          <div className='flex justify-center mt-4'>
            <AppButton onClick={resetProfile} btnName='Reset' classes='btn-gray mx-0 my-auto w-20' />
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
