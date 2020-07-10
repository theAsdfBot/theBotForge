import React, { FunctionComponent } from 'react'

const DashboardHeader: FunctionComponent = () => {
  return (
    <div className='bg-gray-850 h-12 flex justify-start mb-2'>
      <span className="ml-20 mr-10 py-3">TASK</span>
      <span className="mx-10 py-3" >WEBSITE</span>
      <span className="mx-10 py-3">KEYWORDS/LINKS</span>
      <span className="mx-10 py-3">SIZE</span>
      <span className="mx-10 py-3">PROFILE</span>
      <span className="mx-10 py-3">PROXY</span>
      <span className="mx-10 py-3">STATUS</span>
    </div>
  )
}

export default DashboardHeader