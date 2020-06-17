import React, { FunctionComponent, ChangeEvent } from 'react'
import { UserInfo } from '@typesTS/billingTypes'
import { StoreAction } from '../store/types'
import FormInput from '../../common/FormInput'
import Overlay from '../../common/Overlay'

type UserDetailsProps = {
  userDetails: UserInfo,
  name: string,
  errors: UserInfo,
  onChangeActionType: string,
  billingSameAsShipping?: boolean, // ? makes billingSameAsShipping an optional prop
  editable: boolean,
  dispatch: React.Dispatch<StoreAction>
}

const UserDetails: FunctionComponent<UserDetailsProps> = ({ userDetails, name, dispatch, errors, billingSameAsShipping, editable, onChangeActionType }) => {
  const { firstName, lastName, address1, address2, city, state, country, zipCode, phone } = userDetails

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => dispatch({
    type: onChangeActionType,
    key: e.target.name,
    value: e.target.value
  })

  return (
    <div className='w-80 mx-6'>
      <div className='bg-gray-850 text-center text-xl w-2/3 mb-2'>
        <h4 className='text-white'>{name}</h4>
      </div>
      {billingSameAsShipping || !editable ? <Overlay styles={{ height: '450px' }} classes='w-inherit' /> : null}
      <div className='flex flex-col'>
        <FormInput type='text' name='firstName' placeholder='First Name' value={firstName} onChange={onChange} error={errors.firstName} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
        <FormInput type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={onChange} error={errors.lastName} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
        <FormInput type='text' name='address1' placeholder='Address 1' value={address1} onChange={onChange} error={errors.address1} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
        <FormInput type='text' name='address2' placeholder='Address 2' value={address2} onChange={onChange} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
        <FormInput type='text' name='city' placeholder='City' value={city} onChange={onChange} error={errors.city} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
        <FormInput type='text' name='state' placeholder='State' value={state} onChange={onChange} error={errors.state} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
        <FormInput type='text' name='country' placeholder='Country' value={country} onChange={onChange} error={errors.country} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
        <FormInput type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={onChange} error={errors.zipCode} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
        <FormInput type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} error={errors.phone} classes={'my-1'} disabled={billingSameAsShipping || !editable} />
      </div>
    </div>
  );
};

export default UserDetails