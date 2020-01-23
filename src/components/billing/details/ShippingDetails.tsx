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
  dispatch: React.Dispatch<StoreAction>
}

const ShippingDetails: FunctionComponent<ShippingDetailsProps> = ({ shippingDetails, billingSameAsShipping, dispatch, errors }) => {
  const { firstName, lastName, address1, address2, city, state, country, zipCode, phone } = shippingDetails

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => dispatch({
    type: UPDATE_SHIPPING_KEY,
    key: e.target.name,
    value: e.target.value
  })

  return (
    <div>
      <h4>Shipping Details</h4>
      <input disabled={billingSameAsShipping} type='text' name='firstName' placeholder='First Name' value={firstName} onChange={onChange} />
      {errors.firstName && !billingSameAsShipping ? <span>{errors.firstName}</span> : null}
      <input disabled={billingSameAsShipping} type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={onChange} />
      {errors.lastName && !billingSameAsShipping ? <span>{errors.lastName}</span> : null}
      <input disabled={billingSameAsShipping} type='text' name='address1' placeholder='Address 1' value={address1} onChange={onChange} />
      {errors.address1 && !billingSameAsShipping ? <span>{errors.address1}</span> : null}
      <input disabled={billingSameAsShipping} type='text' name='address2' placeholder='Address 2' value={address2} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='city' placeholder='City' value={city} onChange={onChange} />
      {errors.city && !billingSameAsShipping ? <span>{errors.city}</span> : null}
      <input disabled={billingSameAsShipping} type='text' name='state' placeholder='State' value={state} onChange={onChange} />
      {errors.state && !billingSameAsShipping ? <span>{errors.state}</span> : null}
      <input disabled={billingSameAsShipping} type='text' name='country' placeholder='Country' value={country} onChange={onChange} />
      {errors.country && !billingSameAsShipping ? <span>{errors.country}</span> : null}
      <input disabled={billingSameAsShipping} type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={onChange} />
      {errors.zipCode && !billingSameAsShipping ? <span>{errors.zipCode}</span> : null}
      <input disabled={billingSameAsShipping} type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} />
      {errors.phone && !billingSameAsShipping ? <span>{errors.phone}</span> : null}
    </div>
  );
};

export default ShippingDetails
