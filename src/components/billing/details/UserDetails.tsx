import React, { FunctionComponent, ChangeEvent } from 'react'
import {
  UserInfo,
  StoreAction
} from '@component_types/billingTypes'
import {
  UPDATE_BILLING_KEY
} from '../store/actions'
import FormInput from '../../common/FormInput'

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
    <div className='w-1/4'>
      <div>
        <h4>{name}</h4>
      </div>
      <div className='flex flex-col'>
        <FormInput type='text' name='firstName' placeholder='First Name' value={firstName} onChange={onChange} error={errors.firstName} />
        <FormInput type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={onChange} error={errors.lastName} />
        <FormInput type='text' name='address1' placeholder='Address 1' value={address1} onChange={onChange} error={errors.address1} />
        <FormInput type='text' name='address2' placeholder='Address 2' value={address2} onChange={onChange} />
        <FormInput type='text' name='city' placeholder='City' value={city} onChange={onChange} error={errors.city} />
        <FormInput type='text' name='state' placeholder='State' value={state} onChange={onChange} error={errors.state} />
        <FormInput type='text' name='country' placeholder='Country' value={country} onChange={onChange} error={errors.country} />
        <FormInput type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={onChange} error={errors.zipCode} />
        <FormInput type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} error={errors.phone} />
      </div>
    </div>
  );
};

export default UserDetails