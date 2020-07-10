import React, { FunctionComponent } from 'react'

const tableHeaders = [
  'TASK',
  'WEBSITE',
  'KEYWORDS/LINKS',
  'SIZE',
  'PROFILE',
  'SIZE',
  'PROXY',
  'STATUS'
]

const DashboardHeader: FunctionComponent = () => {
  return (
    <div className='bg-gray-850 h-12 flex justify-start mb-2'>
      {tableHeaders.map((title, idx) => {
        return <span className={`py-3 ${idx > 0 ? 'mx-10' : 'ml-20 mr-10'}`}>{title}</span>
      })}
    </div>
  )
}

export default DashboardHeader