import React, { FunctionComponent } from 'react'

type ShippingDetailsForm = {
  firstName: string,
  lastName: string,
  address1: string,
  address2: string,
  city: string,
  state: string,
  country: string,
  zipCode: string,
  phone: string,
}

type ShippingDetailsProps = {
  shippingDetails: ShippingDetailsForm,
  billingSameAsShipping: boolean,
  setShippingDetails(details: ShippingDetailsForm): void
}

const ShippingDetails: FunctionComponent<ShippingDetailsProps> = (props) => {
  const { shippingDetails, billingSameAsShipping, setShippingDetails } = props
  const { firstName, lastName, address1, address2, city, state, country, zipCode, phone } = shippingDetails

  // not sure what event type is the onChange event so setting it to any for now
  const updateShippingDetails = (e: any): void => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })

  return (
    <div>
      <input disabled={billingSameAsShipping} type='text' name='firstName' placeholder='First Name' value={firstName} onChange={updateShippingDetails} />
      <input disabled={billingSameAsShipping} type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={updateShippingDetails} />
      <input disabled={billingSameAsShipping} type='text' name='address1' placeholder='Address 1' value={address1} onChange={updateShippingDetails} />
      <input disabled={billingSameAsShipping} type='text' name='address2' placeholder='Address 2' value={address2} onChange={updateShippingDetails} />
      <input disabled={billingSameAsShipping} type='text' name='city' placeholder='City' value={city} onChange={updateShippingDetails} />
      <input disabled={billingSameAsShipping} type='text' name='state' placeholder='State' value={state} onChange={updateShippingDetails} />
      <input disabled={billingSameAsShipping} type='text' name='country' placeholder='Country' value={country} onChange={updateShippingDetails} />
      <input disabled={billingSameAsShipping} type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={updateShippingDetails} />
      <input disabled={billingSameAsShipping} type='text' name='phone' placeholder='Phone' value={phone} onChange={updateShippingDetails} />
    </div>
  );
};

export default ShippingDetails