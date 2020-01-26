import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const NavBar: FunctionComponent = (props) => {
  console.log(props)
  return (
    <nav className='flex-row-container'>
      <Link to='/'>Dashboard</Link>
      <Link to='/create-tasks'>Create Tasks</Link>
      <Link to='/proxies'>Proxies</Link>
      <Link to='/accounts'>Accounts</Link>
      <Link to='/billing-profiles'>Billing</Link>
      <Link to='/settings'>Settings</Link>
    </nav>
  )
}

export default NavBar