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
      <div className='bg-gray-500 text-center text-xl w-2/3 mb-4'>
        <h4 className='text-white'>Payment Details</h4>
      </div>
      <div className='flex flex-col'>
        {/*TODO: ENUM here for card type*/}
        <FormInput type='text' name='cardNumber' placeholder='Credit Card Number' value={cardNumber} onChange={onChange} maxLength={19} error={errors.cardNumber} classes={'my-1'} />
        <div className='my-1 flex justify-center'>
          <FormInput type='text' name='expirationMonth' placeholder='Month' value={expirationMonth} onChange={onChange} error={errors.expirationMonth} maxLength={4} size={5} classes={'flex-grow'} />
          <FormInput type='text' name='expirationYear' placeholder='Year' value={expirationYear} onChange={onChange} error={errors.expirationYear} maxLength={4} size={5} classes={'mx-1 flex-grow'} />
          <FormInput type='text' name='securityCode' placeholder='CVV' value={securityCode} onChange={onChange} error={errors.securityCode} maxLength={4} size={5} classes={'flex-grow'} />
        </div>
        <FormInput type='text' name='nameOnCard' placeholder='Full Name' value={nameOnCard} onChange={onChange} error={errors.nameOnCard} classes={'my-1'} />
        <FormInput type='text' name='email' placeholder='Email' value={email} onChange={onChange} error={errors.email} classes={'my-1'} />
        <FormInput type='text' name='profileName' placeholder='Profile Name' value={profileName} onChange={onChange} error={errors.profileName} classes={'my-1'} />
      </div>
    </div>
  )
}

export default PaymentDetails
