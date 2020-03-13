import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import ProfileInstance from './ProfileInstance'
import { RootState } from '../../../store'

const ProfileSelector: FunctionComponent = () => {
  const { billingProfiles, currentId } = useSelector((state: RootState) => state.billingProfiles) // currentId is the id of the profile we are currently on
  return (
    <div className='w-64 h-96 border border-solid border-gray-400'>
      <div className='bg-gray-850 text-center text-xl w-full'>
        <h4 className='text-white'>Profile List ({billingProfiles.length})</h4>
      </div>
      <div className='overflow-auto h-88'>
        {billingProfiles.map((profile, idx) => {
          return <ProfileInstance profileName={profile.payment.profileName} key={idx} profileId={profile.id} displayedProfileId={currentId} />
        })}
      </div>
    </div>
  )
}

export default ProfileSelector