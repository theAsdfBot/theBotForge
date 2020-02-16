import React, { FunctionComponent, ChangeEvent } from 'react'
import {
  UserInfo,
  StoreAction
} from '@component_types/billingTypes'
import {
  UPDATE_BILLING_KEY
} from '../store/actions'

type UserDetailsProps = {
  userDetails: UserInfo,
  name: string,
  errors: UserInfo,
  onChangeActionType: string,
  billingSameAsShipping?: boolean, // ? makes billingSameAsShipping an optional prop
  dispatch: React.Dispatch<StoreAction>
}

const UserDetails: FunctionComponent<UserDetailsProps> = ({ userDetails, name, dispatch, errors, billingSameAsShipping, onChangeActionType }) => {
  const { firstName, lastName, address1, address2, city, state, country, zipCode, phone } = userDetails

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => dispatch({
    type: onChangeActionType,
    key: e.target.name,
    value: e.target.value
  })

  return (
    <div>
      <div>
        <h4>{name}</h4>
      </div>
      <div className='flex flex-col'>
        <input type='text' name='firstName' placeholder='First Name' value={firstName} onChange={onChange} />
        <span>{errors.firstName || ''}</span>
        <input type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={onChange} />
        <span>{errors.lastName || ''}</span>
        <input type='text' name='address1' placeholder='Address 1' value={address1} onChange={onChange} />
        <span>{errors.address1 || ''}</span>
        <input type='text' name='address2' placeholder='Address 2' value={address2} onChange={onChange} />
        <input type='text' name='city' placeholder='City' value={city} onChange={onChange} />
        <span>{errors.city || ''}</span>
        <input type='text' name='state' placeholder='State' value={state} onChange={onChange} />
        <span>{errors.state || ''}</span>
        <input type='text' name='country' placeholder='Country' value={country} onChange={onChange} />
        <span>{errors.country || ''}</span>
        <input type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={onChange} />
        <span>{errors.zipCode || ''}</span>
        <input type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} />
        <span>{errors.phone || ''}</span>
      </div>
    </div>
  );
};

export default UserDetails