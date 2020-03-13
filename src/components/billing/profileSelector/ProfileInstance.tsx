import React, { FunctionComponent } from 'react'

type ProfileInstancePropTypes = {
  profileName: string
}

const ProfileInstance: FunctionComponent<ProfileInstancePropTypes> = ({ profileName }) => {
  return <div className='bg-gray-850 text-white text-center my-1'>{profileName}</div>
}

export default ProfileInstance