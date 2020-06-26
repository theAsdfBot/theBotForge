import React, { FunctionComponent } from 'react'

import DashboardHeader from './DashboardHeader'
import DashboardTask from './DashboardTask'

const sampleData = [
  {
    taskName: 'testing',
    website: 'kith',
    keywords: ['Offwhite', 'Tee', 'Jordan 1'],
    size: 'S',
    profileDisplayName: 'La Croix',
    // profile: 'enter random uuid',
    proxy: '111.11.111',
    status: 'success'
  },
  {
    taskName: 'testing2',
    website: 'supreme',
    keywords: ['box', 'logo', 'tee', 'box logo tee'],
    size: 'M',
    profileDisplayName: 'Bunny',
    // profile: 'enter random uuid to link it to the one in redux store',
    proxy: '111.11.111',
    status: 'error'
  },
]

const Dashboard: FunctionComponent = () => {
  return (
    <div className='w-full'>
      <div id='table-remove-id-later' className='text-white w-11/12 mt-4 mx-auto'>
        <DashboardHeader />
        <div id='table-body'>
          {sampleData.map(data => {
            return <DashboardTask {...data} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard