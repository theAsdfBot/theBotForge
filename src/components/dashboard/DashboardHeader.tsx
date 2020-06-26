import React, { FunctionComponent } from 'react'

const DashboardHeader: FunctionComponent = () => {
  return (
    <div className='bg-gray-850 h-12'>
      <span>TASK</span>
      <span>WEBSITE</span>
      <span>KEYWORDS/LINKS</span>
      <span>SIZE</span>
      <span>PROFILE</span>
      <span>PROXY</span>
      <span>STATUS</span>
    </div>
  )
}

export default DashboardHeader