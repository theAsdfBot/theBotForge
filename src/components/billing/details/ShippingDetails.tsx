import React, { FunctionComponent, ChangeEvent } from 'react'

import {
  UserInfo,
  StoreAction
} from '@component_types/billingTypes'
import {
  UPDATE_SHIPPING_KEY
} from '../store/actions'

type ShippingDetailsProps = {
  shippingDetails: UserInfo,
  errors: UserInfo,
  billingSameAsShipping: boolean,
  toggleBillingMatchShipping: React.Dispatch<StoreAction>,
  dispatch: React.Dispatch<StoreAction>
}

const ShippingDetails: FunctionComponent<ShippingDetailsProps> = ({ shippingDetails, billingSameAsShipping, toggleBillingMatchShipping, dispatch, errors }) => {
  const { firstName, lastName, address1, address2, city, state, country, zipCode, phone } = shippingDetails

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => dispatch({
    type: UPDATE_SHIPPING_KEY,
    key: e.target.name,
    value: e.target.value
  })

  return (
    <div className='user-info-card'>
      <div className='heading-container'>
        <h4>Shipping Details</h4>
      </div>
      <div className='form-container'>
        <input disabled={billingSameAsShipping} type='text' name='firstName' placeholder='First Name' value={firstName} onChange={onChange} />
        <span>{errors.firstName && !billingSameAsShipping ? errors.firstName : ''}</span>
        <input disabled={billingSameAsShipping} type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={onChange} />
        <span>{errors.lastName && !billingSameAsShipping ? errors.lastName : ''}</span>
        <input disabled={billingSameAsShipping} type='text' name='address1' placeholder='Address 1' value={address1} onChange={onChange} />
        <span>{errors.address1 && !billingSameAsShipping ? errors.address1 : ''}</span>
        <input disabled={billingSameAsShipping} type='text' name='address2' placeholder='Address 2' value={address2} onChange={onChange} />
        <input disabled={billingSameAsShipping} type='text' name='city' placeholder='City' value={city} onChange={onChange} />
        <span>{errors.city && !billingSameAsShipping ? errors.city : ''}</span>
        <input disabled={billingSameAsShipping} type='text' name='state' placeholder='State' value={state} onChange={onChange} />
        <span>{errors.state && !billingSameAsShipping ? errors.state : ''}</span>
        <input disabled={billingSameAsShipping} type='text' name='country' placeholder='Country' value={country} onChange={onChange} />
        <span>{errors.country && !billingSameAsShipping ? errors.country : ''}</span>
        <input disabled={billingSameAsShipping} type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={onChange} />
        <span>{errors.zipCode && !billingSameAsShipping ? errors.zipCode : ''}</span>
        <input disabled={billingSameAsShipping} type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} />
        <span>{errors.phone && !billingSameAsShipping ? errors.phone : ''}</span>
      </div>
      <input type='checkbox' name='shipToBilling' checked={billingSameAsShipping} onChange={toggleBillingMatchShipping} />
      <label>Ship to Billing</label>
    </div>
  );
};

export default ShippingDetails
