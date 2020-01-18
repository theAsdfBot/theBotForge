import React, { FunctionComponent } from 'react'

import { PaymentInfo } from '../../types/billingTypes'
import { updatePaymentDetails } from '../BillingViewReducer'

type PaymentDetailsProps = {
  paymentDetails: PaymentInfo,
  dispatch: any // need to change
}

const PaymentDetails: FunctionComponent<PaymentDetailsProps> = (props) => {
  const { paymentDetails, dispatch } = props
  const { nameOnCard, cardNumber, expirationMonth, expirationYear, securityCode, email, profileName } = paymentDetails

  const onChange = (e: any) => dispatch(updatePaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value }))

  return (
    <div>
      <h4>Payment Details</h4>
      <input type='text' name='nameOnCard' placeholder='Full Name' value={nameOnCard} onChange={onChange} />
      <input type='text' name='cardNumber' placeholder='Credit Card Number' value={cardNumber} onChange={onChange} />
      <input type='text' name='expirationMonth' placeholder='Card Expiration Month' value={expirationMonth} onChange={onChange} />
      <input type='text' name='expirationYear' placeholder='Card Expiration Year' value={expirationYear} onChange={onChange} />
      <input type='text' name='securityCode' placeholder='Security Code' value={securityCode} onChange={onChange} />
      <input type='text' name='email' placeholder='email' value={email} onChange={onChange} />
      <input type='text' name='profileName' placeholder='Profile Name' value={profileName} onChange={onChange} />
    </div>
  )
}

export default PaymentDetails