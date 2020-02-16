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
    <nav className='draggable bg-black-netflix w-screen h-20 relative table'>
      <Logo />
      <div className='align-middle table-cell'>
        {tabs.map((tab, idx) => {
          return <NavItem displayName={tab.displayName} path={tab.path} key={idx} />
        })}
      </div>
    </nav >
  )
}

export default NavBar