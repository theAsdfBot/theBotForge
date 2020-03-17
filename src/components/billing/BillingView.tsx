import React, { FunctionComponent, useReducer, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProfileSelector from './profileSelector/ProfileSelector'
import PaymentDetails from './details/PaymentDetails'
import UserDetails from './details/UserDetails'
import AppButton from '../common/AppButton'
import {
  initialBillingStore,
  initialInputErrorStore,
  billingProfileReducer,
  inputFieldErrorsReducer
} from './store/reducers'
import {
  SET_SHIPPING_TO_BILLING,
  CLEAR_INPUT_FIELD_ERRORS_ALL,
  CLEAR_BILLING_PROFILE,
  UPDATE_BILLING_KEY,
  UPDATE_SHIPPING_KEY,
  POPULATE_INPUT_FIELD_ERRORS,
  POPULATE_BILLING_PROFILE
} from "./store/actions"
import {
  userInfoValidation,
  paymentInfoValidation,
  UserInfoKey,
  PaymentInfoKey
} from './utils'
import { RootState } from '../../store'
import { updateBillingProfile, deleteBillingProfile } from '../../store/billingProfiles/actions'

const BillingView: FunctionComponent = () => {
  const [store, dispatch] = useReducer(billingProfileReducer, initialBillingStore)
  const [inputErrors, dispatchErrors] = useReducer(inputFieldErrorsReducer, initialInputErrorStore)

  const rootDispatch = useDispatch()

  const currentProfileData = useSelector((state: RootState) => {
    const { billingProfiles } = state
    return {
      profile: billingProfiles.profiles.find(profile => profile.id === billingProfiles.currentId) || store,
      currentId: billingProfiles.currentId
    }
  })

  useEffect(() => {
    dispatch({
      type: POPULATE_BILLING_PROFILE, value: currentProfileData.profile
    })
    dispatchErrors({
      type: CLEAR_INPUT_FIELD_ERRORS_ALL
    })
  }, [currentProfileData.currentId])

  function toggleBillingMatchShipping() {
    dispatch({
      type: SET_SHIPPING_TO_BILLING
    })
  }

  function saveProfile() {
    const userInfoValidationKeys = Object.keys(userInfoValidation)
    const paymentInfoValidationKeys = Object.keys(paymentInfoValidation)
    let areThereErrors = false
    const errorObj = {
      billing: { ...initialInputErrorStore.billing },
      shipping: { ...initialInputErrorStore.shipping },
      payment: { ...initialInputErrorStore.payment }
    }

    // Shipping Profile
    if (store.billingSameAsShipping === false) {
      userInfoValidationKeys.forEach((key: UserInfoKey) => {
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
    userInfoValidationKeys.forEach((key: UserInfoKey) => {
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

    paymentInfoValidationKeys.forEach((key: PaymentInfoKey) => {
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
      rootDispatch(updateBillingProfile(store))
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
        <div className='ml-12 mr-8'>
          <ProfileSelector />
          <div className='mt-4 flex justify-center align-center'>
            <AppButton onClick={() => console.log('allow edit to current profile')} btnName='Edit' classes='btn-gray w-20' />
            <AppButton onClick={() => 'rootDispatch(createBillingProfile()'} btnName='New' classes='btn-gray w-20 ml-6' />
          </div>
        </div>
        <UserDetails name='Billing View' userDetails={store.billing} errors={inputErrors.billing} dispatch={dispatch} onChangeActionType={UPDATE_BILLING_KEY} />
        <div>
          <UserDetails name='Shipping View' userDetails={store.shipping} errors={inputErrors.shipping} dispatch={dispatch} onChangeActionType={UPDATE_SHIPPING_KEY} billingSameAsShipping={store.billingSameAsShipping} />
          <div>
            <input className='ml-8 mr-1' type='checkbox' name='Same as Billing Address' onChange={toggleBillingMatchShipping} />
            <label className='text-white'>Same as Billing Address</label>
          </div>
        </div>
        <div className='w-80 mx-6'>
          <PaymentDetails paymentDetails={store.payment} errors={inputErrors.payment} dispatch={dispatch} />
          <div className='flex justify-center mt-6'>
            <AppButton onClick={saveProfile} btnName='Save' classes='btn-gray mr-8 w-20' />
            <AppButton onClick={() => rootDispatch(deleteBillingProfile(currentProfileData.currentId))} btnName='Delete' classes='btn-gray w-20' />
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
