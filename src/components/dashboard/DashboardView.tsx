import React, { FunctionComponent } from 'react'

import TasksTable from './DashboardTable/TasksTable'

const Dashboard: FunctionComponent = () => {
  return (
    <div className='text-white'>
      <TasksTable />


    </div>
  )
}

export default Dashboard