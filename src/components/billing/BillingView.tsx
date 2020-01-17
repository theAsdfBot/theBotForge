import React, { FunctionComponent, useState } from 'react';

import ShippingDetails from './details/ShippingDetails';

const BillingView: FunctionComponent = () => {
  const [billingSameAsShipping, setSameAsBilling] = useState(false);

  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    phone: '',
  });

  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    phone: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    securityCode: '',
    email: '',
    profileName: ''
  });

  return (
    <div>
      <ShippingDetails shippingDetails={shippingDetails} setShippingDetails={setShippingDetails} billingSameAsShipping={billingSameAsShipping} />
    </div>
  );
}

export default BillingView;