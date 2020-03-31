import React, { FunctionComponent } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TasksTable: FunctionComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Website</th>
          <th>Keywords/Link</th>
          <th>Size</th>
          <th>Profile</th>
          <th>Proxy</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

export default TasksTable