import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import ProfileInstance from './ProfileInstance'
import { RootState } from '../../../store'

const ProfileSelector: FunctionComponent = () => {
  const { billingProfiles, currentIdx } = useSelector((state: RootState) => state.billingProfiles)
  return (
    <div className='w-64 ml-12 mr-8 border border-solid border-gray-400 bg-white'>
      <div className='bg-gray-850 text-center text-xl w-full mb-2'>
        <h4 className='text-white'>Profile List ({billingProfiles.length})</h4>
      </div>
      <div>
        {billingProfiles.map(profile => {
          return <ProfileInstance profileName={profile.payment.profileName} />
        })}
      </div>
    </div>
  )
}

export default ProfileSelector