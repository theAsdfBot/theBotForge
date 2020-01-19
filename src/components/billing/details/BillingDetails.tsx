import React, { FunctionComponent, ChangeEvent } from 'react'

import { UserInfo } from '../../types/billingTypes'

type BillingDetailsProps = {
  billingDetails: UserInfo,
  setState: React.Dispatch<Partial<UserInfo>>
}

const BillingDetails: FunctionComponent<BillingDetailsProps> = (props) => {
  const { billingDetails, setState } = props
  const { firstName, lastName, address1, address2, city, state, country, zipCode, phone } = billingDetails

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => setState({ [e.target.name]: e.target.value })

  return (
    <div>
      <h4>Billing Details</h4>
      <input type='text' name='firstName' placeholder='First Name' value={firstName} onChange={onChange} />
      <input type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={onChange} />
      <input type='text' name='address1' placeholder='Address 1' value={address1} onChange={onChange} />
      <input type='text' name='address2' placeholder='Address 2' value={address2} onChange={onChange} />
      <input type='text' name='city' placeholder='City' value={city} onChange={onChange} />
      <input type='text' name='state' placeholder='State' value={state} onChange={onChange} />
      <input type='text' name='country' placeholder='Country' value={country} onChange={onChange} />
      <input type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={onChange} />
      <input type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} />
    </div>
  );
};

export default BillingDetails
