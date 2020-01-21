import React, { FunctionComponent, useReducer, useState } from 'react'
import validator from 'validator'
import _clonedeep from 'lodash/clonedeep'

import BillingDetails from './details/BillingDetails'
import ShippingDetails from './details/ShippingDetails'
import PaymentDetails from './details/PaymentDetails'
import ProfileSelection from './ProfileSelection'
import BillingProfileActionButtons from './BillingProfileActionButtons'
import { 
  initialUserInfo,
  initialPaymentInfo,
  initialErrorState,
  userStateReducer,
  paymentStateReducer,
  inputFieldErrorReducer,
  setInputFieldError,
  clearInputFieldError
} from './BillingReducers'
import {
  UserInfo,
  UserInfoErrors,
  PaymentInfoErrors
} from '@component_types/billingTypes'

const BillingView: FunctionComponent = () => {
  const [billingState, setBillingState] = useReducer(userStateReducer, initialUserInfo)
  const [shippingState, setShippingState] = useReducer(userStateReducer, initialUserInfo)
  const [paymentState, setPaymentState] = useReducer(paymentStateReducer, initialPaymentInfo)
  const [errorState, setErrors] = useReducer(inputFieldErrorReducer, initialErrorState)
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false)

  function toggleBillingMatchShipping() {
    const previousValue = billingSameAsShipping
    if (previousValue) {
      setShippingState(initialUserInfo)
      setBillingSameAsShipping(false)
    } else {
      setShippingState({ ...billingState })
      setBillingSameAsShipping(true)
    }
  }

  function saveProfile(){
    const errorsInstance = _clonedeep(initialErrorState)
    let errors = false
    if(billingSameAsShipping === false) errors = errors || validateUserDetails(shippingState, errorsInstance.shippingDetails)
    errors = errors || validateUserDetails(billingState, errorsInstance.billingDetails)
    errors = errors || validatePaymentDetails(errorsInstance.paymentDetails)
    if(errors){
      console.log(errorsInstance)
      setErrors(setInputFieldError(errorsInstance))
    } else {
      setErrors(clearInputFieldError())
      console.log('Adding Billing Profile')
    }
  }

  function validateUserDetails(userInfoState: UserInfo, userInfoError: UserInfoErrors): boolean{
    const { firstName, lastName, address1, city, state, country, zipCode, phone } = userInfoState
    let errors = false
    if(firstName.length < 1 && typeof firstName !== 'string'){ // making sure theres a name
      errors = errors || true
      userInfoError.firstName = true
    }
    if(lastName.length < 1 && typeof lastName !== 'string'){
      errors = errors || true
      userInfoError.lastName = true
    }
    if(address1.length < 10 && typeof address1 !== 'string'){
      errors = errors || true
      userInfoError.address1 = address1
    } 
    if(city.length < 1 && typeof address1 !== 'string'){
      errors = errors || true
      userInfoError.city = true
    }
    if(country === 'US' && state.length < 1){
      errors = errors || true
      userInfoError.state = true
    }
    if(country.length < 1){
      errors = errors || true
      userInfoError.country = true
    }
    if(zipCode.length > 5 || zipCode.length < 1){
      errors = errors || true
      userInfoError.zipCode = true
    }
    if(validator.isMobilePhone(phone)){
      errors = errors || true
      userInfoError.phone = true
    }
    return errors
  } 

  function validatePaymentDetails(paymentErrors: PaymentInfoErrors){
    const { nameOnCard, cardNumber, expirationMonth, expirationYear, securityCode, email, profileName } = paymentState
    let errors = false 
    if(nameOnCard.length < 1){
      errors = errors || true
      paymentErrors.nameOnCard = nameOnCard.length < 1 // what's the optimal length here boys?
    }
    if(!validator.isCreditCard(cardNumber)){
      errors = errors || true
      paymentErrors.cardNumber = true
    }
    // will be using multiselect menu to handle months & years
    paymentErrors.expirationMonth = false
    paymentErrors.expirationYear = false
    if(!(securityCode.length <= 3 && securityCode.length >= 1 && typeof +securityCode === 'number')){
      errors = errors || true
      paymentErrors.securityCode = true
    }
    if(!validator.isEmail(email)){
      errors = errors || true
      paymentErrors.email = true
    }
    if(!(profileName.length >= 1)){
      errors = errors || true
      paymentErrors.profileName 
    }
    return errors
  }

  return (
    <div>
      <BillingDetails billingDetails={billingState} setState={setBillingState} />
      <ShippingDetails shippingDetails={shippingState} setState={setShippingState} billingSameAsShipping={billingSameAsShipping} />
      <PaymentDetails paymentDetails={paymentState} setState={setPaymentState} />
      <input type='checkbox' name='shipToBilling' checked={billingSameAsShipping} onChange={toggleBillingMatchShipping} />
      <label>Ship to Billing</label>
      <ProfileSelection />
      <BillingProfileActionButtons saveProfile={saveProfile} />
    </div>
  )
}

export default BillingView
