import React, { FunctionComponent } from 'react'

type BillingProfileActionButtonsProps = {
  saveProfile: () => void
}

const BillingProfileActionButtons: FunctionComponent<BillingProfileActionButtonsProps> = ({ saveProfile }) => {
  return (
    <div>
      <button onClick={saveProfile}>Save Profile</button>
      <button>Delete Profile</button>
      <button>Duplicate Profile</button>
    </div>
  )
}

export default BillingProfileActionButtons