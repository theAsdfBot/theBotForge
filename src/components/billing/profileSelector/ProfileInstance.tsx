import React, { FunctionComponent } from 'react'

type ProfileInstancePropTypes = {
  profileName: string
}

const ProfileInstance: FunctionComponent<ProfileInstancePropTypes> = ({ profileName }) => {
  return (
    <div className='bg-gray-850 m-1 py-1 rounded' style={{ height: '30.8px' }}>
      <div className='text-white text-center'>{profileName}</div>
    </div>
  )
}

export default ProfileInstance