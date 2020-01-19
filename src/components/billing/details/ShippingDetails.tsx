import React, { FunctionComponent } from 'react'

import {
  UserInfo
} from '../../types/billingTypes'

type ShippingDetailsProps = {
  shippingDetails: UserInfo,
  billingSameAsShipping: boolean,
  setState: React.Dispatch<Partial<UserInfo>>
}

const ShippingDetails: FunctionComponent<ShippingDetailsProps> = (props) => {
  const { shippingDetails, billingSameAsShipping, setState } = props
  const { firstName, lastName, address1, address2, city, state, country, zipCode, phone } = shippingDetails

  // not sure what event type is the onChange event so setting it to any for now
  const onChange = (e: any): void => setState({ [e.target.name]: e.target.value })

  return (
    <div>
      <h4>Shipping Details</h4>
      <input disabled={billingSameAsShipping} type='text' name='firstName' placeholder='First Name' value={firstName} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='address1' placeholder='Address 1' value={address1} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='address2' placeholder='Address 2' value={address2} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='city' placeholder='City' value={city} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='state' placeholder='State' value={state} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='country' placeholder='Country' value={country} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={onChange} />
      <input disabled={billingSameAsShipping} type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} />
    </div>
  );
};

export default ShippingDetails
