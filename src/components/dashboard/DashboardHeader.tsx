import React, { FunctionComponent } from 'react'

const DashboardHeader: FunctionComponent = () => {
  return (
    <div className='bg-gray-850 h-12 mb-2 pl-6 dashboard-item'>
      <span className='py-3'>TASK</span>
      <span className='py-3'>WEBSITE</span>
      <span className='py-3'>KEYWORDS/LINKS</span>
      <span className='py-3 text-center'>SIZE</span>
      <span className='py-3'>PROFILE</span>
      <span className='py-3'>PROXY</span>
      <span className='py-3'>STATUS</span>
    </div>
  )
}

export default DashboardHeader