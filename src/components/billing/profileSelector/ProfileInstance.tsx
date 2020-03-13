import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

import { changeProfile } from '../../../store/billingProfiles/actions'

type ProfileInstancePropTypes = {
  profileName: string,
  profileId: string, // id of the profile instance
  displayedProfileId: string
}

const ProfileInstance: FunctionComponent<ProfileInstancePropTypes> = ({ profileName, profileId, displayedProfileId }) => {
  const dispatch = useDispatch()
  return (
    <div
      className={`bg-gray-850 m-1 py-1 rounded ${profileId === displayedProfileId ? 'border border-solid border-red-logo' : ''}`}
      style={{ height: '30.8px' }}
      onClick={e => dispatch(changeProfile(profileId))}
    >
      <div className='text-white text-center'>{profileName}</div>
    </div >
  )
}

export default ProfileInstance