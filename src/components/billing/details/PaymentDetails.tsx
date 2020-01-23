import React, { FunctionComponent } from 'react'
import {
  PaymentInfo,
  StoreAction
} from '@component_types/billingTypes'
import {
  UPDATE_PAYMENT_KEY
} from '../store/actions'

type PaymentDetailsProps = {
  paymentDetails: PaymentInfo,
  errors: PaymentInfo,
  dispatch: React.Dispatch<StoreAction>
}

const PaymentDetails: FunctionComponent<PaymentDetailsProps> = ({ paymentDetails, dispatch, errors }) => {
  const { nameOnCard, cardNumber, expirationMonth, expirationYear, securityCode, email, profileName } = paymentDetails

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => dispatch({
    type: UPDATE_PAYMENT_KEY,
    key: e.target.name,
    value: e.target.value
  })

  return (
    <div>
      <h4>Payment Details</h4>
      <input type='text' name='nameOnCard' placeholder='Full Name' value={nameOnCard} onChange={onChange} />
      { errors.nameOnCard ? <span>{errors.nameOnCard}</span> : '' }
      <input type='text' name='cardNumber' placeholder='Credit Card Number' value={cardNumber} onChange={onChange} />
      { errors.cardNumber ? <span>{errors.cardNumber}</span> : '' }
      <input type='text' name='expirationMonth' placeholder='Card Expiration Month' value={expirationMonth} onChange={onChange} />
      { errors.expirationMonth ? <span>{errors.expirationMonth}</span> : '' }
      <input type='text' name='expirationYear' placeholder='Card Expiration Year' value={expirationYear} onChange={onChange} />
      { errors.expirationYear ? <span>{errors.expirationYear}</span> : '' }
      <input type='text' name='securityCode' placeholder='Security Code' value={securityCode} onChange={onChange} />
      { errors.securityCode ? <span>{errors.securityCode}</span> : '' }
      <input type='text' name='email' placeholder='email' value={email} onChange={onChange} />
      { errors.email ? <span>{errors.email}</span> : '' }
      <input type='text' name='profileName' placeholder='Profile Name' value={profileName} onChange={onChange} />
      { errors.profileName ? <span>{errors.profileName}</span> : '' }
    </div>
  )
}

export default PaymentDetails
