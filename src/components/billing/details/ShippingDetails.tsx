import React, { FunctionComponent } from 'react';

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
  return (
    <div>
      <input disabled={billingSameAsShipping} type='text' name='firstName' placeholder='First Name' value={firstName} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
      <input disabled={billingSameAsShipping} type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
      <input disabled={billingSameAsShipping} type='text' name='address1' placeholder='Address 1' value={address1} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
      <input disabled={billingSameAsShipping} type='text' name='address2' placeholder='Address 2' value={address2} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
      <input disabled={billingSameAsShipping} type='text' name='city' placeholder='City' value={city} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
      <input disabled={billingSameAsShipping} type='text' name='state' placeholder='State' value={state} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
      <input disabled={billingSameAsShipping} type='text' name='country' placeholder='Country' value={country} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
      <input disabled={billingSameAsShipping} type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
      <input disabled={billingSameAsShipping} type='text' name='phone' placeholder='Phone' value={phone} onChange={(e) => setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value })} />
    </div>
  );
};

export default ShippingDetails;