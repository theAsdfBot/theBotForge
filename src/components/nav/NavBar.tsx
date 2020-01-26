import React, { FunctionComponent } from 'react'

import NavItem from './NavItem'
import Logo from './Logo'

const tabs = [
  {
    displayName: 'Dashboard',
    path: '/'
  },
  {
    displayName: 'Create Tasks',
    path: '/create-tasks'
  },
  {
    displayName: 'Proxies',
    path: '/proxies'
  },
  {
    displayName: 'Accounts',
    path: '/accounts'
  },
  {
    displayName: 'Billing',
    path: '/billing-profiles'
  },
  {
    displayName: 'Settings',
    path: '/settings'
  }
]

const NavBar: FunctionComponent = () => {
  return (
    <nav className='nav-container py-8 draggable bg-gray-900'>
      <Logo />
      <div className='nav-item-container pr-8'>
        {tabs.map(tab => {
          return <NavItem displayName={tab.displayName} path={tab.path} />
        })}
      </div>
    </nav>
  )
}

export default NavBar