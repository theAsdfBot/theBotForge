import React, { FunctionComponent } from 'react'
import {
  PaymentInfo,
  StoreAction
} from '@component_types/billingTypes'
import {
  UPDATE_PAYMENT_KEY
} from '../store/actions'
import FormInput from '../../common/FormInput'

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
      <div>
        <h4>Payment Details</h4>
      </div>
      <div className='flex flex-col'>
        {/*TODO: ENUM here for card type*/}
        <FormInput type='text' name='cardNumber' placeholder='Credit Card Number' value={cardNumber} onChange={onChange} maxLength={4} error={errors.cardNumber} />
        <div>
          <FormInput type='text' name='expirationMonth' placeholder='Month' value={expirationMonth} onChange={onChange} maxLength={4} error={errors.expirationMonth} />
          <FormInput type='text' name='expirationYear' placeholder='Year' value={expirationYear} onChange={onChange} maxLength={4} error={errors.expirationYear} />
          <FormInput type='text' name='securityCode' placeholder='CVV' value={securityCode} onChange={onChange} maxLength={4} error={errors.securityCode} />
        </div>
        <FormInput type='text' name='nameOnCard' placeholder='Full Name' value={nameOnCard} onChange={onChange} error={errors.nameOnCard} />
        <FormInput type='text' name='email' placeholder='email' value={email} onChange={onChange} error={errors.email} />
        <FormInput type='text' name='profileName' placeholder='Profile Name' value={profileName} onChange={onChange} error={errors.profileName} />
      </div>
    </div>
  )
}

export default PaymentDetails
