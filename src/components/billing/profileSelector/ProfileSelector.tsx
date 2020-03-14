import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import ProfileInstance from './ProfileInstance'
import { RootState } from '../../../store'

// TODO: Style the scrollbar for when we have more than 10 profiles
const ProfileSelector: FunctionComponent = () => {
  const { profiles, currentId } = useSelector((state: RootState) => state.billingProfiles)
  return (
    <div className='w-64 h-96 border border-solid border-gray-400'>
      <div className='bg-gray-850 text-center text-xl w-full'>
        <h4 className='text-white'>Profile List ({profiles.length})</h4>
      </div>
      <div className='overflow-auto h-88'>
        {profiles.map((profile, idx) => {
          return <ProfileInstance profileName={profile.payment.profileName} key={idx} profileId={profile.id} displayedProfileId={currentId} />
        })}
      </div>
    </div>
  )
}

export default ProfileSelector