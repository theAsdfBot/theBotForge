import React, { FunctionComponent } from 'react'

const DashboardHeader: FunctionComponent = () => {
  return (
    <thead>
      <tr className='bg-gray-850 h-12'>
        <th>TASK</th>
        <th>WEBSITE</th>
        <th>KEYWORDS/LINKS</th>
        <th>SIZE</th>
        <th>PROFILE</th>
        <th>PROXY</th>
        <th>STATUS</th>
      </tr>
    </thead>
  )
}

export default DashboardHeader